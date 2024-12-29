import time
import logging, collections
from . import bed_mesh as BedMesh
from statistics import mean

#####
# Beacon Mesh
#####

class BeaconMesh:

	#####
	# Initialize
	#####
	def __init__(self, config):
		self.config = config
		self.printer = config.get_printer()
		self.name = config.get_name()
		self.gcode = self.printer.lookup_object('gcode')
		self.reactor = self.printer.get_reactor()

		self.offset_mesh = None
		self.offset_mesh_points = [[]]
		self.pmgr = BedMeshProfileManager(self.config, self)

		self.register_commands()
		self.register_handler()

	#####
	# Handler
	#####
	def register_handler(self):
		self.printer.register_event_handler("klippy:connect", self._connect)

	def _connect(self):
		if self.config.has_section("beacon"):
			self.beacon = self.printer.lookup_object('beacon')
		if self.config.has_section("ratos"):
			self.ratos = self.printer.lookup_object('ratos')
		if self.config.has_section("bed_mesh"):
			self.bed_mesh = self.printer.lookup_object('bed_mesh')

	#####
	# Gcode commands
	#####
	def register_commands(self):
		self.gcode.register_command('BEACON_APPLY_SCAN_COMPENSATION', self.cmd_BEACON_APPLY_SCAN_COMPENSATION, desc=(self.desc_BEACON_APPLY_SCAN_COMPENSATION))
		self.gcode.register_command('CREATE_BEACON_COMPENSATION_MESH', self.cmd_CREATE_BEACON_COMPENSATION_MESH, desc=(self.desc_CREATE_BEACON_COMPENSATION_MESH))
		self.gcode.register_command('BEACON_WAIT_FOR_EXPANSION', self.cmd_BEACON_WAIT_FOR_EXPANSION, desc=(self.desc_BEACON_WAIT_FOR_EXPANSION))

	desc_BEACON_APPLY_SCAN_COMPENSATION = "Compensates a beacon scan mesh with the beacon compensation mesh."
	def cmd_BEACON_APPLY_SCAN_COMPENSATION(self, gcmd):
		profile = gcmd.get('PROFILE', "Offset")
		if not profile.strip():
			raise gcmd.error("Value for parameter 'PROFILE' must be specified")
		if profile not in self.pmgr.get_profiles():
			raise self.printer.command_error("Profile " + str(profile) + " not found for Beacon scan compensation")
		self.offset_mesh = self.pmgr.load_profile(profile)
		if not self.offset_mesh:
			raise self.printer.command_error("Could not load profile " + str(profile) + " for Beacon scan compensation")
		self.compensate_beacon_scan(profile)

	desc_CREATE_BEACON_COMPENSATION_MESH = "Creates the beacon compensation mesh by joining a contact and a scan mesh."
	def cmd_CREATE_BEACON_COMPENSATION_MESH(self, gcmd):
		profile = gcmd.get('PROFILE', "Offset")
		if not profile.strip():
			raise gcmd.error("Value for parameter 'PROFILE' must be specified")
		self.create_compensation_mesh(profile)

	desc_BEACON_WAIT_FOR_EXPANSION = "Waits until gantry bowing has been finished."
	def cmd_BEACON_WAIT_FOR_EXPANSION(self, gcmd):
		duration = gcmd.get_int('DURATION', 30)
		max_time = gcmd.get_int('MAX_TIME', 1800)
		threshold = gcmd.get_float('THRESHOLD', 0.01)

		toolhead = self.printer.lookup_object('toolhead')

		current_value = self.get_last_proximity_value()
		if current_value == None:
			gcmd.respond_info('Error. No beacon data.')

		else:
			values = []
			start_time = time.time()
			probe_start_time = time.time()

			gcmd.respond_info('waiting for thermal expansion...')

			while True:
				current_time = time.time()

				# exit if max waiting time has been reached
				if current_time - start_time >= max_time:
					gcmd.respond_info("Max waiting time reached.")
					break

				# compute mean value from within the duration time
				current_value = self.get_last_proximity_value()
				values.append(current_value)
				gcmd.respond_info(f'Current Value: {current_value:.4f}')
				if len(values) > 1 and current_time - probe_start_time >= duration:
					avg_value = mean(values)
					gcmd.respond_info(f'Current Value: {current_value:.4f}, Average of last 30 seconds: {avg_value:.4f}')

					# check for threshold value
					avg_change = mean([abs(values[i] - values[i-1]) for i in range(1, len(values))])
					if avg_change < threshold:
						gcmd.respond_info("Thermal expansion has stabilized.")
						break

					# reset
					values = []
					probe_start_time = time.time()

				# wait 5 seconds
				toolhead.dwell(5)

			gcmd.respond_info("Thermal expansion finished.")


	#####
	# Beacon Scan Compensation
	#####
	def compensate_beacon_scan(self, profile):
		systime = self.reactor.monotonic()
		try:
			if self.bed_mesh.z_mesh:
				profile_name = self.bed_mesh.z_mesh.get_profile_name()
				if profile_name != profile:
					points = self.bed_mesh.get_status(systime)["profiles"][profile_name]["points"]
					params = self.bed_mesh.z_mesh.get_mesh_params()
					x_step = ((params["max_x"] - params["min_x"]) / (len(points[0]) - 1))
					y_step = ((params["max_y"] - params["min_y"]) / (len(points) - 1))
					new_points = []
					for y in range(len(points)):
						new_points.append([])
						for x in range(len(points[0])):
							x_pos = params["min_x"] + x * x_step
							y_pos = params["min_y"] + y * y_step
							scan_z = points[y][x]
							offset_z = self.offset_mesh.calc_z(x_pos, y_pos)
							new_z = scan_z + offset_z
							self.ratos.debug_echo("Beacon scan compensation", "scan: %0.4f  offset: %0.4f  new: %0.4f" % (scan_z, offset_z, new_z))
							new_points[y].append(new_z)
					self.bed_mesh.z_mesh.build_mesh(new_points)
					self.bed_mesh.save_profile(profile_name)
					self.bed_mesh.set_mesh(self.bed_mesh.z_mesh)
					self.ratos.console_echo("Beacon scan compensation", "debug", "Mesh scan profile %s compensated with contact profile %s" % (str(profile_name), str(profile)))
		except BedMesh.BedMeshError as e:
			self.ratos.console_echo("Beacon scan compensation error", "error", str(e))

	def create_compensation_mesh(self, profile):
		systime = self.reactor.monotonic()
		if self.bed_mesh.z_mesh:
			self.gcode.run_script_from_command("BED_MESH_PROFILE LOAD='RatOSTempOffsetScan'")
			scan_mesh_points = self.bed_mesh.get_status(systime)["profiles"]["RatOSTempOffsetScan"]["points"]
			self.gcode.run_script_from_command("BED_MESH_PROFILE LOAD='%s'" % profile)
			try:
				points = self.bed_mesh.get_status(systime)["profiles"][profile]["points"]
				new_points = []
				for y in range(len(points)):
					new_points.append([])
					for x in range(len(points[0])):
						contact_z = points[y][x]
						scan_z = scan_mesh_points[y][x]
						offset_z = contact_z - scan_z
						self.ratos.debug_echo("Create compensation mesh", "scan: %0.4f  contact: %0.4f  offset: %0.4f" % (scan_z, contact_z, offset_z))
						new_points[y].append(offset_z)
				self.bed_mesh.z_mesh.build_mesh(new_points)
				self.bed_mesh.save_profile(profile)
				self.bed_mesh.set_mesh(self.bed_mesh.z_mesh)
				self.ratos.console_echo("Create compensation mesh", "debug", "Compensation Mesh %s created" % (str(profile)))
			except BedMesh.BedMeshError as e:
				self.ratos.console_echo("Create compensation mesh error", "error", str(e))

	#####
	# helper
	#####
	def get_last_proximity_value(self):
		sample = self.beacon._sample_async()
		last_value = sample["freq"]
		dist = sample["dist"]
		if dist is not None:
			return dist
		else:
			return None

#####
# Bed Mesh Profile Manager
#####
PROFILE_VERSION = 1
class BedMeshProfileManager:
	def __init__(self, config, bedmesh):
		self.name = "bed_mesh"
		self.printer = config.get_printer()
		self.gcode = self.printer.lookup_object('gcode')
		self.bedmesh = bedmesh
		self.profiles = {}
		self.incompatible_profiles = []
		# Fetch stored profiles from Config
		stored_profs = config.get_prefix_sections(self.name)
		stored_profs = [s for s in stored_profs
						if s.get_name() != self.name]
		for profile in stored_profs:
			name = profile.get_name().split(' ', 1)[1]
			version = profile.getint('version', 0)
			if version != BedMesh.PROFILE_VERSION:
				logging.info(
					"bed_mesh: Profile [%s] not compatible with this version\n"
					"of bed_mesh.  Profile Version: %d Current Version: %d "
					% (name, version, BedMesh.PROFILE_VERSION))
				self.incompatible_profiles.append(name)
				continue
			self.profiles[name] = {}
			zvals = profile.getlists('points', seps=(',', '\n'), parser=float)
			self.profiles[name]['points'] = zvals
			self.profiles[name]['mesh_params'] = params = \
				collections.OrderedDict()
			for key, t in BedMesh.PROFILE_OPTIONS.items():
				if t is int:
					params[key] = profile.getint(key)
				elif t is float:
					params[key] = profile.getfloat(key)
				elif t is str:
					params[key] = profile.get(key)
	def get_profiles(self):
		return self.profiles
	def load_profile(self, prof_name):
		profile = self.profiles.get(prof_name, None)
		if profile is None:
			return None
		probed_matrix = profile['points']
		mesh_params = profile['mesh_params']
		z_mesh = BedMesh.ZMesh(mesh_params, prof_name)
		try:
			z_mesh.build_mesh(probed_matrix)
		except BedMesh.BedMeshError as e:
			raise self.gcode.error(str(e))
		return z_mesh

#####
# Loader
#####
def load_config(config):
	return BeaconMesh(config)

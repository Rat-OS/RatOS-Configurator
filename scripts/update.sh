#!/usr/bin/env bash

# This file is only here for backwards compatibility with the old location of the post-merge githook.
# It will be removed in a future version.
SCRIPT_DIR=$( cd -- "$( dirname -- "$(realpath -- "${BASH_SOURCE[0]}")" )" &> /dev/null && pwd )

sudo "$SCRIPT_DIR"/../app/scripts/update.sh
# Important to run this after update.sh to ensure the CLI is up to date.
sudo "$SCRIPT_DIR"/../configuration/scripts/ratos-update.sh
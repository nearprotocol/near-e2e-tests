#!/bin/bash
set -exo pipefail
if nightwatch; then
    cowsay GOOD JOB
else
    cowsay FAIL
fi

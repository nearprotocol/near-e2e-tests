#!/bin/sh
set -exo pipefail
SCORE=pass
nightwatch || SCORE=fail
TESTID=$(cat testid.log)
curl --user $SELENIUM_USERNAME:$SELENIUM_ACCESS_KEY \
    -X PUT -d "action=set_score" -d "score=$SCORE" \
    http://app.crossbrowsertesting.com/api/v3/selenium/$TESTID


#!/usr/bin/env bash

NODE=node

if ! ${NODE} -v 2&>/dev/null; then
  echo "ERR: node.js package required to run the script files"
  exit 1
fi

BUNDLE_FILE="bundle.temp.js"
EXCLUDE=".web.js"

cat $(find ./app -type f | grep -v "${EXCLUDE}") > "${BUNDLE_FILE}"

node "${BUNDLE_FILE}"

#!/bin/bash

# Generate .mjs file (ES Modules), required for execution in using new JS import/export syntax (node --experimental-modules)
# index.js
cp index.js index.mjs

# All source files
for file in ./src/*.js
do
  cp $file ${file%%.js}.mjs
done

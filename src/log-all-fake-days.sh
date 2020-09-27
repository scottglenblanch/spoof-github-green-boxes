#!/usr/bin/env bash

IFS='
'

for DATE_TO_SPOOF in $(./convert.js)
do 
  ./log-fake-day.sh "${DATE_TO_SPOOF}"
done

#!/bin/bash

#################
#
# Input
#  - Date Stamp in form of 
#    - {Day of week 3 letter abbreviation} {day of Month} {month 3 letter abbreviation} {Hour}:{Minutes, 2 digit}:{Seconds, 2 digit} {Timezone 3 letter abbreviation} 
#    - example: Sat 27 Nov 2009 7:07:07 MDT
#
##############


DATE_STAMP="${@}"


echo "${DATE_STAMP}" >> log.txt
git add .
git commit -m "${DATE_STAMP}"

git push

GIT_COMMITTER_DATE="${DATE_STAMP}" git commit --amend --no-edit --date "${DATE_STAMP}"

git push --force


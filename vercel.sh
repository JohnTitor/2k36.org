#!/bin/bash

if [[ "$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')" == "main" ]] ; then
  exit 0;
fi

#!/bin/bash

echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^\[skip[[:space:]]ci\].* ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
else
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
fi

if [[ "$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')" == "main" ]] ; then
  exit 0;
fi

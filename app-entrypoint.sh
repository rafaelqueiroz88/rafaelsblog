#!/bin/sh
set -e

# if [ -f bundle check ]; then
bundle install
# fi

rm -f /app/tmp/pids/server.pid

exec "$@"
#!/bin/bash
set -euo pipefail
set +x

# use "JEKYLL_ENV=asdf" because we can't be prod or dev
# prod requires github auth tokens
# dev sets the host to 0.0.0.0, and windows doesn't treat http://0.0.0.0:4000 as localhost:4000
docker run --rm -e JEKYLL_ENV=asdf --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" -it -p 4000:4000 \
  jekyll/jekyll:3.8 \
  bundle install
docker run --rm -e JEKYLL_ENV=asdf --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" -it -p 4000:4000 \
  jekyll/jekyll:3.8 \
  jekyll serve --port 4000

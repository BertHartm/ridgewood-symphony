#!/bin/bash
set -euo pipefail
set +x

docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" -it -p 4000:4000 jekyll/jekyll:3.8 bundle install
docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" -it -p 4000:4000 jekyll/jekyll:3.8 jekyll serve

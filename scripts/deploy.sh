#!/usr/bin/env bash
branch_name="$(git symbolic-ref HEAD 2>/dev/null)" ||
branch_name="(unnamed branch)"     # detached HEAD

branch_name=${branch_name##refs/heads/}


if [[ $TRAVIS_PULL_REQUEST == 'false' ]]; then
  branch_name=$TRAVIS_BRANCH;
fi

echo "On this git branch: $branch_name"

cmd="netlifyctl deploy --site-id bolt-design-system.netlify.com --base-directory www --yes --message $branch_name"

if [[ $branch_name != 'master' ]]; then
  echo 'Draft deploy'
  cmd="$cmd --draft"
else
  echo 'Main deploy, not a draft'
fi

if [[ $NETLIFY_TOKEN ]]; then
  cmd="$cmd --access-token $NETLIFY_TOKEN"
fi

echo 'Begin deploying to Netlify..'
$cmd

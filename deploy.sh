#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git config user.name hitler617
git config user.email 1131367992@qq.com
git remote add git@github.com:hitler617/vBlog-reco.git
git push -f git@github.com:hitler617/vBlog-reco.git master:gh-pages

cd -
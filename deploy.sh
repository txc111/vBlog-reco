#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git config user.name --g hitler617
git config user.email --g 1131367992@qq.com
git push -f https://github.com/hitler617/vBlog-reco.git master:gh-pages

cd ../
rm -rf ./dist
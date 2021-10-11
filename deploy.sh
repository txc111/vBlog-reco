#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

<<<<<<< HEAD
# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

=======
cd dist

>>>>>>> d3f3a1ef6e39198529395ef67bf1b9245fd03385
git init
git add -A
git commit -m 'deploy'

<<<<<<< HEAD
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
git push -f git@github.com:hitler617/vBlog-reco.git master:gh-pages

cd -
=======
git config user.name --g hitler617
git config user.email --g 1131367992@qq.com
git push -f https://github.com/hitler617/vBlog-reco.git master:gh-pages
git config user.name --g --unset
git config user.email --g --unset
cd ..
rm -rf ./dist
>>>>>>> d3f3a1ef6e39198529395ef67bf1b9245fd03385

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
echo "发布官方文档至「GitHub」"
git push -f git@github.com:lv1024/care.git master:gh-pages
echo "发布官方文档至「码云」"
git push -f git@gitee.com:lv1024/care.git master:gh-pages
cd -
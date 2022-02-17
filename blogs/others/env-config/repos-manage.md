---
title: 多仓库ssh管理-配置同时使用Github、Gitee共存
date: 2021-05-24
sidebar: 'auto'
categories:
  - Others
tags:
  - 开发环境配置
---

:::tip
场景：

- 最近公司网络爆炸，使用 Github 非常慢，找到 Gitee 替换;
- 在公司仓库和私人仓库间切换;

设备：Macbook

文件目录： ~/.ssh
:::

## 1. 清除 git 全局设置 （新安装 git 不需要这一步）

通过 `git config --global --list` 可以查看当前配置，若有，则运行如下代码清除

```bash
$ git config --global --unset user.name

$ git config --global --unset user.email
```

## 2. 生成相关仓库的 SSH key

如下

```bash
ssh-keygen -t rsa -f ~/.ssh/id_rsa.github-company -C "你的公司邮箱"
ssh-keygen -t rsa -f ~/.ssh/id_rsa.github-self -C "你的邮箱"
ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitee -C "你的邮箱"
```

id_rsa.+后缀区分不同仓库。 直接回车 3 次即可生成。

完成后，应该有如下 6 个文件。将.pub 中的字符新增到对应网站和账号的 SSH 中

- id_rsa.github-company
- id_rsa.github-company.pub
- id_rsa.github-self
- id_rsa.github-self.pub
- id_rsa.gitee
- id_rsa.gitee.pub

## 3. 用 ssh-agent 管理多个 key

添加上面的 3 组 key 到 ssh-agent 中

```bash
$ ssh-agent bash
$ ssh-add ~/.ssh/id_rsa.github-company
$ ssh-add ~/.ssh/id_rsa.github-self
$ ssh-add ~/.ssh/id_rsa.gitee
```

## 4. 新增 config 管理多账号

一般是没有 config 文件的，需创建 `$ touch ~/.ssh/config`，其内容如下

```shell
#Default gitHub company
Host github.com
    HostName github.com
    User 你的公司名字
    IdentityFile ~/.ssh/id_rsa.github-company

#Add gitHub self
    Host git@gitlab.com
    HostName gitlab.com
    User 你的名字
    IdentityFile ~/.ssh/id_rsa.github-self

# gitee
Host gitee.com
    Port 22
    HostName gitee.com
    User 你的名字
    IdentityFile ~/.ssh/id_rsa.gitee
```

## 5. 测试是否成功

使用 `ssh -T git@github.com` 测试

---

<p align="center">
    <img src="/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

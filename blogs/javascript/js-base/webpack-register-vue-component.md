---
title: webpack自动添加和注册全局vue组件
date: 2019-04-10
categories:
  - JavaScript
tags:
  - Cli
sidebar: 'auto'
---

## 偷懒是第一生产力。

曾经每个`page`里先`import`再在`components`属性中注册，现在好了，在`components`文件夹下新建`js`文件，粘贴如下代码，再在`main.js`中引入该文件即可

```js
import Vue from 'vue';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//找到当前文件夹components下以.vue命名的文件
//使用 webpack的require.context 可以动态引入文件。
const requireComponent = require.context('.', false, /\.vue$/);
//.keys() 获取到所有文件名(一个数组) ，格式为 "./MenuBtn.vue"
//将filename去掉头尾，只保留真正的文件名
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
```

## 补充知识点 - require.context

通常我们可能会在多个页面`require`同一个组件，数量少还行，多了的话就很蛮烦，维护起来也费劲。这个时候`require.context`就排上用场了，一次性引入。

```js
require.context(directory, (useSubdirectories = false), (regExp = /^\.\//));
```

- 参数：

1. 要引入文件的目录
2. 是否要查找该目录下的子级目录
3. 匹配要引入的文件

- 返回值：

1. 返回一个 require 函数：

```js
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));

```

2. 此返回函数有三个属性：

- - resolve: 是一个函数，他返回的是被解析模块的 id
- - keys: 也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成
- - id：上下文模块的 id

## 简写

将 svg 目录下所有的 svg 文件都引入到项目中:

```js
let requireAll = requireContext => requireContext.keys().map(requireContext);
let req = require.context('./svg', false, /\.svg$/);
requireAll(req);
```

---

<p align="center">
    <img src="/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

---
title: 小技巧收集 - 操作符，网页后退不刷新
date: 2019-04-01
categories:
  - JavaScript
tags:
  - JavaScript
sidebar: 'auto'
---

# 逻辑操作符

三目运算代替 if else 没啥问题，当条件判断为 false 时，比较尴尬，只能这样写：

```js
b ? console.log('it is true') : {};
b ? console.log('it is true') : undefined;
```

## &&--与操作符

这个时候可以使用逻辑与操作符<font color=red>&&</font>解决：

```js
b && console.log('it is true');
```

常见用法：

```js
true && console.log('It is true'); // It is true
true && false && console.log('It is true'); // 返回 false
true && 0 && console.log('It is true'); // 返回 0
true && undefined == null && console.log('It is true'); // It is true, 表达式undefined == null的运算结果为true
true && undefined === null && console.log('It is true'); // 返回 false, 表达式undefined === null的运算结果为false
```

## ||--或操作符

如下场景：

```js
// 当自身为undefined时，赋值为0，否则还是赋值为自身
val = val !== undefined ? val : 0;
```

使用或操作符解决：

```js
val = val || 0;
```

# 网页后退不刷新问题

正常在需要做页面后退操作时，可以通过调用 history 对象的 go 方法和 back 方法来控制页面后退，

```js
window.history.go(-1);
window.history.back();
```

但是在部分移动端浏览器及 webview 中，页面实现了后退但是并没有刷新，而是使用了缓存。

这里总结了几种强制回退页面后刷新上一页的方法。

[网页后退不刷新](https://github.com/RicardoCao-Biker/RICO-BLOG/issues/17)

---

<p align="center">
    <img src="/vBlog-reco/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

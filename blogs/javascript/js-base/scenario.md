---
title: 记录一些应用场景和短代码
date: 2019-04-10
categories:
  - JavaScript
tags:
  - JavaScript
sidebar: 'auto'
---

## Vue 刷新当前页面

使用场景 ： 切换语言后， 路由不动， 不会刷新当前页面
解决办法 ： 依赖注入
provide 是提供商 ， inject 是注入器 ， 依赖呢？ 概念有点模糊

```js
//根节点（或一般父组件）中 ， provide
<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default{
  name:'app',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return {
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    }
  }
}
</script>
// 后代组件中 ，使用inject 来 注入 provide的方法

inject:['reload]

//在 后代组件中 ， 完成逻辑后 ，使用 this.reload()   即可
```

## 简单的添加元素的稍微见状的代码

需求 ， 给某个元素添加 3 个子元素 ， 内容是序号 。 初级写法 ， 完成基本功能 ：

```js
var container = document.getElementById('list');
for (var i = 0; i < 3; i++) {
  var item = document.createElement('li');
  item.innerText = i + 1;
  container.appendChild(item);
}
//或字符串形式 ， 更好一点点
var container = document.getElementById('list');
var html = [];
for (var i = 0; i < 3; i++) {
  html.push('<li>' + (i + 1) + '</li>');
}
container.innerHTML = html.join('');
```

1. 需判断找不到 `list`的情况 , 一个小错可能搞崩整个程序 -- 容错能力
2. `container`会成为全局变量 , 用 IIFE 将其包裹 , 还可避免命名冲突 -- 最小作用域原则
3. 命令不规范 , `container` 加`nd`前缀会更容易辨识是一个节点(node)变量 , `list` 加 `js-` 前缀区分 `css` 和`js`选择器

```js
(() => {
  //IIFE包裹
  var ndContainer = document.getElementById('js-list');
  if (!ndContainer) {
    //找不到节点则返回 , 不执行下面的(会报错搞崩)
    return;
  }

  for (var i = 0; i < 3; i++) {
    var ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndContainer.appendChild(ndItem);
  }
})();
```

## 对象的 key 值只能是字符串或 Symbol

```js
// example 1
var a = {},
  b = '123',
  c = 123;
a[b] = 'b';
a[c] = 'c'; // c自动转成 '123'  , 覆盖了上边a[b]的值
console.log(a[b]); // 'c'

// example 2
var a = {},
  b = Symbol('123'),
  c = Symbol('123');
a[b] = 'b';
a[c] = 'c'; // Symbol不用转字符串 , 都是独一份 ,  不会覆盖
console.log(a[b]); // 'b'

// example 3
var a = {},
  b = { key: '123' },
  c = { key: '456' };
a[b] = 'b'; // 转字符串 , 对象类型会调用 toString 方法转换成字符串 `[object Object]`
a[c] = 'c'; // 也要转 , 结果都是 `[object Object]` ,所以再次覆盖
console.log(a[b]); // 'c'
```

## 如何解决移动端 Retina 屏 1px 像素问题

[掘金的七种方案](https://juejin.im/entry/584e427361ff4b006cd22c7c)

1. 伪元素 + transform scaleY(.5)
2. border-image
3. background-image
4. box-shadow
5. rem + viewport 操作步骤如下。在根元素 html 设置 font-size. 将元素转换成 rem .通过 window.devicePixelRatio 拿到 dpr 再写 meta 设置 viewport 的 scale : 1/dpr

## 修改图片大小问题

已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。

```html
<img src="1.jpg" style="width:480px!important;”>
```

解决方法 ：

```css
/* 限制最大宽度 */
max-width: 300px;
/* 缩小 */
transform: scale(0.625, 0.625);
/* 定盒子类型 ， 再用padding ‘挤小’ 内容*/
box-sizing: border-box;
padding: 0 90px;
```

## 数组 sort 排序

根据 MDN 上对 Array.sort()的解释, 默认的排序方法会将数组元素转换为字符串, 然后比较字符串中字符的 UTF-16 编码顺序来进行排序。所以'102' 会排在 '15' 前面。以下是 MDN 中的解释原文：

> The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```js
[3, 15, 8, 29, 102, 22].sort()[
  // [102, 15, 22, 29, 3, 8]

  (3, 15, 8, 29, 102, 22)
].sort(function(a, b) {
  return a - b;
});
// [3, 8, 15, 22, 29, 102]
```

## sleep

```js
// 1 基于Promise
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
//直接用
sleep(1000).then(() => {
  // 函数
});
//或 再封一层
function asleep(fn, t) {
  sleep(t).then(fn);
}
//或 用async
async function sleepAsync() {
  // do something
  await sleep(1000); // 死等 1 秒
  // continue ..
}
// 2 用 async / await
const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });
```

## 作用域与变量提升 1

```js
var a = 10;
(function() {
  console.log(a);
  a = 5;
  console.log(a);
  console.log(window.a);
  var a = 20;
  console.log(a);
})();
//undefined
//5
//10
//20
```

## 箭头函数 - 最好不用的场景

函数体内的 this 对象 , 就是定义时所在的对象 , 而不是使用时所在的对象. 不改变 this 指向是其优势 .  
 -- this 对象的指向是可变的 , 但是在箭头函数中 , 它是固定的 , 箭头函数中的 this 总是指向函数**定义生效时**所在的对象 , 例子如下 :

```js
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
```

箭头函数的定义生效是在 foo 函数生成时(_于是, 箭头函数里的 this 就是 foo!_)，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时 this 应该指向全局对象 window，这时应该输出 21。但是，箭头函数导致 this 总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是 42。

箭头函数可以让 setTimeout 里面的 this，绑定**定义时**所在的作用域，而不是指向**运行时**所在的作用域。

这个特性在某些场景反而不好用 :

1. 定义对象的方法 , 对象不构成单独的作用域 , 导致其内的箭头函数定义时的作用域就是全局作用域
2. 定义原型的方法
3. 事件的回调

```js
//1
let foo = {
  value: 1,
  ff: function() {
    console.log(this);
  },
  getValue: () => console.log(this.value)
};

foo.getValue(); // undefined . 去window找value去了
//2
function Foo() {
  this.value = 1;
}

Foo.prototype.getValue = () => console.log(this.value);

let foo = new Foo();
foo.getValue(); // undefined
//3
button.addEventListener('click', () => {
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});
```

## 模板字符串

- 如果使用标记模板字面量 , 第一个参数的值总是包含字符串的数组。其余的参数获取的是传递的表达式的值！

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`; // ["", " is ", " years old"] "Lydia" 21
```

## 拷贝的应用场景

比如用于页面展示的数据状态 , 与需要传给后端的数据包中 , 有部分字段的值不一致的话 , 就需要在传参时根据接口文档覆写那几个字段的值。

最常见的可能就是 status 这个参数了。界面上的展示需要 Boolean 值 , 而后端同学希望拿到的是 Number 值 , 1 或者 0。为了不影响展示效果 , 往往就需要深拷贝一下 , 再进行覆写 , 否则界面上就会因为某些值的变化 , 出现奇怪的现象。

## Promise

```js
const getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    const handler = function() {
      //状态判断
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response); // this.response作为参数传给then中的json
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application.json');
    client.send();
  });
};
getJSON('/post.json').then(
  function(json) {
    console.log('Contents: ' + json);
  },
  function(error) {
    console.log('error happen ', error);
  }
);
```

上面代码中 , getJSON 是对 XMLHttpRequest 对象的封装 , 用于发出一个针对 JSON 数据的 HTTP 请求 , 并且返回一个 Promise 对象。需要注意的是 , 在 getJSON 内部 , resolve 函数和 reject 函数调用时 , 都带有参数。

### catch 方法

Promise.prototype.catch 方法是.then(null, rejection)或.then(undefined, rejection)的别名 , 用于指定发生错误时的回调函数。

```js
p.then(val => console.log('fulfilled:', val)).catch(err =>
  console.log('rejected', err)
); // promise中任何一个抛出错误 , 都会被最后一个catch捕获

// 等同于
p.then(val => console.log('fulfilled:', val)).then(null, err =>
  console.log('rejected:', err)
);
```

### finally 方法

Promise.prototype.finally()方法（其不接受任何参数）用于指定不管 Promise 对象最后状态如何 , 都会执行的操作。该方法是 ES2018 引入标准的。

语法：

```js
promise
	.then(result => {···})
	.catch(error => {···})
	.finally(() => {···});
```

### Promise.all

构造函数方法 Promise.all 方法用于将多个 Promise 实例 , 包装成一个新的 Promise 实例。  
只有这 all 中传入的 promise 实例的状态都变成 fulfilled , 或者其中有一个变为 rejected , 才会调用 Promise.all 方法后面的回调函数.

⚠️ 注意 , 如果作为参数的 Promise 实例 , 自己定义了 catch 方法 , 那么它一旦被 rejected , 并不会触发 Promise.all()的 catch 方法。所以使用 Promise.all()别手痒在每个实例 promise 内添加错误捕获。

## 防抖和节流

- **throttle 节流** 间隔一定时间触发回调来控制函数调用频率

1. DOM 元素的拖拽功能实现（mousemove）

2. 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）

3. 计算鼠标移动的距离（mousemove）

4. Canvas 模拟画板功能（mousemove）

5. 搜索联想（keyup）

6. 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后 , 只有用户停止滚动后 , 才会判断是否到了页面底部

- **debounce 防抖** 对于连续的事件响应我们只需要执行一次回调  
  ；

1. 每次 resize/scroll 触发统计事件

2. 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证 , 验证一次就好）

## 闭包应用场景之 setTimeout

`setTimeout(func(parma),1000);`这样的语句是不生效的（不过在不同浏览器中有不同的错误 , 总之都无法达到预期效果）. 这时 , 我们就可以用闭包来实现这个效果了。

```js
function func(param) {
  return function() {
    alert(param);
  };
}
var f = func(1); //这里传入参数了
setTimeout(f, 1000);
```

## typeof null == 'object' -- <你不知道的 JavaScript 中卷>

正确结果应该是'null' , 由来已久的 bug , 非得判断是 null ,添加一个条件:

```js
let a = null;
!a && typeof a === 'object'; //true
```

## undefined 和 undeclared -- ES6 引入模块化之后 , 用的不多

```js
let a;

a; //undefined
b; //Uncaught ReferenceError: b is not defined

typeof a; //undefined
typeof b; //undefined
```

如上 , a 是声明后未赋值 , b 则是连声明都没有 , 应该是 undeclared , 不过报错的内容是 'is not defined' , 容易与 undefined 混为一谈 .  
而使用 typeof 则发现两者结果相同 , 并且对 b 使用没有报错!

---

<p align="center">
    <img src="/vBlog-reco/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

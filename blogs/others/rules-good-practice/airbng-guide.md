---
title: 谷歌与Airbnb的代码风格
date: 2019-04-12
categories:
  - Others
tags:
  - 代码规范
sidebar: 'auto'
sidebarDepth: 2
---

## 谷歌代码规范

### 使用空格，而不是制表符

使用**两个空格**(而不是四个)进行缩进。研究表明，使用空格缩进的人工资跟高:tada:

### 分号是必需的

每个语句必须以分号结束，禁止依靠自动分号插入。

### 不要再使用 var 了

使用 const 或 let 声明所有本地变量来代替 var。默认情况下使用 const，除非需要重新分配变量在使用 let 声明。

### 箭头函数是首选

箭头函数提供了简洁的语法，并解决了 this 在函数中不确定性的一些问题，与 function 关键字相比，更喜欢箭头函数，特别是对于嵌套函数。

### 使用模板字符串而不是拼接客串

在复杂的字符串连接上使用模板字符串(用`分隔)，特别是在涉及多个字符串文本时，模板字符串可以跨越多行。

### 常量应该用全大写字母命名，用下划线分隔

常量名称使用 CONSTANT_CASE 的格式:所有大写字母，单词由下划线分隔。

### 每次声明一个变量

每个局部变量声明只声明一个变量:

```js
// bad
let a = 1,
  b = 2,
  c = 3;

// good
let a = 1;
let b = 2;
let c = 3;
```

### 使用单引号，而不是双引号

普通的字符串用单引号(')分隔，而不是双引号(")。
提示:如果字符串包含单引号字符，可以考虑使用模板字符串来避免转义引号。

```js
// bad
let directive = 'No identification of self or mission.';
// bad
let saying = 'Say it ain\u0027t so.';

// good
let directive = 'No identification of self or mission.';
// good
let saying = `Say it ain't so`;
```

## Airbnb 代码规范

### 使用字面值创建对象

```js
// bad
const item = new Object();

// good
const item = {};
```

### 使用对象方法的简写

```js
// bad
const atom = {
  value: 1,

  addValue: function(value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

### 浅拷贝对象最好用 … 而不是 Object.assign

**使用 … 复制数组 too。**

```js
// good
const itemsCopy = [...items];

// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original`
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

### 如果一个函数适合用一行写出并且只有一个参数，那就把花括号、圆括号和 return 都省略掉。如果不是，那就不要省略

为什么？语法糖。在链式调用中可读性很高。
为什么不？当你打算回传一个对象的时候。

```js
// good
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].reduce((total, n) => {
  return total + n;
}, 0);
```

### 总是使用 class。避免直接操作 prototype

为什么? 因为 class 语法更为简洁更易读。

```js
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

### 不要使用 iterators,使用高阶函数例如 map() 和 reduce() 替代 for-of

为什么？这加强了我们不变的规则。处理纯函数的回调值更易读，这比它带来的副作用更重要。

```js
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

sum === 15;

// good
let sum = 0;
numbers.forEach((num) => (sum += num));
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;
```

# END

---

<p align="center">
    <img src="/vBlog-reco/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

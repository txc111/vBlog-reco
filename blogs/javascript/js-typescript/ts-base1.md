---
title: Typescript 不熟悉的点和易错点
date: 2019-04-11
categories:
  - JavaScript
tags:
  - JavaScript
sidebar: 'auto'
---

## 布尔 - Boolean 和 boolean -- 大小写之分

```ts
let flag: boolean = false;

let createdByNewBoolean: Boolean = new Boolean(1); //new 返回的是Boolean对象

let createdByBoolean: boolean = Boolean(1); // 返回boolean - true或者false
```

## 类型推论

```ts
let aNumberOrStr = 'seven'; // 等价于  let str :string= 'seven';

aNumberOrStr = 7; // ❌
```

## 联合类型

```ts
//string 和 number 都有toString方法, 访问 共有属性 没问题
function getString(something: string | number): string {
  return something.toString();
}

// number类型没有length属性 , 所以编译错误
function getLength(something: string | number): number {
  return something.length; //❌
}
// 断言可以解决这类问题 , 上面 getLength 函数体里 改为如下 即可解决
if ((<string>something).length) {
  // 断言的另一种表达 something as string
  return (<string>something).length;
} else {
  return something.toString().length;
}
```

## 类型别名

```ts
// 使用 type 创建类型别名,类型别名常用于联合类型
type Name = string; // 别名需要首字母大写 , type相当于const
type GetNameFunc = () => string;
type NameOrGetNameFunc = Name | GetNameFunc;
function getName(n: NameOrGetNameFunc): Name {
  // 保证n是string , 可以传入返回string的函数
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}
```

## 接口 - Interface -- 与 class 的区别

Interface 只是一个形状 , 没有"实体" , 是对真正的实体进行限制的 , 没有原型和方法  
class 则是有实体的, 其上有原型 , 有方法

```ts
interface Person {
  readonly id: number; //只读
  name: string;
  age?: number; //可选属性
  [propName: string]: string; // 可添加任意属性 - 可以添加上面三项以外的属性名 . 但是这里有个坑   -- 最好将其value 设置为 any
}

let jay: Person = {
  name: 'Tom',
  gender: 'male',
  age: 25, // ❌ - 可选属性 age 的值 也要符合 任意属性的类型 , 这里必须为string , 所以一般任意属性的类型设为 any 比较合适 .
};

jay.id = 666; // 不能被二次赋值❌
```

## 枚举

```ts
// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天
// 枚举就是枚举值到枚举名进行反向映射

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun']); // 0
console.log(Days[0]); // 'Sun'

enum Days {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun']); // 7
```

## 函数

```ts
//  => 是 typescript 用来表示函数返回值类型的 , 和 ES6 中的 => 不同
let sum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
// 可选参数必须放到最后 -- rest参数同样也是
function fullName(firstName?: string, lastName: string) { ... }  //❌
```

## 泛型 -- 加强函数

```ts
// 两个函数 分别返回 string  和number
function getData1(value: string): string {
  return value;
}
function getData2(value: number): number {
  return value;
}

// T表示泛型，具体什么类型由参数决定 , 传什么类型就返回什么类型
function getData<T>(value: T): T {
  return value;
}
getData<number>(11);
getData<string>('ss');

// 定义接口
interface ConfigFn {
  <T>(value: T): T;
}
var getData: ConfigFn = function<T>(value: T): T {
  return value;
};
getData<string>('ss');
getData<string>(11); //错误
getData<number>(11); // 正确
```

---

<p align="center">
    <img src="/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

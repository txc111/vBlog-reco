---
title: 新版Gulp搭自用脚手架
date: 2019-04-10
categories:
  - JavaScript
tags:
  - Cli
sidebar: 'auto'
---

:::tip
离了 vue-cli 能干点什么，试试 gulp 自动化。

- [Gulp 中文网](https://www.gulpjs.com.cn/)
- [项目地址](https://github.com/hitler617/gulp-ty)
  开发和发布版本借鉴了[Fernweh_Nancy](https://www.jianshu.com/p/db49513a40ec)的思路
  :::
  > 实现了处理 es6、sass，自动添加 css 前缀，压缩，雪碧图，清除文件，自动重载  
  > 三个版本迭代： 无自动重载->有自动重载->生产和发布两个版本区分（主要是压缩和自动重载）

## gulp 语法变化

新版本 4.x 和 3.x 的区别有点大，这里只提一点我碰到的最常用的。

```javascript
//旧  3.x
gulp.task('dev', ['del', 'browserSync']);
//新  4.x
gulp.task('dev', gulp.series(['dev', 'browserSync']));
```

## 生产和发布的不同处理

**主要差异是生产不压缩，要自动刷新页面**
有一种思路是给个标志来确定是哪种环境，然后使用 gulp-if 来判断分叉，懒的思考，直接搞了 2 个文件。。  
新建了一个 gulpConfig 文件夹，大致文件结构如下：  
**─gulpConfig**  
├─index.js //地址配置和一些判断条件  
├─gulpfile.dev.js //开发环境处理  
└─gulpfile.prod.js //发布处理  
**─src**  
├─assets //第三方库  
├─style  
├─images  
├─js  
└─index.html  
**─gulpfile.js** //运行 dev 和 prod  
**─package.json**  
可通过 gulp 可以直接调用 gulpfile.dev.js 和 gulpfile.prod.js 中的函数。

## 卡壳的地方：browser-sync 自动重载

官网资料来源有 2 个，  
[gulp 官网-拥有实时重载（live-reloading）和 CSS 注入的服务器](https://www.gulpjs.com.cn/docs/recipes/server-with-livereload-and-css-injection/),  
[browsersync 官网-Browsersync + Gulp.js](http://www.browsersync.cn/docs/gulp/)

gulp 中文官网的代码实际操作时，只能在第一次更改后自动刷新网页，之后就无效了。
在[segmentfault](https://segmentfault.com/q/1010000019206408?_ea=11290037)提问，get 新知识点，有的东西还是去英文官网查比较好，中英文网站的 api 界面差距明显。英文网址在此，方便以后查询：
[gulp-api](https://gulpjs.com/docs/en/api/concepts)

目前从结果推导，两个官网提供的代码差异在 reload 给谁，结果是监听 html 变化后给 reload，这点还没太明白，会继续跟进。

### gulp 官网代码

```js{7}
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
  //实际开发过程中改变的是scss
  gulp.watch(
    ['*.html', 'styles/**/*.css', 'scripts/**/*.js'],
    { cwd: 'app' },
    reload
  );
});
```

### browser-sync 官网代码

```js{6}
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './app'
  });
  gulp.watch('app/scss/*.scss', ['sass']); //实际开发过程中改变的是scss
  gulp.watch('app/*.html').on('change', reload); //reload在这里
});
```

### browser-sync 新写法

**更改 scss 可刷新**  
browser 监听在 files 中添加，只监听 css 即可，gulp 监听 scss，调用 sass 任务生成 css。不需要（到处）添加`reload`了。

```js{13}
gulp.task('sass', () => {
  return gulp
    .src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src'));
});

gulp.task('serve', () => {
  browserSync.init(
    {
      server: {
        baseDir: './src'
      },
      files: ['src/**/*.css'] // 这里填写监听的文件列表
    },
    function() {
      console.log('browser refreshed');
    }
  );
  gulp.watch('src/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'serve'));
```

---

<p align="center">
    <img src="/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

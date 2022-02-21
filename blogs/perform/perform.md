---
title: 前端性能优化思路
date: 2022-02-21
categories:
  - Perform
tags:
  - 性能优化
sidebar: 'auto'
sidebarDepth: 1
---

## 前端性能优化思路

> 参考资料 山月大佬 : https://shanyue.tech/web-performance/

可分为2类
- 加载速度. 并行和缩小体积
- 渲染速度. 减少重排重绘等

谷歌的LightHouse已经给出了一些专业的评估标准. 如
- LCP: 加载性能。最大内容绘制应在 2.5s 内完成。
- FID: 交互性能。首次输入延迟应在 100ms 内完成。
- CLS: 页面稳定性。累积布局偏移，需手动计算，- CLS 应保持在 0.1 以下。


### 加载速度

- 使用CDN更快的就近分发
- 升级http2,更多的并发请求,压缩了头部,可设置优先级 -> 针对目前工作环境,需升级nginx并配置location来开起
- 缓存策略. 缓存, 分包及懒加载
- 减小资源体积. 
  - 小图片可转base64(svg转了反而变大),图片按需/懒加载. 
  - 图片优先考虑 avif/webp 格式. 可如下防御/回退
  ```html
    <picture>
      <source srcset="img/photo.avif" type="image/avif">
      <source srcset="img/photo.webp" type="image/webp">
      <img src="img/photo.jpg" width="360" height="240">
    </picture>
  ```
  - 更进一步, 可利用CDN针对不同尺寸的设备进行针对性的图片压缩
  - 压缩(gzip以及更强的brotli)
  - 更小的js. Terser 压缩混淆, tree shaking, 用心的browserlist/babel配置,可能有更小的垫片体积, 同样需求用体积更小的库


### 渲染速度

以下五个步骤为关键渲染路径

1. HTML -> DOM，将 html 解析为 DOM
2. CSS -> CSSOM，将 CSS 解析为 CSSOM
3. DOM/CSSOM -> Render Tree，将 DOM 与 CSSOM 合并成渲染树
4. RenderTree -> Layout，确定渲染树中每个节点的位置信息
5. Layout -> Paint，将每个节点渲染在浏览器中

渲染的优化很大程度上是对关键渲染路径进行优化。

- preload/prefetch 可控制 HTTP 优先级，从而达到关键请求更快响应的目的。
- 虚拟列表优化
- 缓存api
- Web Worker




---

<p align="center">
    <img src="/vBlog-reco/avatar.png"  width="800" height="526">
    <p align="center">
        <em>Gunners</em>
    </p>
</p>

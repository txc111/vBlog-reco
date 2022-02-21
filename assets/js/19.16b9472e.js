(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{593:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前端性能优化思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化思路"}},[t._v("#")]),t._v(" 前端性能优化思路")]),t._v(" "),s("blockquote",[s("p",[t._v("参考资料 山月大佬 : https://shanyue.tech/web-performance/")])]),t._v(" "),s("p",[t._v("可分为2类")]),t._v(" "),s("ul",[s("li",[t._v("加载速度. 并行和缩小体积")]),t._v(" "),s("li",[t._v("渲染速度. 减少重排重绘等")])]),t._v(" "),s("p",[t._v("谷歌的LightHouse已经给出了一些专业的评估标准. 如")]),t._v(" "),s("ul",[s("li",[t._v("LCP: 加载性能。最大内容绘制应在 2.5s 内完成。")]),t._v(" "),s("li",[t._v("FID: 交互性能。首次输入延迟应在 100ms 内完成。")]),t._v(" "),s("li",[t._v("CLS: 页面稳定性。累积布局偏移，需手动计算，- CLS 应保持在 0.1 以下。")])]),t._v(" "),s("h3",{attrs:{id:"加载速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载速度"}},[t._v("#")]),t._v(" 加载速度")]),t._v(" "),s("ul",[s("li",[t._v("使用CDN更快的就近分发")]),t._v(" "),s("li",[t._v("升级http2,更多的并发请求,压缩了头部,可设置优先级 -> 针对目前工作环境,需升级nginx并配置location来开起")]),t._v(" "),s("li",[t._v("缓存策略. 缓存, 分包及懒加载")]),t._v(" "),s("li",[t._v("减小资源体积.\n"),s("ul",[s("li",[t._v("小图片可转base64(svg转了反而变大),图片按需/懒加载.")]),t._v(" "),s("li",[t._v("图片优先考虑 avif/webp 格式. 可如下防御/回退")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("picture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/photo.avif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image/avif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/photo.webp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image/webp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/photo.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("360"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("240"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("picture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("更进一步, 可利用CDN针对不同尺寸的设备进行针对性的图片压缩")]),t._v(" "),s("li",[t._v("压缩(gzip以及更强的brotli)")]),t._v(" "),s("li",[t._v("更小的js. Terser 压缩混淆, tree shaking, 用心的browserlist/babel配置,可能有更小的垫片体积, 同样需求用体积更小的库")])])])]),t._v(" "),s("h3",{attrs:{id:"渲染速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染速度"}},[t._v("#")]),t._v(" 渲染速度")]),t._v(" "),s("p",[t._v("以下五个步骤为关键渲染路径")]),t._v(" "),s("ol",[s("li",[t._v("HTML -> DOM，将 html 解析为 DOM")]),t._v(" "),s("li",[t._v("CSS -> CSSOM，将 CSS 解析为 CSSOM")]),t._v(" "),s("li",[t._v("DOM/CSSOM -> Render Tree，将 DOM 与 CSSOM 合并成渲染树")]),t._v(" "),s("li",[t._v("RenderTree -> Layout，确定渲染树中每个节点的位置信息")]),t._v(" "),s("li",[t._v("Layout -> Paint，将每个节点渲染在浏览器中")])]),t._v(" "),s("p",[t._v("渲染的优化很大程度上是对关键渲染路径进行优化。")]),t._v(" "),s("ul",[s("li",[t._v("preload/prefetch 可控制 HTTP 优先级，从而达到关键请求更快响应的目的。")]),t._v(" "),s("li",[t._v("虚拟列表优化")]),t._v(" "),s("li",[t._v("缓存api")]),t._v(" "),s("li",[t._v("Web Worker")])]),t._v(" "),s("hr"),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/vBlog-reco/avatar.png",width:"800",height:"526"}})]),s("p",{attrs:{align:"center"}},[s("em",[t._v("Gunners")])]),t._v(" "),s("p")])}),[],!1,null,null,null);a.default=e.exports}}]);
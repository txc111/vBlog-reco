(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{591:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("场景：")]),s._v(" "),t("ul",[t("li",[s._v("最近公司网络爆炸，使用 Github 非常慢，找到 Gitee 替换;")]),s._v(" "),t("li",[s._v("在公司仓库和私人仓库间切换;")])]),s._v(" "),t("p",[s._v("设备：\b\bMacbook")]),s._v(" "),t("p",[s._v("文件目录： ~/.ssh")])]),t("h2",{attrs:{id:"_1-清除-git-全局设置-新安装-git-不需要这一步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-清除-git-全局设置-新安装-git-不需要这一步"}},[s._v("#")]),s._v(" 1. 清除 git 全局设置 （新安装 git 不需要这一步）")]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("git config --global --list")]),s._v(" 可以查看当前配置，若有，则运行如下代码清除")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.name\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.email\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_2-生成相关仓库的-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成相关仓库的-ssh-key"}},[s._v("#")]),s._v(" 2. 生成相关仓库的 SSH key")]),s._v(" "),t("p",[s._v("如下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -f ~/.ssh/id_rsa.github-company -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的公司邮箱"')]),s._v("\nssh-keygen -t rsa -f ~/.ssh/id_rsa.github-self -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的邮箱"')]),s._v("\nssh-keygen -t rsa -f ~/.ssh/id_rsa.gitee -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的邮箱"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("id_rsa.+后缀区分不同仓库。 直接回车 3 次即可生成。")]),s._v(" "),t("p",[s._v("完成后，应该有如下 6 个文件。将.pub 中的字符新增到对应网站和账号的 SSH 中")]),s._v(" "),t("ul",[t("li",[s._v("id_rsa.github-company")]),s._v(" "),t("li",[s._v("id_rsa.github-company.pub")]),s._v(" "),t("li",[s._v("id_rsa.github-self")]),s._v(" "),t("li",[s._v("id_rsa.github-self.pub")]),s._v(" "),t("li",[s._v("id_rsa.gitee")]),s._v(" "),t("li",[s._v("id_rsa.gitee.pub")])]),s._v(" "),t("h2",{attrs:{id:"_3-用-ssh-agent-管理多个-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-用-ssh-agent-管理多个-key"}},[s._v("#")]),s._v(" 3. 用 ssh-agent 管理多个 key")]),s._v(" "),t("p",[s._v("添加上面的 3 组 key 到 ssh-agent 中")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ssh-agent "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n$ ssh-add ~/.ssh/id_rsa.github-company\n$ ssh-add ~/.ssh/id_rsa.github-self\n$ ssh-add ~/.ssh/id_rsa.gitee\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_4-新增-config-管理多账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-新增-config-管理多账号"}},[s._v("#")]),s._v(" 4. 新增 config 管理多账号")]),s._v(" "),t("p",[s._v("一般是没有 config 文件的，需创建 "),t("code",[s._v("$ touch ~/.ssh/config")]),s._v("，其内容如下")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Default gitHub company")]),s._v("\nHost github.com\n    HostName github.com\n    User 你的公司名字\n    IdentityFile ~/.ssh/id_rsa.github-company\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Add gitHub self")]),s._v("\n    Host git@gitlab.com\n    HostName gitlab.com\n    User 你的名字\n    IdentityFile ~/.ssh/id_rsa.github-self\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitee")]),s._v("\nHost gitee.com\n    Port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n    HostName gitee.com\n    User 你的名字\n    IdentityFile ~/.ssh/id_rsa.gitee\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"_5-测试是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试是否成功"}},[s._v("#")]),s._v(" 5. 测试是否成功")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("ssh -T git@github.com")]),s._v(" 测试")]),s._v(" "),t("hr"),s._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"/vBlog-reco/avatar.png",width:"800",height:"526"}})]),t("p",{attrs:{align:"center"}},[t("em",[s._v("Gunners")])]),s._v(" "),t("p")])}),[],!1,null,null,null);a.default=n.exports}}]);
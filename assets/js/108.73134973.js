(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{291:function(t,a,s){"use strict";s.r(a);var v=s(0),r=Object(v.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"微信小程序概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信小程序概述")]),t._v(" "),s("h2",{attrs:{id:"什么是微信小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是微信小程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是微信小程序")]),t._v(" "),s("p",[t._v("根据张小龙的定义，微信小程序有下面这些特点：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("不需要下载安装即可使用")]),t._v("：这个说话是有点推销的含义，从技术的角度讲不可能存在不下载就可以使用的东西，只不过微信小程序的安装包不允许超过1M，所以下载速度很快，下载时间很短，相对于App,用户几乎感觉不到下载的过程。")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("用户用完即走，不用关心是否安装太多应用")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("应用无处不在，随时可用")])],1)]),t._v(" "),s("p",[t._v("至于微信小程序为什么会横空出世，你必须要知道相对于手机App,它的价值在哪里?")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("B2C（人与商品）")]),t._v("： 淘宝，京东")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("P2P（人与人）")]),t._v("：微信，QQ")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("C2P（人与服务）")]),t._v("：微信小程序(小黄车)")],1)]),t._v(" "),s("p",[t._v("微信小程序的特点在哪里？")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("业务逻辑简单")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("使用频率低")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("性能要求低")])],1)]),t._v(" "),s("p",[t._v("新版小程序的开发者工具有所变化，工具栏移动了上面，另外要注意的是："),s("font",{attrs:{color:"#DD1144"}},[t._v("个人开发者需要在下载好开发工具和建立项目后，需要勾选:设置/项目设置/不校验合法域名，web-view(业务域名)，TLS版本及HTTPS证书，或者在下载好源码后，在第一次运行之前就要勾选")])],1),t._v(" "),s("h2",{attrs:{id:"小程序开发准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序开发准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序开发准备")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("申请小程序账号（appid）")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("下载并安装微信开发者工具")])],1)]),t._v(" "),s("h3",{attrs:{id:"_1-申请小程序账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-申请小程序账号","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 申请小程序账号")]),t._v(" "),s("p",[t._v("进入"),s("font",{attrs:{color:"#9400D3"}},[t._v("微信公众平台")]),t._v("，点击"),s("font",{attrs:{color:"#9400D3"}},[t._v("立即注册")]),t._v("，然后选择"),s("font",{attrs:{color:"#9400D3"}},[t._v("小程序")]),t._v("，经过一系列的填写验证，我们最终可以在登录微信公众平台后在小程序的管理页面找到"),s("font",{attrs:{color:"#9400D3"}},[t._v("开发设置")]),t._v("，这里找到"),s("font",{attrs:{color:"#DD1144"}},[t._v("小程序的ID")])],1),t._v(" "),s("p",[t._v("小程序的"),s("code",[t._v("AppID")]),t._v("相当于小程序平台的一个身份证，后续你会在很多地方要用到"),s("code",[t._v("AppID")])]),t._v(" "),s("h3",{attrs:{id:"_2-微信开发者工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-微信开发者工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 微信开发者工具")]),t._v(" "),s("p",[t._v("到"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html"),s("OutboundLink")],1),t._v("下载适合自己电脑的工具。")]),t._v(" "),s("p",[t._v("打开之后，添加一个程序的项目：\n"),s("img",{attrs:{src:t.$withBase("/weixin_rumen_signin.png"),alt:"新建项目"}})]),t._v(" "),s("p",[t._v("这里要说的就是小程序云开发是一个对前端工程师比较友好的东西，它无需像"),s("code",[t._v("Jave")]),t._v("等后端语言搭建复杂的环境，同时对于数据库的操作也是非常简单好用。这个我们后续还会仔细学习。")]),t._v(" "),s("p",[t._v("进入开发页面后，如下图所示：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/weixin_rumen_jiemian.png"),alt:"开发界面"}}),t._v(" "),s("ul",[s("li",[s("p",[t._v("主要的四个部分，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("模拟器")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("编辑器")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("调试器")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("云开发")]),t._v("都可以在左上角点击显示和隐藏。")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("快捷键需要在编辑区域点击F1进行查看和选择")])],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("项目的配置信息可以在设置-> 项目设置中看到，也可以在右上角的详情中看到，在新版的小程序当中我们要特别注意勾选下面三个选项")])],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("增强编译")]),t._v("：帮助小程序使用一些更高阶的ES语法")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("使用npm模块")]),t._v("：现在小程序可以使用npm包")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("不校验合法域名，TLS版本以及HTTPS证书")]),t._v("：小程序上线是一定要用"),s("code",[t._v("https")]),t._v("的"),s("code",[t._v("api")]),t._v("接口，但是在开发阶段一般都是"),s("code",[t._v("http")]),t._v("的接口用于测试，所以要勾选\n"),s("img",{attrs:{src:t.$withBase("/weixin_shezhi.png"),alt:"小程序项目设置"}})],1)])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#9400D3"}},[t._v("小程序的调试可以打印输出，也可以断点调试，特别要说明的断点调试是要在调试面板中的Sources中，在app.js？[sm]中打断点，然后重新点击上面的编译，程序就会停在断点处")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/weixin_rumen_tiaoshi.png"),alt:"断点调试"}})],1)]),t._v(" "),s("li",[s("p",[t._v("然后就是在调试器当中的其他"),s("code",[t._v("tab")]),t._v("的作用：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("console")]),t._v("：打印")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("Sources")]),t._v(": 源文件")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("Network")]),t._v("：监听请求")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("Storage")]),t._v("：缓存情况")],1)])])]),t._v(" "),s("p",[t._v("关于编辑器的其他功能，我们在后面学习的时候再具体的介绍。")]),t._v(" "),s("h2",{attrs:{id:"小程序的基本结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序的基本结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序的基本结构")]),t._v(" "),s("h3",{attrs:{id:"_1-小程序的基本单位-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序的基本单位-page","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 小程序的基本单位-Page")]),t._v(" "),s("p",[t._v("按照约定俗称，小程序是由一个个的页面组成的，这些页面的文件都放在"),s("code",[t._v("pages")]),t._v("文件夹当中，但是也并非页面的文件只能放在"),s("code",[t._v("pages")]),t._v("当中，什么文件是页面需要看配置，在"),s("font",{attrs:{color:"#DD1144"}},[t._v("app.json")]),t._v("文件当中，所以的页面都要写在"),s("code",[t._v("pages")]),t._v("这个选项当中，才能成为小程序的页面：")],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs/logs"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"window"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundTextStyle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"light"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarBackgroundColor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#fff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weixin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTextStyle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemapLocation"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemap.json"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("虽然页面是小程序一个非常重要的组件，但是实际上在小程序当中，一切都是组件，这个概念非常重要")]),t._v("，接着可以看到，每个页面都是一个文件夹，下面有四个不同类型的文件，分别是")],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v(".js")]),t._v("：页面行为（英雄的技能）")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v(".json")]),t._v("：页面配置（英雄的天赋和符文）")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v(".wxml")]),t._v("：页面骨架（不同的英雄）")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v(".wxss")]),t._v("： 页面样式（英雄的皮肤）")],1)]),t._v(" "),s("p",[t._v("和"),s("code",[t._v("web")]),t._v("开发大体是一样的，只不过多了一个页面的配置，页面在小程序这个容器当中处于什么状态，如何显示都可以通过页面的"),s("code",[t._v("json")]),t._v("文件进行配置。当然这四种文件在不同的页面也不一定都需要，这些文件也不需要想"),s("code",[t._v("web")]),t._v("开发一样互相引入才能使用，只需要保证都是同一个文件名即可。")]),t._v(" "),s("h3",{attrs:{id:"_2-全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 全局配置")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("app.js")]),t._v("、"),s("code",[t._v("app.json")]),t._v("、"),s("code",[t._v("app.wxss")]),t._v("是三个程序级别的文件，不能修改名称，比如"),s("code",[t._v("app.json")]),t._v("和"),s("code",[t._v("app.wxss")]),t._v("当中的配置会在所有的页面生效，有点类似于我们在"),s("code",[t._v("web")]),t._v("开发当中写页面样式和全局样式一样，只不过对于相同的属性，程序会采用就近原则，即页面样式会覆盖全局样式中相同的配置。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("app.js")]),t._v("当中包含了应用程序的很多声明周期，这个和"),s("code",[t._v("react")]),t._v("或者"),s("code",[t._v("vue")]),t._v("当中的组件声明周期有点类似，这个我们后面会详细讲解。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("project.config.json")]),t._v("是项目的配置文件，比如你设置了使用"),s("code",[t._v("npm")]),t._v("，增强编译等项目设置，都会保存在文件当中，该项目在别的地方打开，会按照该文件中的设置启动，运行。有点类似于"),s("code",[t._v(".vscode")]),t._v("，项目在任何电脑上的"),s("code",[t._v("vscode")]),t._v("打开都是相同的方式和配置。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("sitemap.json")]),t._v("是关于搜索的配置文件，有兴趣可以在文件中给出的地址参阅文档。")])])]),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("特别要注意，小程序最低要求中，app.json是必须要的，app.js\n、app.wxml以及app.wxss都不是一样需要的")])],1)])},[],!1,null,null,null);a.default=r.exports}}]);
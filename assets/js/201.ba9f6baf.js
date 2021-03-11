(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{385:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"控制器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),r("h2",{attrs:{id:"什么是控制器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是控制器")]),t._v(" "),r("p",[t._v("前面我们讲路由是根据不同地"),r("code",[t._v("url")]),t._v("分配不同地任务，"),r("font",{attrs:{color:"#3eaf7c"}},[t._v("控制器就是拿到不同地任务并执行")]),t._v("，前面我们在路由当中注册的那个中间件就是控制器，所以在"),r("code",[t._v("Koa")]),t._v("当中控制器也是一个中间件")],1),t._v(" "),r("h3",{attrs:{id:"_1-为什么要使用控制器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要使用控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 为什么要使用控制器")]),t._v(" "),r("p",[t._v("我们使用控制器是由于它的作用，那么控制器有什么作用呢？")]),t._v(" "),r("p",[r("strong",[t._v("1. 控制器的作用一")]),t._v("："),r("font",{attrs:{color:"#3eaf7c"}},[t._v("获取HTTP请求参数")]),t._v(" :")],1),t._v(" "),r("ul",[r("li",[r("code",[t._v("Query String")]),t._v(",中文名叫做查询字符串，如?q=keyword(比如谷歌的搜索url就是讲搜索的内容放在q参数后面，比如q=what is rest),当然"),r("code",[t._v("Query String")]),t._v("是可选的，如果是必选的我们应该使用下面这种")]),t._v(" "),r("li",[r("code",[t._v("Router params")]),t._v(",如/users/id，这种是"),r("font",{attrs:{color:"#3eaf7c"}},[t._v("路由参数")])],1),t._v(" "),r("li",[r("code",[t._v("Body")]),t._v(",如 "),r("code",[t._v("{ name: '李磊' }")]),t._v(",在"),r("code",[t._v("RESTful")]),t._v("中，通常使用"),r("code",[t._v("json")]),t._v("来表示"),r("code",[t._v("Body")]),t._v("的部分")]),t._v(" "),r("li",[r("code",[t._v("Header")]),t._v(",如"),r("code",[t._v("Accept")]),t._v(","),r("code",[t._v("Cookie")]),t._v("等等")])]),t._v(" "),r("p",[r("strong",[t._v("2. 控制器的作用二")]),t._v("："),r("font",{attrs:{color:"#3eaf7c"}},[t._v("处理业务逻辑")])],1),t._v(" "),r("p",[r("strong",[t._v("3. 控制器的作用三")]),t._v("："),r("font",{attrs:{color:"#3eaf7c"}},[t._v("发送HTTP响应")])],1),t._v(" "),r("ul",[r("li",[t._v("发送"),r("code",[t._v("Status")]),t._v(",如200、400等")]),t._v(" "),r("li",[t._v("发送"),r("code",[t._v("Body")]),t._v(",如"),r("code",[t._v("{code:200, msg: '失败'}")]),t._v("，这个是响应的响应体，不是请求体")]),t._v(" "),r("li",[t._v("发送"),r("code",[t._v("Header")]),t._v(",如"),r("code",[t._v("Allow")]),t._v("、"),r("code",[t._v("Content-Type")])])]),t._v(" "),r("h3",{attrs:{id:"_2-编写控制器最佳实践"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写控制器最佳实践","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 编写控制器最佳实践")]),t._v(" "),r("ul",[r("li",[r("font",{attrs:{color:"#3eaf7c"}},[t._v("每个资源的控制器放在不同文件中")]),t._v("（用户相关的控制器放在用户的文件中，话题的相关控制器放在话题的文件中）")],1),t._v(" "),r("li",[r("font",{attrs:{color:"#3eaf7c"}},[t._v("尽量使用类+类方法的形式编写控制器")]),t._v("（写一个类，将这些方法写成类的类方法，提高可读性，共享类的某些变量）")],1),t._v(" "),r("li",[r("font",{attrs:{color:"#3eaf7c"}},[t._v("严谨的错误处理")])],1)]),t._v(" "),r("h2",{attrs:{id:"获取http请求参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取http请求参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取HTTP请求参数")]),t._v(" "),r("h3",{attrs:{id:"_1-学习断点调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-学习断点调试","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 学习断点调试")]),t._v(" "),r("p",[t._v("开始断点调试的步骤：")]),t._v(" "),r("ul",[r("li",[t._v("打开需要调试的文件，点击F5开启测试")]),t._v(" "),r("li",[t._v("到达断点后自动从"),r("code",[t._v("postman")]),t._v("调回到"),r("code",[t._v("vscode")]),t._v("中的断点处")]),t._v(" "),r("li",[t._v("在左边变量栏中会有你需要的变量，如果你有几个经常要监视的变量，可以在变量栏下面的监视栏中看到")])]),t._v(" "),r("h3",{attrs:{id:"_2-获取query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取query","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 获取query")]),t._v(" "),r("p",[t._v("通过"),r("font",{attrs:{color:"#3eaf7c"}},[r("strong",[t._v("ctx.query")])]),t._v("即可拿到整个"),r("code",[t._v("url")]),t._v("问号后面的东西")],1),t._v(" "),r("h3",{attrs:{id:"_3-获取router-params"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-获取router-params","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 获取router params")]),t._v(" "),r("p",[t._v("通过"),r("font",{attrs:{color:"#3eaf7c"}},[r("strong",[t._v("ctx.params")])]),t._v("即可拿到路由参数")],1),t._v(" "),r("h3",{attrs:{id:"_4-获取body"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-获取body","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 获取body")]),t._v(" "),r("p",[t._v("我们需要先安装"),r("font",{attrs:{color:"#3eaf7c"}},[t._v("koa-bodyparser")]),t._v("去拿到和解析请求体")],1),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i koa-bodyparser --save\n")])])]),r("p",[t._v("然后引入并注册到app上")]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bodyparser "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa-bodyparser'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\napp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("bodyparser")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("p",[t._v("通过"),r("font",{attrs:{color:"#3eaf7c"}},[r("strong",[t._v("ctx.request.body")])]),t._v("即可拿到请求体部分")],1),t._v(" "),r("h3",{attrs:{id:"_5-获取header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-获取header","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 获取header")]),t._v(" "),r("p",[t._v("通过"),r("font",{attrs:{color:"#3eaf7c"}},[r("strong",[t._v("ctx.header")])]),t._v("即可拿到请求体部分")],1),t._v(" "),r("h2",{attrs:{id:"发送http响应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发送http响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 发送HTTP响应")]),t._v(" "),r("h3",{attrs:{id:"_1-发送status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-发送status","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 发送status")]),t._v(" "),r("p",[t._v("通过"),r("font",{attrs:{color:"#3eaf7c"}},[r("strong",[t._v("ctx.status = 200")])]),t._v("即可设置"),r("code",[t._v("Status")])],1),t._v(" "),r("h3",{attrs:{id:"_2-发送body"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-发送body","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 发送body")]),t._v(" "),r("p",[t._v("通过"),r("font",{attrs:{color:"#3eaf7c"}},[r("strong",[t._v("ctx.body = xxx")])]),t._v("即可设置返回体")],1),t._v(" "),r("h3",{attrs:{id:"_3-发送header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-发送header","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 发送header")]),t._v(" "),r("p",[t._v("通过"),r("font",{attrs:{color:"#3eaf7c"}},[r("strong",[t._v("ctx.set('Allow','GET,POST')")])]),t._v("这种方式去设置消息头")],1)])},[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{415:function(t,s,e){"use strict";e.r(s);var a=e(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"全局对象和调试入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局对象和调试入门","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局对象和调试入门")]),t._v(" "),e("h2",{attrs:{id:"全局对象概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局对象概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局对象概述")]),t._v(" "),e("p",[t._v("之前我们说模块有两种写法，一种是基于"),e("code",[t._v("CommonJS")]),t._v("规范编写的，第二种就是"),e("font",{attrs:{color:"#CC99CD"}},[t._v("全局对象的写法")]),t._v("，"),e("font",{attrs:{color:"#3eaf7c"}},[t._v("全局对象就是无须引用就可以直接使用的对象")]),t._v("，当然我们也要注意全局对象和"),e("code",[t._v("global")]),t._v("关键字之间的区别")],1),t._v(" "),e("p",[t._v("内置对象大致能够分为5大类：")]),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("① 为模块包装而提供的全局对象")])])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("② 内置的process对象")])])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("③ 控制台Console模块")])])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("④ EventLoop相关API")])])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("⑤ Buffer数据类型和全局对象global")])])],1)]),t._v(" "),e("h3",{attrs:{id:"_1-为模块包装而提供的全局对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-为模块包装而提供的全局对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 为模块包装而提供的全局对象")]),t._v(" "),e("p",[t._v("我们在之前已经说过，模块的加载和运行都是在"),e("code",[t._v("Node")]),t._v("当中进行包装的，包装成为一个函数，而"),e("font",{attrs:{color:"#CC99CD"}},[t._v("exports")]),t._v("、"),e("font",{attrs:{color:"#CC99CD"}},[t._v("require")]),t._v("、"),e("font",{attrs:{color:"#CC99CD"}},[t._v("module")]),t._v("、"),e("font",{attrs:{color:"#CC99CD"}},[t._v("__fileName")]),t._v("、"),e("font",{attrs:{color:"#CC99CD"}},[t._v("__dirname")]),t._v("这5个内置对象是作为参数而传入到模块当中的，或者说这5个都是为了模块包装而提供的内置对象")],1),t._v(" "),e("p",[t._v("在前两小节我们已经清楚的讲解了"),e("code",[t._v("module")]),t._v("、"),e("code",[t._v("require")]),t._v("、"),e("code",[t._v("exports")]),t._v("这三个全局对象的作用")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("module")]),t._v("表示对这个模块的引用，因此"),e("code",[t._v("module")]),t._v("实际上不是全局的，而是每个模块本地的。"),e("code",[t._v("module")]),t._v("除了"),e("code",[t._v("exports")]),t._v("还有其他关于模块的属性,我们前面已经说活模块是一个对象，里面包含6个属性和一个方法")]),t._v(" "),e("li",[e("code",[t._v("exports")]),t._v("其实是"),e("code",[t._v("module.exports")]),t._v("的简写，表示这个模块的输出。有一点需要注意，对"),e("code",[t._v("exports")]),t._v("直接赋值"),e("code",[t._v("exports = {...}")]),t._v("并不会被输出，因为"),e("code",[t._v("exports")]),t._v("事先已经被定义了，再次这样赋值会被覆盖，需要带上"),e("code",[t._v("module：module.exports = {...}")])]),t._v(" "),e("li",[e("code",[t._v("require")]),t._v("是引入模块的，涉及到引用模块的加载和执行我们都在上一小节清楚的讲了")])]),t._v(" "),e("h3",{attrs:{id:"_2-内置的process对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-内置的process对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 内置的process对象")]),t._v(" "),e("p",[e("font",{attrs:{color:"#CC99CD"}},[t._v("作为核心模块，它可以对当前Node的各种信息进行绑定，使用它是个明智的选择")]),t._v("，那我们首先来了解一下进程的概念：")],1),t._v(" "),e("ul",[e("li",[t._v("在"),e("code",[t._v("Node.js")]),t._v("中每个应用程序都是一个进程类的实例对象。")]),t._v(" "),e("li",[t._v("使用"),e("code",[t._v("process")]),t._v("对象代表应用程序,这是一个全局对象，可以通过它来获取"),e("code",[t._v("Node.js")]),t._v("应用程序以及运行该程序的用户、环境等各种信息的属性、方法和事件。")])]),t._v(" "),e("p",[e("font",{attrs:{color:"#bl4"}},[t._v("综上所述，process这个全局对象提供了一下当前进程的信息以及控制方法")])],1),t._v(" "),e("p",[e("code",[t._v("process")]),t._v("提供的接口包括")]),t._v(" "),e("ul",[e("li",[t._v("描述进程的一些状态（事件）："),e("code",[t._v("exit")]),t._v("、"),e("code",[t._v("beforeExit")]),t._v("、"),e("code",[t._v("uncaughtException")]),t._v("、"),e("code",[t._v("Signal")])]),t._v(" "),e("li",[t._v("进程退出返回的状态码："),e("code",[t._v("Uncaught")]),t._v("、 "),e("code",[t._v("Fatal Exception")]),t._v("、"),e("code",[t._v("Signal Exits")]),t._v("、"),e("code",[t._v("Unused")]),t._v("等")]),t._v(" "),e("li",[t._v("进程的相关信息："),e("code",[t._v("stdout")]),t._v("、"),e("code",[t._v("stderr")]),t._v("、"),e("code",[t._v("config")]),t._v("、"),e("code",[t._v("stdin")]),t._v("、"),e("code",[t._v("exitCode")]),t._v("、"),e("code",[t._v("pid")]),t._v("(进程编号)等")]),t._v(" "),e("li",[t._v("操作进程的方法："),e("code",[t._v("abort")]),t._v("、"),e("code",[t._v("chdir")]),t._v("、"),e("code",[t._v("cwd")]),t._v("、"),e("code",[t._v("kill")]),t._v("(发送信号给进程)、"),e("code",[t._v("exit")]),t._v("、"),e("code",[t._v("nextTick")]),t._v("、"),e("code",[t._v("getgid")]),t._v("、"),e("code",[t._v("setgid")]),t._v("、"),e("code",[t._v("uptime")]),t._v("等")])]),t._v(" "),e("p",[t._v("关于"),e("code",[t._v("process")]),t._v("这个核心模块我们后面会单独拿出来详细描述用法，与之相关的"),e("code",[t._v("child_process")]),t._v("和"),e("code",[t._v("Cluster")]),t._v("模块我们都会在后面的一个小节当中单独的拿出来讲解。")]),t._v(" "),e("h3",{attrs:{id:"_3-控制台console模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-控制台console模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 控制台Console模块")]),t._v(" "),e("p",[e("code",[t._v("console")]),t._v("这个模块在"),e("code",[t._v("javascript")]),t._v("浏览器和"),e("code",[t._v("Node")]),t._v("当中是不一样的实现，因为"),e("code",[t._v("Node")]),t._v("是要在终端输出，"),e("code",[t._v("console")]),t._v("模块是在源码的"),e("code",[t._v("lib/internal/bootstrap_node.js")]),t._v("当中被绑定为全局对象的。然而，尽管 "),e("code",[t._v("console.log")]),t._v("有其适用的场合，大多数人仍然没有意识到"),e("code",[t._v("console")]),t._v("本身除了基础"),e("code",[t._v("log")]),t._v("还有许多选择。合理使用这些方法能让调试更简单、更快速，并且更加直观。")]),t._v(" "),e("p",[t._v("当然我们强调两点，十分重要：")]),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"#3eaf7c"}},[t._v("console模块在浏览器和Node当中是由区别的，实现是不同的，所以在Node当中使用要仔细查看官网")])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#3eaf7c"}},[t._v("实际上很多console的方法没啥大用，因为适用的场景太特殊化了，但是还有一些很有用的我们打算说出来，帮助大家拓展，而不是只会console.log")])],1)]),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("① console.table")])]),e("font",{attrs:{color:"#dl4"}},[t._v("(非常有用)")]),e("br"),t._v(" "),e("code",[t._v("console.table")]),t._v("更偏向于一种方式展示列表形式的数据，这比只扔下原始的对象数组要更加整洁。不说废话直接代码和图：")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transactions "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7cb1-e041b126-f3b8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  seller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WAL0412"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  buyer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WAL3023"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  price"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("203450")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1539688433")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1d4c-31f8f14b-1571"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  seller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WAL0452"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  buyer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WAL3023"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  price"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("348299")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1539688433")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b12c-b3adf58f-809f"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  seller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WAL0012"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  buyer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WAL2025"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  price"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59240")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1539688433")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transactions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transactions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("相同的代码在浏览器的控制台和"),e("code",[t._v("Node")]),t._v("控制台打印出来样子是差不多的，但是浏览器的更好看，而且通过每列的右上角的向上的小箭头还能进行排序，而"),e("code",[t._v("Node")]),t._v("当中就是简单的展示而已：")]),t._v(" "),e("ul",[e("li",[t._v("浏览器中的效果\n"),e("img",{attrs:{src:t.$withBase("/node_console_table_one.png"),alt:"console.table浏览器效果"}})]),t._v(" "),e("li",[t._v("Node当中的效果\n"),e("img",{attrs:{src:t.$withBase("/node_console_table_two.png"),alt:"console.table在Node中的效果"}})])]),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("② console.time")])]),e("br"),t._v("\n和定时器有关的三个"),e("code",[t._v("API")]),t._v("如下：")],1),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"#CC99CD"}},[t._v("console.time([label])")]),t._v(": 启动一个计时器，用以计算一个操作的持续时间。 计时器由一个唯一的"),e("code",[t._v("label")]),t._v("标识")],1),t._v(" "),e("li",[e("font",{attrs:{color:"#CC99CD"}},[t._v("console.timeLog([label][, ...data])")]),t._v(": 停止先前通过调用 "),e("code",[t._v("console.time()")]),t._v("启动的计时器，并打印结果到"),e("code",[t._v("stdout")])],1),t._v(" "),e("li",[e("font",{attrs:{color:"#CC99CD"}},[t._v("console.timeEnd([label])")]),t._v(": 停止先前通过调用"),e("code",[t._v("console.time()")]),t._v("启动的计时器，并打印结果到"),e("code",[t._v("stdout")])],1)]),t._v(" "),e("p",[t._v("用法也很简单，上述三个"),e("code",[t._v("API")]),t._v("分别用于定时器开始，其中和结束：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100-elements'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印：100-elements: 0.093ms 0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeLog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100-elements'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印100次：100-elements: xxxms i")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeEnd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100-elements'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印：100-elements: 34.542ms")]),t._v("\n")])])]),e("h3",{attrs:{id:"_4-eventloop相关api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-eventloop相关api","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. EventLoop相关API")]),t._v(" "),e("p",[t._v("这一类基本上就是"),e("code",[t._v("SetTimeout")]),t._v("、"),e("code",[t._v("SetInterval")]),t._v("、"),e("code",[t._v("SetImmediate")]),t._v("和对应的"),e("code",[t._v("clear")]),t._v("方法的实现，这些东西我们已经在整个讲解事件循环都不知道用了多少次了，具体的使用还是去看一下"),e("a",{attrs:{href:"http://nodejs.cn/api/timers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_5-buffer数据类型和全局对象global"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-buffer数据类型和全局对象global","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. Buffer数据类型和全局对象global")]),t._v(" "),e("p",[e("code",[t._v("Buffer")]),t._v("我们会在后面单独拉出来讲，"),e("code",[t._v("global")]),t._v("对象，"),e("font",{attrs:{color:"#CC99CD"}},[t._v("主要用来扩展变量和方法")]),t._v("，比如我们经常使用下面的代码来判断是否开启日志和打印日志")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("global"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nglobal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log\n")])])]),e("p",[t._v("但是也不能滥用这个全局对象，因为如果你不是很懂"),e("code",[t._v("Node")]),t._v("的话，"),e("code",[t._v("global")]),t._v("关键字的位置使用不准确就会带来代码的混乱。")]),t._v(" "),e("h2",{attrs:{id:"调试入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试入门","aria-hidden":"true"}},[t._v("#")]),t._v(" 调试入门")]),t._v(" "),e("p",[t._v("我们下一节就要开始讲一些核心模块了，为了让大家更好的将学习和理论结合，我们在这里先将调试，方便大家在后面自己动手敲代码的时候遇到问题可以通过调试的方式来发现和寻找错误。")]),t._v(" "),e("h3",{attrs:{id:"_1-inspector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-inspector","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Inspector")]),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("① 使用Inspector调试Node的优势")])])],1),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("Inspector")]),t._v("调试"),e("code",[t._v("Node")]),t._v("的本质是"),e("font",{attrs:{color:"#bl4"}},[t._v("断点调试")]),t._v("，断点调试的优势在于")],1),t._v(" "),e("ul",[e("li",[t._v("可以查看当前上下文的变量")]),t._v(" "),e("li",[t._v("可观察当前函数的调用堆栈")]),t._v(" "),e("li",[t._v("不侵入代码")]),t._v(" "),e("li",[t._v("可以在暂停的状态下执行指定代码")])]),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("② Inspector的构成以及原理")])])],1),t._v(" "),e("p",[t._v("当启动了"),e("code",[t._v("Inspector")]),t._v("的时候，会开始一个"),e("font",{attrs:{color:"#bl4"}},[t._v("WebSockets服务（监听命令）")]),t._v("，监听的这些命令都是遵循"),e("font",{attrs:{color:"#bl4"}},[t._v("Inspector协议")]),t._v("，同时还启动一个"),e("font",{attrs:{color:"#bl4"}},[t._v("Http服务（获取元信息）")])],1),t._v(" "),e("p",[t._v("我们随便点击F5去启动一个"),e("code",[t._v("NODE")]),t._v("的程序，会在命令行中显示这样的东西")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("Debugger listening on ws"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12729")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b649d2b5"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("f15"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4e92")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("be40"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ff72e9690031\n")])])]),e("ul",[e("li",[t._v("首先这是一条完整的"),e("code",[t._v("WebSockets")]),t._v("服务")]),t._v(" "),e("li",[t._v("我们可以在浏览器中直接打开"),e("font",{attrs:{color:"#CC99CD"}},[t._v("127.0.0.1:12729")]),t._v("，去查询"),e("code",[t._v("http")]),t._v("服务")],1),t._v(" "),e("li",[t._v("通过"),e("font",{attrs:{color:"#CC99CD"}},[t._v("127.0.0.1:12729/json")]),t._v("可以查询一些调试元信息")],1)]),t._v(" "),e("h3",{attrs:{id:"_2-激活调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-激活调试","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 激活调试")]),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("① 如何激活调试")])])],1),t._v(" "),e("p",[t._v("激活调试基本上就在运行"),e("code",[t._v("NODE")]),t._v("的时候添加启动参数 "),e("code",[t._v("--inspect")]),t._v("就好了,比如:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("node "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("inspect a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),e("p",[t._v("基本上这种命令适合"),e("code",[t._v("web")]),t._v("开发，因为我们"),e("code",[t._v("node")]),t._v("开发一个服务端，服务端一直会在服务当中，而一般的程序会快速执行完毕，并且关闭掉进程，如果想调试一般的程序，我们可以使用下面这个命令:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("node "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("inspect"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brk a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),e("p",[t._v("然后在"),e("code",[t._v("chrome")]),t._v("当中去打开"),e("code",[t._v("chrome://inspect")]),t._v("这个url，稍等一会在下面救能看到调试的远程文件了")]),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("② 激活调试后会发生什么")])])],1),t._v(" "),e("p",[t._v("激活调试之后我们的"),e("code",[t._v("Node")]),t._v("进程就会通过"),e("code",[t._v("WebSockets")]),t._v("监听调试信息，监听的是客户端的调试信息，如果你在"),e("code",[t._v("VScode")]),t._v("当中去调试，那么"),e("code",[t._v("VScode")]),t._v("就是程序的客户端了，同时还会提供一个"),e("code",[t._v("Http")]),t._v("服务来提供调试的元信息")]),t._v(" "),e("h3",{attrs:{id:"_3-调试客户端-chrome-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-调试客户端-chrome-devtools","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.调试客户端 - Chrome DevTools")]),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("① 调试客户端是什么")])])],1),t._v(" "),e("p",[t._v("调试客户端就是连接到"),e("code",[t._v("Node.js Inspector")]),t._v("的工具，市面上有很多这样的工具，但是最好用的就是这么几个："),e("font",{attrs:{color:"#bl4"}},[t._v("Chrome DevTools 55+")]),t._v("、"),e("font",{attrs:{color:"#bl4"}},[t._v("VS Code")])],1),t._v(" "),e("p",[e("font",{attrs:{color:"#1E90FF"}},[e("strong",[t._v("② Chrome DevTools怎么使用")])])],1),t._v(" "),e("ul",[e("li",[t._v("访问"),e("code",[t._v("chrome://inspect")]),t._v(",点击配置按钮，确保"),e("code",[t._v("Host")]),t._v("和"),e("code",[t._v("Port")]),t._v("对应")]),t._v(" "),e("li",[t._v("访问元信息中的"),e("code",[t._v("devtoolsFrontendUrl")])]),t._v(" "),e("li",[t._v("激活调试之后，打开开发者面板，点击左上角的绿色小图标"),e("br"),t._v("\n(\n"),e("font",{attrs:{color:"#CC99CD"}},[t._v("上述三个方法基本上打开的是同个面板，里面的东西都一样，这样要介绍一个测试性能的方法，因为在web开发当中，我们一个请求如果很慢，我们可以通过这种方法去检查到底是哪个部分执行的速度很慢，我们可以在上述已经打开的调试面板当中Profiler中看到下面有个start，在请求之前点击一下，然后执行一下程序，然后点击stop，就会出来各个函数运行的时间，通过这些时间你就能知道，哪个部分到底执行的时间很长，从而进行优化")]),t._v("\n)")],1)]),t._v(" "),e("h3",{attrs:{id:"_3-调试客户端-vs-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-调试客户端-vs-code","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.调试客户端 - VS code")]),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"#CC99CD"}},[t._v("启动方式")]),t._v("：按F5")],1),t._v(" "),e("li",[e("font",{attrs:{color:"#CC99CD"}},[t._v("配置launch.json")]),t._v(": 因为按F5本质只是"),e("code",[t._v("Node")]),t._v("了整个文件，但是有时候我们启动程序的时候需要后面添加参数，那这样直接按F5肯定不行，我们需要配置"),e("code",[t._v("launch.json")]),t._v("，我们只需要在调试的界面（点击左侧的小虫子的图标）当中的绿色启动按钮右侧的下拉菜单中点击添加配置，然后就会自动在当前目录下添加一个"),e("code",[t._v(".vscode")]),t._v("的文件夹，文件夹下面就由"),e("code",[t._v("launch.json")]),t._v(",你可以在其中添加各种调试的配置。")],1)]),t._v(" "),e("h3",{attrs:{id:"_5-命令行参数介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-命令行参数介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.命令行参数介绍")]),t._v(" "),e("p",[t._v("关于"),e("code",[t._v("inspect")]),t._v("还有很多拓展的参数，我们可以到"),e("a",{attrs:{href:"https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v("上去自动学习。")]),t._v(" "),e("p",[e("strong",[t._v("参考资料")])]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/59fc72da518825299a468d8b",target:"_blank",rel:"noopener noreferrer"}},[t._v("认识node核心模块--全局对象及Cluster"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/59f07b386fb9a0452a3b8934",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs第三天(全局对象)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5bf64218e51d45194266acb7#heading-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] 你不知道的 console 命令"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5cce9b976fb9a0322415aba4",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] 使用 VS Code 调试 Node.js 的超简单方法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.imooc.com/learn/1093",target:"_blank",rel:"noopener noreferrer"}},[t._v("node调试入门"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://coding.imooc.com/class/146.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js入门到企业Web开发中的应用"),e("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=o.exports}}]);
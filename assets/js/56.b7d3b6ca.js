(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{244:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"初始化前端项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化前端项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化前端项目")]),t._v(" "),a("p",[t._v("这一节我将带着大家来初始化一个前端项目，创建前端项目我们会使用到"),a("code",[t._v("vue cli 3")]),t._v("这个工具，是一个脚手架工具，所谓脚手架就是一个项目初期的结构，"),a("code",[t._v("vue cli 3")]),t._v("帮助我们规范了项目初期的目录结构，构建配置等等，然后我们可以多把时间花在逻辑上，减少了繁琐的添加各种配置，但是也不排除我们在项目开发过程中会修改一些配置来满足我们的项目需求。")]),t._v(" "),a("h2",{attrs:{id:"初始化前端项目-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化前端项目-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化前端项目")]),t._v(" "),a("p",[t._v("首先需要安装"),a("code",[t._v("vue cli")]),t._v("来初始化我们的前端项目框架：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @vue/cli\n")])])]),a("p",[t._v("然后我们使用"),a("code",[t._v("vue/cli")]),t._v("创建一个项目："),a("font",{attrs:{color:"#3eaf7c"}},[t._v("wecircle")])],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vue create wecircle\n")])])]),a("p",[t._v("选择"),a("font",{attrs:{color:"#CC99CD"}},[t._v("Manually select features")]),t._v("，表示我们不采用默认的模板，而是根据自己的情况选择需要安装的模块，例如"),a("code",[t._v("vue-router")]),t._v(","),a("code",[t._v("ESlint")]),t._v("等等，这一步主要选择我们需要的模块，这里说明一下：")],1),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Babel")]),t._v("：：给我们提供了能够使用ES6的条件，"),a("code",[t._v("Babel")]),t._v("将我们的ES6代码转换成浏览器兼容性更强的ES5，这意味着，你可以现在就用ES6 编写程序，而不用担心现有环境是否支持，基本上现在的项目都会选择它；")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Router")]),t._v(":这里的"),a("code",[t._v("Router")]),t._v("指的是"),a("code",[t._v("vue-router")]),t._v("，属于"),a("code",[t._v("vue")]),t._v("全家桶的一项，我们用它主要是帮助我们实现单页应用的页面路由；")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Vuex")]),t._v(":"),a("code",[t._v("Vuex")]),t._v("是专门为"),a("code",[t._v("Vue.js")]),t._v("设计的状态管理库，它采用集中式存储管理应用的所有组件的状态，同时利用"),a("code",[t._v("Vuex")]),t._v("可以实现跨组件的通信。")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("CSS Pre-processors")]),t._v(": ：CSS的预处理工具选择，例如"),a("code",[t._v("Sass")]),t._v(","),a("code",[t._v("Less")]),t._v(","),a("code",[t._v("stylus")]),t._v(",同时会默认集成"),a("code",[t._v("PostCss")]),t._v(","),a("code",[t._v("PostCss")]),t._v("和他们的区别在于：\n"),a("ul",[a("li",[a("code",[t._v("PostCss")]),t._v("是将最后生成的CSS进行处理，包括补充和提供一些而外的功能，比较典型的功能是将我们的"),a("code",[t._v("CSS")]),t._v("样式添加上不同浏览器的前缀例如："),a("code",[t._v("autoprefixer")]),t._v("。")]),t._v(" "),a("li",[t._v("另外三者称为"),a("code",[t._v("CSS")]),t._v("预处理工具，强调的是提供一些"),a("code",[t._v("API")]),t._v("，让我们编写"),a("code",[t._v("CSS")]),t._v("样式时更加具有代码逻辑，使我们的"),a("code",[t._v("CSS")]),t._v("更加有组织性，例如可以定义变量等等。")])])],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Linter/Formatter")]),t._v(":代码规范工具选择，现在主要用的就是"),a("code",[t._v("ESLint")]),t._v("，来帮我们处理代码规范问题。")],1)]),t._v(" "),a("p",[t._v("其他的选项我们如下图所示：\n"),a("img",{attrs:{src:t.$withBase("/vuecli.jpg"),alt:"初始化前端项目"}})]),t._v(" "),a("p",[t._v("下载完相关组件后我们可以看一下目录：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 静态文件目录")]),t._v("\n    │   ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首页html")]),t._v("\n    ├── dist                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包输出目录（首次打包之后生成）")]),t._v("\n    ├── src                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目源码目录")]),t._v("\n    │   ├── assets           \n    │   ├── components           \n    │   ├── views          \n    │   ├── App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue              \n    │   ├── main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js              \n    │   ├── router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             \n    │   ├── store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js       \n    ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("editorconfig                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编辑器配置项")]),t._v("\n    ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eslintrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint 配置项")]),t._v("\n    ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eslintignore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint 忽略目录")]),t._v("\n    ├── postcss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// postCss配置项")]),t._v("\n    ├── babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// babel配置项")]),t._v("\n    ├── vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目配置文件，用了配置或者覆盖默认的配置")]),t._v("\n    └── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n")])])]),a("h2",{attrs:{id:"启动前端项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动前端项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动前端项目")]),t._v(" "),a("p",[t._v("打开"),a("code",[t._v("package.json")]),t._v("的"),a("code",[t._v("scripts")]),t._v("，我们可以看到3个命令：")]),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("启动开发模式")]),t._v("："),a("code",[t._v("npm run serve")])],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("启动生产模式打包")]),t._v("："),a("code",[t._v("npm run build")])],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("启动代码规范检查，处理语法错误")]),t._v("："),a("code",[t._v("npm run build lint")])],1)]),t._v(" "),a("p",[t._v("这三个命令都是基于"),a("code",[t._v("vue-cli-service")]),t._v("提供的命令，我们可以查看更多的配置参数：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# 命令：npm run serve 其他参数说明：\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("open    在服务器启动时打开浏览器\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("copy    在服务器启动时将 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" 复制到剪切版\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("mode    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("指定环境模式")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值：development"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("host    指定 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("port    指定 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("https   使用 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("https")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值："),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n# 命令：npm run build 其他参数说明：\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("mode        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("指定环境模式")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值：production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("dest        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("指定输出目录")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值：dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("modern      面向现代浏览器带自动回退地构建应用\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("target      app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" lib "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" wc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" wc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值：app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name        库或 Web Components "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("模式下的名字")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值："),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json 中的 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v(" 字段或入口文件名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("clean    在构建项目之前不清除目标目录\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("report      生成 report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html 以帮助分析包内容\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("report"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("json 生成 report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json 以帮助分析包内容\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("watch       监听文件变化\n\n# 命令：npm run lint 其他参数说明：\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("formatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   指定一个formatter （默认值：codeframe）\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fix               不修复错误 \n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("warnings      除了warnings（警告）错误不修复，其他的都修复\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("errors "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("超过多少个错误就标记本次构建失败")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("warnings "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("超过多少个warnings（警告）错误标记本次构建失败")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("通过"),a("code",[t._v("npx vue-cli-service --help")]),t._v("命令查看，会发现有另外一个"),a("code",[t._v("inspect")]),t._v("命令：")]),t._v(" "),a("p",[a("code",[t._v("vue-cli-service inspect")]),t._v("，通过这个命令可以得到项目的"),a("code",[t._v("webpack")]),t._v("配置文件，由于"),a("code",[t._v("vue cli 3")]),t._v("将整个默认的"),a("code",[t._v("webpack")]),t._v("配置集成到了内部，所以单独对于"),a("code",[t._v("webpack")]),t._v("配置文件是不便于查看的，使用这个命令可以在当前项目的根目录得到一个"),a("code",[t._v("webpack.config.xxx.js")]),t._v("的配置文件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx vue-cli-service inspect\n--mode    指定环境模式 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值：development"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("本章节主要讲解了使用"),a("code",[t._v("vue cli 3")]),t._v("生成我们的项目目录，并介绍了相关的命令配置，为后续的项目打下了基础。相关知识点如下:")]),t._v(" "),a("ol",[a("li",[t._v("前端脚手架的概念解释。")]),t._v(" "),a("li",[a("code",[t._v("vue cli 3")]),t._v("能够帮助我们生成使用的前端框架，省去了繁琐的配置，但是需要注意的是，基本的配置项还是需要掌握。")]),t._v(" "),a("li",[a("code",[t._v("vue-cli-service")]),t._v("的命令参数和使用方法。")])])])},[],!1,null,null,null);s.default=e.exports}}]);
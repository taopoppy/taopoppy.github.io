(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{200:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"环境搭建（一）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建（一）","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境搭建（一）")]),t._v(" "),s("h2",{attrs:{id:"架构思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构思考","aria-hidden":"true"}},[t._v("#")]),t._v(" 架构思考")]),t._v(" "),s("p",[t._v("开发到架构中间总是隔着一层鸿沟，看不见摸不着，很难跨越，通常对于普通的软件工作人员，"),s("font",{attrs:{color:"#DD1144"}},[t._v("这道鸿沟实际上是能真实参与到架构设计和实现的机会，也就是实际业务场景的挑战和不失时机的引导")])],1),t._v(" "),s("p",[t._v("而立体化项目开发的过程并不是一蹴而就的，有下面几个重要的开发过程：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("业务快速搭建")]),t._v(" "),s("ul",[s("li",[t._v("提高读业务代码的能力")])])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("数据层优化")]),t._v(" "),s("ul",[s("li",[t._v("与开发相关的数据层基础优化")]),t._v(" "),s("li",[s("code",[t._v("MySQL binlog")]),t._v("与主从分离实现")]),t._v(" "),s("li",[t._v("针对业务场景进行分表分库")]),t._v(" "),s("li",[t._v("搜索模块接入"),s("code",[t._v("Elasticsearch")])])])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("缓存层优化")]),t._v(" "),s("ul",[s("li",[t._v("页面静态化")]),t._v(" "),s("li",[t._v("基于"),s("code",[t._v("Redis")]),t._v("的动态缓存实现")]),t._v(" "),s("li",[s("code",[t._v("CDN")]),t._v("下载优化")])])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("服务层优化")]),t._v(" "),s("ul",[s("li",[t._v("代理和反向代理")]),t._v(" "),s("li",[t._v("无状态服务与服务平行扩展")]),t._v(" "),s("li",[t._v("负载均衡原理及其基于"),s("code",[t._v("Nginx")]),t._v("实践")]),t._v(" "),s("li",[t._v("多机部署之"),s("code",[t._v("Session")]),t._v("同步问题")])])],1)]),t._v(" "),s("p",[t._v("这几个步骤是我们业务的发展过程，也是架构的变迁历史")]),t._v(" "),s("h2",{attrs:{id:"go开发环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go开发环境搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" Go开发环境搭建")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("当我们的项目在线上运行的时候，是不需要运行环境的，只需要将我们编译好的二进制文件执行起来就行，所以在开发机上装一个编译环境就好了")])],1),t._v(" "),s("h3",{attrs:{id:"_1-下载go的安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载go的安装包","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 下载Go的安装包")]),t._v(" "),s("ul",[s("li",[t._v("下载"),s("code",[t._v("Go")]),t._v("在无法科学上网的情况下直接上国内的镜像网站"),s("a",{attrs:{href:"studygolang.com"}},[t._v("studygolang.com")]),t._v("即可，然后下载对应平台的安装包下载即可，下载完重点是在下载的目录下的"),s("code",[t._v("\\bin\\go.exe")]),t._v("（"),s("code",[t._v("mac")]),t._v("或者"),s("code",[t._v("linux")]),t._v("系统下没有"),s("code",[t._v(".exe")]),t._v("后缀的）文件，这个文件就是"),s("font",{attrs:{color:"#DD1144"}},[t._v("编译的可执行文件，俗称go的编译工具")]),t._v("。")],1),t._v(" "),s("li",[t._v("三大平台下载安装完都要做的一个事情就是添加环境变量，就是这个安装包中的"),s("code",[t._v("bin")]),t._v("文件的路径（"),s("code",[t._v("mac")]),t._v("和"),s("code",[t._v("windows")]),t._v("好像是自动添加环境变量，"),s("code",[t._v("linux")]),t._v("可能需要手动配置一下）")])]),t._v(" "),s("h3",{attrs:{id:"_2-下载称手的ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载称手的ide","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 下载称手的ide")]),t._v(" "),s("p",[s("code",[t._v("Go")]),t._v("的开发工具很多，"),s("code",[t._v("VsCode")]),t._v("、"),s("code",[t._v("Goland")]),t._v("、"),s("code",[t._v("IDEA")]),t._v("、"),s("code",[t._v("liteide")]),t._v(",我们这里就使用"),s("code",[t._v("liteide")]),t._v(",到它的官网"),s("a",{attrs:{href:"http://liteide.org/cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://liteide.org/cn/"),s("OutboundLink")],1),t._v("中找"),s("a",{attrs:{href:"https://sourceforge.net/projects/liteide/files/",target:"_blank",rel:"noopener noreferrer"}},[t._v("发行版"),s("OutboundLink")],1),t._v("，选择"),s("code",[t._v("DownloadLatest Version")]),t._v("下载最新版的即可，它会根据你的电脑系统自行判断系统版本。下载下来是个压缩包，然后解压找到里面的可执行文件"),s("code",[t._v("liteide.exe")]),t._v("即可。")]),t._v(" "),s("h2",{attrs:{id:"beego框架下载和使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beego框架下载和使用","aria-hidden":"true"}},[t._v("#")]),t._v(" Beego框架下载和使用")]),t._v(" "),s("h3",{attrs:{id:"_1-beego框架初体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-beego框架初体验","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Beego框架初体验")]),t._v(" "),s("p",[s("code",[t._v("Beego")]),t._v("这个框架在平时用的比较多的是这个构建"),s("code",[t._v("RESTful")]),t._v("风格的"),s("code",[t._v("api")]),t._v("比较多一些，"),s("code",[t._v("Beego")]),t._v("框架的开发方式和风格和传统的"),s("code",[t._v("Java")]),t._v("或者"),s("code",[t._v("php")]),t._v("很相似，"),s("font",{attrs:{color:"#DD1144"}},[t._v("特点就是在MVC和数据库的ORM的访问上面封装的很漂亮")])],1),t._v(" "),s("p",[t._v("根据"),s("code",[t._v("Beego")]),t._v("官网提供的下载命令，我们在下载好了"),s("code",[t._v("Beego")]),t._v("之后呢，就可以在任意命令行当中去执行下面的安装"),s("code",[t._v("Beego")]),t._v("的命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go get github.com/astaxie/beego\n")])])]),s("p",[t._v("这里就有个很大的问题摆在我们面前，下载的"),s("code",[t._v("Beego")]),t._v("框架的文件在哪里？")]),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[s("strong",[t._v("GOPATH")])]),t._v(": "),s("font",{attrs:{color:"#1E90FF"}},[t._v("当你还使用GOPATH的方式去管理工作区的时候，你会发现假如你最开始下载Go语言之后默认的GOPATH路径是："),s("font",{attrs:{color:"#3eaf7c"}},[t._v("C:\\Users\\Administrator\\go")]),t._v("，这个文件中有三个文件分别是bin、pkg、src，这三个文件属于一个工作区，bin放的是可执行文件，pkg放的是归档文件，也成为链接文件，一些库下载下来编译好是生成了能给别人用的链接文件，放在这里。src就是源码文件，你下载了Beego后，Beego就保存在了src源码文件中，整个完整的路径是： "),s("font",{attrs:{color:"#3eaf7c"}},[t._v("C:\\Users\\Administrator\\go\\src\\github.com\\astaxie\\beego@v1.12.0")])],1)],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[s("strong",[t._v("GO mod")])]),t._v("："),s("font",{attrs:{color:"#1E90FF"}},[t._v("因为在新版本的Go语言当中有了GoMod的管理方式，如果你下载Go之后立刻修改了GO111MODULE=on这个选项，说明整个电脑的管理Go项目的方式就成为了模块化的方式，此时此刻你下载的Beego文件的路径是这样的："),s("font",{attrs:{color:"#3eaf7c"}},[t._v("C:\\Users\\Administrator\\go\\pkg\\mod\\github.com\\astaxie\\beego@v1.12.0")])],1)],1)])]),t._v(" "),s("p",[t._v("整个关于"),s("code",[t._v("GOPAHT")]),t._v("工作区和"),s("code",[t._v("GoMod")]),t._v("依赖管理的知识我们在"),s("a",{attrs:{href:"https://www.taopoppy.cn/go/gocore_one_learn.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go核心语法夯实"),s("OutboundLink")],1),t._v("中有详细的介绍和使用分析。")]),t._v(" "),s("p",[t._v("那么使用"),s("code",[t._v("Beego")]),t._v("框架开发最简单的的程序就是这样：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/astaxie/beego"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tbeego"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Listen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPPort "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8090")]),t._v("\n\tbeego"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-beego搭建web应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-beego搭建web应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Beego搭建Web应用")]),t._v(" "),s("p",[t._v("为了使用"),s("code",[t._v("Beego")]),t._v("框架，我们需要使用一个"),s("font",{attrs:{color:"#DD1144"}},[t._v("Bee")]),t._v("的工具，我们使用下面的命令来安装这个工具：")],1),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" get github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("beego"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bee\n")])])]),s("p",[t._v("然后可以通过在命令行上输入"),s("code",[t._v("bee")]),t._v("来查看它的所有命令，但是这里又有问题，就是"),s("code",[t._v("Beego")]),t._v("本身是不支持"),s("code",[t._v("Go Mod")]),t._v("方式的，所以有下面这两种情况：")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① GOPAHT方式")])])],1),t._v(" "),s("p",[t._v("使用传统的方式,"),s("code",[t._v("Bee")]),t._v("直接就会下载到"),s("code",[t._v("$GOPAHT")]),t._v("下面中的"),s("code",[t._v("src")]),t._v("目录中，不过"),s("code",[t._v("bee.exe")]),t._v("你要在"),s("code",[t._v("$GOPAHT")]),t._v("的"),s("code",[t._v("bin")]),t._v("下面找到，将"),s("code",[t._v("$GOPAHT/bin")]),t._v("添加到环境变量。然后通过"),s("code",[t._v("bee new")]),t._v("或者"),s("code",[t._v("bee api")]),t._v("的方式去创造项目。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("② GoMod方式")])])],1),t._v(" "),s("p",[t._v("对于"),s("code",[t._v("GoMod")]),t._v(",比较复杂，或者你可以直接到本章的参考资料的地方阅读原始参考资料，但是我们下面还是会罗列每个具体的操作步骤，")]),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("准备工作")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("先去下载"),s("code",[t._v("git")]),t._v(",因为需要"),s("code",[t._v("gitbash")]),t._v(",其次需要一个"),s("code",[t._v("github")]),t._v("的账号")])])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("创建项目文件夹")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("打开"),s("code",[t._v("gitbash")]),t._v(",然后执行下面的代码"),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("mkdir go_web\ncd go_web\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" env "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("w GOPROXY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goproxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("direct\n")])])])])])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("初始化项目并替换Bee源")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("为了防止版本的更新的影响，首先将"),s("code",[t._v("github.com/beego/bee")]),t._v("通过"),s("code",[t._v("fork")]),t._v("到自己的仓库下")])])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("初始化项目")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("接着上面的"),s("code",[t._v("gitbash")]),t._v(",执行下面的命令"),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" mod init go_web\n")])])])])])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("修改go.mod文件")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("经过上面的初始化，在"),s("code",[t._v("go_web")]),t._v("文件夹下产生了一个"),s("code",[t._v("go.mod")]),t._v("的文件，因为经过"),s("code",[t._v("fork")]),t._v("之后，我们自己的"),s("code",[t._v("github")]),t._v("仓库下面就有了"),s("code",[t._v("bee")]),t._v("的项目，这样就防止的更新对我们项目的影响，我们修改内容如下（我的"),s("code",[t._v("github")]),t._v("是"),s("code",[t._v("taopoppy")]),t._v(",你要修改成为你的名称）："),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("module go_web\n\nreplace github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("beego"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bee v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("taopoppy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bee v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.13")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("安装beego和bee")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("依旧接着上面"),s("code",[t._v("gitbash")]),t._v("中的操作，执行下面的命令分别安装"),s("code",[t._v("beego")]),t._v("和"),s("code",[t._v("bee")]),t._v(":"),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" get "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("astaxie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("beego\nexport GO111MODULE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("off "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" get "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("beego"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bee\n")])])])]),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("第一点就是注意必须在gitbash中进行，其他可能不认识export命令")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("第二点就是bee无法在GoMod下面执行下载，所以我们要通过export临时改变GO111MODULE=off，注意这是临时改变，过了这一次，全局的GO111MODULE依旧为on")])],1)])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("添加环境变量")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("经过上述的安装，"),s("code",[t._v("Beego")]),t._v("是按照全局"),s("code",[t._v("GoMod")]),t._v("的方式安装在了"),s("code",[t._v("$GOPAHT\\pkg\\mod\\github.com\\astaxie\\beego@v1.12.1")]),t._v("这个里面了，但是"),s("code",[t._v("Bee")]),t._v("工具却是以"),s("code",[t._v("GOPAHT")]),t._v("方式安装在了"),s("code",[t._v("$GOPAHT\\src\\github.com\\beego\\bee")]),t._v("下面")]),t._v(" "),s("li",[t._v("而且对于这些第三方包,安装会进行两个步骤，第一就是从网上拉取源代码，第二就是编译这些文件,编译完如果是链接文件都会放在"),s("code",[t._v("$GOPAHT\\pkg")]),t._v("目录下，如果编译完是可执行文件，就会放在"),s("code",[t._v("$GOPATH\\bin")]),t._v("目录下")]),t._v(" "),s("li",[t._v("所以实际上"),s("code",[t._v("bee")]),t._v("安装包整个下载编译完成你会在"),s("code",[t._v("$GOPAHT\\bin")]),t._v("路径下面发现一个"),s("code",[t._v("bee.exe")]),t._v("（"),s("code",[t._v("windows")]),t._v("下是这样）的可执行文件，所以为了能使用"),s("code",[t._v("bee")]),t._v("命令，我们需要将"),s("code",[t._v("$GOPAHT\\bin")]),t._v("目录添加到环境变量中")])])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("创建项目")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("切换到cmd命令行，进入刚才go_web项目，使用bee命令创建项目")])],1)]),t._v(" "),s("li",[s("p",[t._v("可以使用"),s("code",[t._v("bee api xxx")]),t._v("创建"),s("code",[t._v("api")]),t._v("后端项目，也可以使用"),s("code",[t._v("bee new xxx")]),t._v("创建单体式的项目，创建的项目会存储在"),s("code",[t._v("$GOPAHT/src/xxx")]),t._v("。（当然你也可以通过多级目录的方式创建项目，比如"),s("code",[t._v("bee new github.com/taopoppy/hello")]),t._v(",那么项目文件就会在"),s("code",[t._v("$GOPAHT/src/github.com/taopoppy/hello")]),t._v("下面。）")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/beego_one_createproject.png"),alt:"项目的创建"}})])])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("启动项目")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("前面已经说了项目是存储在"),s("code",[t._v("$GOPAHT/src/go_web")]),t._v("下面，我们要启动必须经历两个步骤："),s("font",{attrs:{color:"#1E90FF"}},[t._v("项目模块化")]),t._v("和"),s("font",{attrs:{color:"#1E90FF"}},[t._v("启动项目")])],1),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" mod init go_web\nbee run\n")])])]),s("img",{attrs:{src:t.$withBase("/beego_one_start.png"),alt:"项目启动"}})]),t._v(" "),s("li",[s("p",[t._v("然后就可以打开"),s("a",{attrs:{href:"localhost:8080"}},[t._v("localhost:8080")]),t._v("查看项目了")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/beego_one_projectline.png"),alt:"浏览器打开项目"}})])])])]),t._v(" "),s("h3",{attrs:{id:"_3-beego项目概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-beego项目概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Beego项目概述")]),t._v(" "),s("p",[t._v("现在我们要对"),s("code",[t._v("beego")]),t._v("框架的项目来做个整体的了解，首先来看下"),s("code",[t._v("beego")]),t._v("的目录：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/beego_two_mulu.png"),alt:"beego项目的目录"}}),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("main.go")]),t._v("：")],1),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go_web/routers"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/astaxie/beego"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  beego"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到，实际上内容和我们之前写的最简单的一个"),s("code",[t._v("beego")]),t._v("的应用没有多大区别，只是引用了一个"),s("code",[t._v("go_web/routers")]),t._v(","),s("font",{attrs:{color:"#1E90FF"}},[t._v("这是因为实际的作用就是调用一下routers/router.go文件中的init方法")]),t._v("，所以这里有一个特别要注意的点就是："),s("font",{attrs:{color:"#DD1144"}},[t._v("当导入一个包时，该包下的文件里所有init()函数都会被执行，然而，有些时候我们并不需要把整个包都导入进来，仅仅是是希望它执行init()函数而已。这个时候就可以使用 import _ 引用该包。即使用[import _ 包路径]只是引用该包，仅仅是为了调用init()函数，所以无法通过包名来调用包中的其他函数。")])],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("routers/router.go")])],1),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" routers\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go_web/controllers"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/astaxie/beego"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    beego"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MainController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    beego"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MainController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get:Hi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这个的"),s("code",[t._v("init")]),t._v("方法就是来设置一些路由信息的,上面简答的解释一下"),s("code",[t._v("init")]),t._v("中的代码，当你的项目启动起来,默认是在"),s("code",[t._v("localhost:8080")]),t._v("端口启动，此时就相当于访问"),s("code",[t._v("localhost:8080/")]),t._v("这个路由，则使用从"),s("code",[t._v("controllers")]),t._v("文件中的"),s("code",[t._v("MainController")]),t._v("这个类的默认方法"),s("code",[t._v("Get")]),t._v("来处理。而访问"),s("code",[t._v("localhost:8080/hi")]),t._v("这个路由的时候，则使用"),s("code",[t._v("MainController")]),t._v("类中的"),s("code",[t._v("Hi")]),t._v("方法来作为控制器处理。")])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("controllers/default.go")])],1),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" controllers\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/astaxie/beego"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MainController "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  beego"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("MainController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Website"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beego.me"')]),t._v("\n  c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Email"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"astaxie@gmail.com"')]),t._v("\n  c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TplName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.tpl"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("MainController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello beego"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TplName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.tpl"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到，每一个"),s("code",[t._v("MainController")]),t._v("的方法都是一个控制器，通过"),s("code",[t._v("c.TplName")]),t._v("来设置返回的页面模版，通过"),s("code",[t._v("c.Data")]),t._v("来设置向模版中输入的信息，这基本上就是传统单体式开发页面的一个方法： "),s("font",{attrs:{color:"#1E90FF"}},[t._v("模版 + 数据 = 真实的页面")])],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("static && view/index.tpl")])],1),t._v(" "),s("p",[t._v("基本上"),s("code",[t._v("static")]),t._v("就是"),s("code",[t._v("MVC")]),t._v("视图层展示的页面所需要的全部静态文件,"),s("code",[t._v("view")]),t._v("文件中就全部是模版，对于这两个文件暂时要说的有下面两个关键的点：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("模版当中采用双括号的方式来与传入模版中的数据相结合，如下：")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Official website:\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://{{.Website}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{.Website}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" /\n  Contact me:\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mailto:{{.Email}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{.Email}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("因为静态文件static和模版views文件都在项目的根目录下面，所以在模版文件.tpl中引入外部文件直接使用static的路径，如下：")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/static/js/reload.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])],1)])])]),t._v(" "),s("p",[s("strong",[t._v("参考资料")])]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/zhetmdoubeizhanyong/article/details/101050310",target:"_blank",rel:"noopener noreferrer"}},[t._v("go mod方式下载Beego以及Bee(windows和linux都差不多)"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);
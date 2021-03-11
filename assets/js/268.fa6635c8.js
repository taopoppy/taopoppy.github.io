(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{461:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" React的生命周期")]),t._v(" "),s("h2",{attrs:{id:"react中的ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中的ref","aria-hidden":"true"}},[t._v("#")]),t._v(" React中的ref")]),t._v(" "),s("p",[t._v("我们可以使用"),s("code",[t._v("ref")]),t._v("来操作"),s("code",[t._v("DOM")]),t._v(",比如这样：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TodoList.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleInputChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现在的写法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const value = e.target.value // 以前的写法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input\n        onChange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleInputChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过this.input可以直接访问到input这个DOM元素")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("但是我们不太推荐直接使用"),s("code",[t._v("ref")]),t._v("去操作元素：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("react希望我们尽量通过修改数据的方式来修改视图，而不是直接使用ref的方式去修改DOM")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("通过修改数据的方式通常都是异步的，直接修改DOM的ref方法是同步的，两者一起使用经常会出现时差的bug，对新手不太友好")])],1)]),t._v(" "),s("h2",{attrs:{id:"react的生命周期-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react的生命周期-2","aria-hidden":"true"}},[t._v("#")]),t._v(" React的生命周期")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/react_redux_lifecycle.png"),alt:""}}),t._v(" "),s("p",[t._v("什么是生命周期函数？"),s("font",{attrs:{color:"#DD1144"}},[t._v("生命周期函数指的是在某一个时刻组件会自动执行的函数")]),t._v(",关于生命周期的图谱，可以参展上面的这个图，也可以到这个"),s("a",{attrs:{href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("去查看")],1),t._v(" "),s("p",[t._v("按照上面对于生命周期的定义，我们首先要来讲一下"),s("font",{attrs:{color:"#1E90FF"}},[t._v("render函数")]),t._v(" 和 "),s("font",{attrs:{color:"#1E90FF"}},[t._v("constructor函数")]),t._v("，render函数属于生命周期函数，因为它在"),s("code",[t._v("props")]),t._v("和"),s("code",[t._v("state")]),t._v("发生变化的时候会被自动调用执行，但是"),s("code",[t._v("constructor")]),t._v("函数虽然也在组件一开始被创建的时候会被调用，但是它并不是"),s("code",[t._v("react")]),t._v("中独有的，属于"),s("code",[t._v("ES6")]),t._v("中的内容，我们不把"),s("code",[t._v("constructor")]),t._v("归类为"),s("code",[t._v("react")]),t._v("当中的生命周期函数。")],1),t._v(" "),s("p",[t._v("按照上面给出的生命周期图谱，我们知道组件从生到死大概有这么几个重要的阶段："),s("font",{attrs:{color:"#1E90FF"}},[t._v("Initialzation")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("Mounting")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("Updation")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("Unmounting")])],1),t._v(" "),s("h3",{attrs:{id:"_1-initialzation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-initialzation","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Initialzation")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/react_redux_lifecycle1.png"),alt:"组件生命周期"}}),t._v(" "),s("p",[t._v("如图，图中灰色部分表示了在初始化阶段，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("组件会先进行类型检查，然后初始化自己的一些数据，初始化数据发生在constructor当中，会从外接收props，会初始化一些states")])],1),t._v(" "),s("h3",{attrs:{id:"_2-mounting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mounting","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Mounting")]),t._v(" "),s("p",[t._v("组件在初始化完毕之后需要被渲染并且挂载到页面之上，这个阶段我们称之为"),s("code",[t._v("Mounting")])]),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("① componentWillMount")])])],1),t._v(" "),s("p",[t._v("在组件即将被挂载到页面的时刻自动执行")]),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("② render")])])],1),t._v(" "),s("p",[s("code",[t._v("render")]),t._v("方法就是组件渲染的方法，在"),s("code",[t._v("render")]),t._v("方法中返回的是"),s("code",[t._v("jsx")]),t._v("语法，关于"),s("code",[t._v("JSX")]),t._v("语法我们之前就说过，它会通过"),s("code",[t._v("Babel")]),t._v("编译成为"),s("code",[t._v("React.createElement")]),t._v("方法，"),s("code",[t._v("React.createElement")]),t._v("方法执行返回的就是虚拟"),s("code",[t._v("DOM")]),t._v(",所以你应该明白了，"),s("font",{attrs:{color:"#DD1144"}},[t._v("render方法最终返回的就是虚拟DOM这个javascript对象")]),t._v("。")],1),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("③ componentDidMount")])])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("组件已经被渲染到页面中后触发：此时页面中有了真正的DOM的元素，可以进行DOM相关的操作, 依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方")]),t._v("。")],1),t._v(" "),s("h3",{attrs:{id:"_3-updation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-updation","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Updation")]),t._v(" "),s("p",[t._v("可以看到,在组件中的"),s("code",[t._v("props")]),t._v("和"),s("code",[t._v("states")]),t._v("发生变化的时候，情况略微不一样，"),s("code",[t._v("props")]),t._v("比"),s("code",[t._v("states")]),t._v("多了一个"),s("code",[t._v("componentWillReceiveProps")]),t._v("方法，这个方法我们最后再讲，我们先来说"),s("code",[t._v("props")]),t._v("和"),s("code",[t._v("states")]),t._v("共有的几个生命周期方法：")]),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("① shouldComponentUpdate")])])],1),t._v(" "),s("p",[t._v("组件被更新之前，他会自动被执行，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为")]),t._v("。")],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("② componentWillUpdate")])])],1),t._v(" "),s("p",[t._v("组件即将被更新时触发，在"),s("code",[t._v("shouldComponentUpdate")]),t._v("之后被执行，如果"),s("code",[t._v("shouldComponentUpdate")]),t._v("返回的是"),s("code",[t._v("false")]),t._v("，后面的所有生命周期都不会被执行。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("③ render")])])],1),t._v(" "),s("p",[t._v("组件在更新的时候会重新执行"),s("code",[t._v("render")]),t._v("方法返回一个新的虚拟"),s("code",[t._v("DOM")]),t._v("，然后将新旧虚拟"),s("code",[t._v("DOM")]),t._v("进行比对。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("④ componentDidUpdate")])])],1),t._v(" "),s("p",[t._v("组件被更新完成后触发。页面中产生了新的"),s("code",[t._v("DOM")]),t._v("的元素，可以进行"),s("code",[t._v("DOM")]),t._v("操作")]),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("⑤ componentWillReceiveProps")])])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("当一个组件要从父组件接收参数，只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行，除了父组件render函数第一次执行，因为父组件render函数第一次执行在Mounting阶段，不在Updation阶段")]),t._v("，组件接收到属性时触发。")],1),t._v(" "),s("h3",{attrs:{id:"_4-unmounting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-unmounting","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Unmounting")]),t._v(" "),s("p",[s("font",{attrs:{color:"#9400D3"}},[s("strong",[t._v("① componentWillUnmount")])])],1),t._v(" "),s("p",[t._v("组件被销毁时触发。这里我们可以进行一些清理操作，例如清理定时器，取消"),s("code",[t._v("Redux")]),t._v("的订阅事件等等。")]),t._v(" "),s("h2",{attrs:{id:"生命周期的使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期的使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期的使用场景")]),t._v(" "),s("h3",{attrs:{id:"_1-shouldcomponentupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-shouldcomponentupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. shouldComponentUpdate")]),t._v(" "),s("p",[t._v("我们书写的"),s("code",[t._v("TodoList")]),t._v("代码中，你会发现，在每次的输入框当中去输入内容的时候，已存在的所有的子组件"),s("code",[t._v("TodoItem")]),t._v("都会被刷新（之前已经下载过react的插件，在开发者工具当中直接有react的工具，打开"),s("code",[t._v("Highlight updates when components render")]),t._v("的开关，组件更新会高亮显示），因为输入框中的内容会修改父组件的"),s("code",[t._v("state")]),t._v(",从而执行父组件的"),s("code",[t._v("render")]),t._v("函数，从而子组件的"),s("code",[t._v("render")]),t._v("函数也会被执行，输入多少个字符就会更新多少遍，非常消耗性能，此时我们可以利用"),s("font",{attrs:{color:"#DD1144"}},[t._v("shouldComponentUpdate")]),t._v("生命周期函数帮助我们优化代码：")],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TodoItem.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoItem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleClick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用shouldComponentUpdate生命周期来减少无谓的render函数执行")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nextState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" content "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" content "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" TodoItem\n")])])]),s("p",[t._v("为什么按照上面的书写会提高性能？因为"),s("code",[t._v("shouldComponentUpdate")]),t._v("函数接收了两个参数，分别是组件下次被更新的"),s("code",[t._v("nextProps")]),t._v("和"),s("code",[t._v("nextState")]),t._v(", "),s("font",{attrs:{color:"#DD1144"}},[t._v("我们将下一次组件的状态和当前组件的状态做对比，如果没有发生变化，shouldComponentUpdate函数返回false，接下来的componentWillUpdate、render、componentDidUpdate这些生命周期都不会被执行。既然render函数不会被执行，那么就不会产生虚拟DOM，从而也就不存在新旧DOM的比对，也就提高了性能")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("实际上在性能优化的方面,shouldComponentUpdate和setState都是以减少虚拟DOM的比对次数来提高性能，只不过前者是减少相同虚拟DOM比对的操作，后者是通过异步和合并虚拟DOM比对次数")]),t._v("，这里也是一个面试的点。")],1),t._v(" "),s("h3",{attrs:{id:"_2-componentdidmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-componentdidmount","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. componentDidMount")]),t._v(" "),s("p",[t._v("很多人都知道在"),s("code",[t._v("react")]),t._v("组件当中发送"),s("code",[t._v("ajax")]),t._v("请求应该放在"),s("code",[t._v("componentDidMount")]),t._v("函数当中去写，但是很多人不知道原因。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("对于组件来说，组件获取ajax数据只需要执行一次，所以我们只需要把请求代码放在只执行一次的生命周期函数当中，那么像constructor，componentWillMount这些生命周期都只执行一次，为何不能放在这里")])],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("constructor")]),t._v("中可以书写，但是由于特别要注意"),s("code",[t._v("ajax")]),t._v("的返回数据一般要去修改组件状态，而"),s("code",[t._v("constructor")]),t._v("是组件状态定义的地方，不利于逻辑的梳理，对新手不太友好")]),t._v(" "),s("li",[s("code",[t._v("componentWillMount")]),t._v("首先这个生命周期可以书写"),s("code",[t._v("ajax")]),t._v("请求，但是在"),s("code",[t._v("react native")]),t._v("和同构当中会出问题，其次这个生命周期在新的版本已经不推荐使用了，所以无论什么情况，将"),s("code",[t._v("ajax")]),t._v("请求写在"),s("code",[t._v("componentDidMount")]),t._v("生命周期函数当中都是最保险的。")])]),t._v(" "),s("h2",{attrs:{id:"charles的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charles的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" charles的使用")]),t._v(" "),s("p",[t._v("上面说过了前端需要发送"),s("code",[t._v("ajax")]),t._v("请求，因为在前后端分离的开发当中，后端无法及时给前端提供真实的数据和接口，但是前端又需要请求一些接口上的数据，所以我们需要设置一些假的数据，此时就用到了"),s("font",{attrs:{color:"#DD1144"}},[t._v("Charles")]),t._v("这个工具。")],1),t._v(" "),s("p",[t._v("这个工具到"),s("a",{attrs:{href:"https://www.charlesproxy.com/latest-release/download.do",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("去下载。")]),t._v(" "),s("p",[t._v("下载好之后我们进入工具按照下面的步骤进行设置：")]),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("点击Tools/Map Local Setting进入设置")])],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("选中Enable Map Local，点击Add按钮")])],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("比如我们访问http://localhost:3000/api/todolist的时候，返回桌面上一个json文件，我们设置如下")])],1),t._v(" "),s("img",{attrs:{src:t.$withBase("/react_redux_charles.png"),alt:""}})]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("点击OK生效")])],1)])]),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("Charles这个工具的作用就是能够抓到浏览器向外发送的请求，并根据你自己的设置对部分的请求进行特殊的处理，说白了就是一个中间代理服务器，可以实现本地前端接口的模拟")])],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\taxios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/todolist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参考资料")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5a062fb551882535cd4a4ce3#heading-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解ES6中的React生命周期"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);
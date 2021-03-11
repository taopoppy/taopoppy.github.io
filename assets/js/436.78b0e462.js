(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{622:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue的生命周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期函数","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue的生命周期函数")]),t._v(" "),s("h2",{attrs:{id:"什么是生命周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是生命周期函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是生命周期函数")]),t._v(" "),s("p",[t._v("每个"),s("code",[t._v("Vue")]),t._v("实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到"),s("code",[t._v("DOM")]),t._v("并在数据变化时更新"),s("code",[t._v("DOM")]),t._v("等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。")]),t._v(" "),s("p",[t._v("比如"),s("code",[t._v("created")]),t._v("钩子可以用来在一个实例被创建之后执行代码：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `this` 指向 app 实例")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a is: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "a is: 1"')]),t._v("\n")])])]),s("p",[t._v("也有一些其它的钩子，在实例生命周期的不同阶段被调用，如"),s("code",[t._v("mounted")]),t._v("、"),s("code",[t._v("updated")]),t._v("、"),s("code",[t._v("destroyed")]),t._v("。"),s("font",{attrs:{color:"#1E90FF"}},[t._v("生命周期钩子的this上下文指向调用它的Vue实例")]),t._v("。因为和"),s("code",[t._v("this")]),t._v("相关，我们就不得不去说一下箭头函数，"),s("font",{attrs:{color:"#DD1144"}},[t._v("不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 app.$watch('a', newValue => this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。")])],1),t._v(" "),s("p",[t._v("所以我们在简单的知道了生命周期函数或者生命周期钩子的概念，我们就来用图示告诉大家生命周期钩子在生命周期当中出现的位置和作用：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/vuessr_vue_lifecycle.png"),alt:"生命周期图谱"}}),t._v(" "),s("h2",{attrs:{id:"生命周期钩子详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子详解","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期钩子详解")]),t._v(" "),s("h3",{attrs:{id:"beforecreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("p",[t._v("在实例初始化之后，数据观测 (data observer)和"),s("code",[t._v("event/watcher")]),t._v("事件配置之前被调用。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("② 相关")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[t._v("这个期间"),s("code",[t._v("this.$el")]),t._v("这个属性为"),s("code",[t._v("undefined")]),t._v(",因为组件都没造出来，那更没有地方挂载")]),t._v(" "),s("li",[t._v("这个生命周期在整个组件的存活的期间只会经历一次")])]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("③ 注意")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("从生命周期图中可以看到在beforeCreate之前vue内部只是做了一些事件和生命周期相关的东西，并没有和数据有关")]),t._v("，"),s("font",{attrs:{color:"#DD1144"}},[t._v("所以如果你想发送ajax请求获取数据并复制给组件中的data，最早也只能在created这个钩子当中")])],1)]),t._v(" "),s("h3",{attrs:{id:"created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#created","aria-hidden":"true"}},[t._v("#")]),t._v(" created")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("p",[t._v("在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，"),s("code",[t._v("watch/event")]),t._v("事件回调。然而，挂载阶段还没开始，"),s("code",[t._v("this.$el")]),t._v("属性目前不可见。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("② 相关")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[t._v("这个期间"),s("code",[t._v("this.$el")]),t._v("这个属性也为"),s("code",[t._v("undefined")]),t._v(",和"),s("code",[t._v("beforeCreate")]),t._v("一样，因为组件只是被创造出来，还没有挂载到真实的"),s("code",[t._v("DOM")]),t._v("节点上，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("这也告诉我们在beforeCreate和created两个生命周期钩子中是无法进行任何DOM操作的")])],1),t._v(" "),s("li",[t._v("这个生命周期在整个组件的存活的期间只会经历一次")])]),t._v(" "),s("h3",{attrs:{id:"beforemount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforemount","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("p",[t._v("在挂载开始之前被调用：相关的 "),s("code",[t._v("render")]),t._v("函数首次被调用,实际上就是说"),s("code",[t._v("template")]),t._v("已经通过"),s("code",[t._v("render")]),t._v("方法生成了真实的"),s("code",[t._v("dom")]),t._v("内容。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("② 相关")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[t._v("这个生命周期可以看到是在"),s("code",[t._v("render")]),t._v("方法已经执行完了之后，已经生成了真实的"),s("code",[t._v("dom")]),t._v("内容,但是还没有挂载上去，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("所以此时此刻this.$el为即将被替换掉的原始节点，通常就是<div class='root'></div>")])],1),t._v(" "),s("li",[t._v("这个生命周期在整个组件的存活的期间只会经历一次")])]),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[s("strong",[t._v("③ 注意")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("该钩子在服务器端渲染期间不被调用")]),t._v("。")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("还有人不懂render函数当中的h参数，h参数就是vue当中的createElement方法，下面两种写法一样")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// template写法（简单明了）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>{{text}}</div>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// render写法（写法抽象）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])],1)]),t._v(" "),s("h3",{attrs:{id:"mounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mounted","aria-hidden":"true"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("p",[s("code",[t._v("el")]),t._v("被新创建的"),s("code",[t._v("vm.$el")]),t._v("替换，并挂载到实例上去之后调用该钩子。如果"),s("code",[t._v("root")]),t._v("实例挂载了一个文档内元素，当"),s("code",[t._v("mounted")]),t._v("被调用时"),s("code",[t._v("vm.$el")]),t._v("也在文档内。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("② 相关")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[t._v("在这个生命周期的时候，实际上已经完成了通过"),s("code",[t._v("render")]),t._v("方法生成的"),s("code",[t._v("DOM")]),t._v("替换原始"),s("code",[t._v("DOM")]),t._v("的过程，"),s("font",{attrs:{color:"#DD1144"}},[t._v("所以在beforeMount的周期中this.$el的值为<div class='root'></div>,在mounted的周期中，this.$el的值就为<div>taopoppy</div>，这个节点就是真实呈现视图的节点")]),t._v("，你可以通过开发者工具看到的节点。")],1),t._v(" "),s("li",[t._v("这个生命周期在整个组件的存活的期间只会经历一次")])]),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[s("strong",[t._v("③ 注意")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("该钩子在服务器端渲染期间不被调用")]),t._v("。")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("注意mounted不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用vm.$nextTick替换掉mounted：")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the entire view has been rendered")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)]),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[s("strong",[t._v("④ 总结")])])],1),t._v(" "),s("p",[t._v("其实到这里关键的几个实例创建的生命周期我们都已经学习完了，我们将和组件创建和挂载的几个生命周期用图示来回顾一下各自的重要点：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/vuessr_vue_lifecycle_short.png"),alt:"组件生命周期简单总结"}}),t._v(" "),s("h3",{attrs:{id:"beforeupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("p",[t._v("数据更新时调用，发生在虚拟"),s("code",[t._v("DOM")]),t._v("打补丁之前。这里适合在更新之前访问现有的"),s("code",[t._v("DOM")]),t._v("，比如手动移除已添加的事件监听器。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[s("strong",[t._v("② 注意")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。")])],1)]),t._v(" "),s("h3",{attrs:{id:"updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated","aria-hidden":"true"}},[t._v("#")]),t._v(" updated")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("p",[t._v("由于数据更改导致的虚拟"),s("code",[t._v("DOM")]),t._v("重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件"),s("code",[t._v("DOM")]),t._v("已经更新，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("所以你现在可以执行依赖于DOM的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher取而代之。")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[s("strong",[t._v("② 注意")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("注意updated不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用vm.$nextTick替换掉updated：")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时组件以及自组件包含在内的整个视图都会被重绘完毕")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("该钩子在服务器端渲染期间不被调用。")])],1)]),t._v(" "),s("h3",{attrs:{id:"activated-deactivated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activated-deactivated","aria-hidden":"true"}},[t._v("#")]),t._v(" activated && deactivated")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("p",[s("code",[t._v("activated")]),t._v("在"),s("code",[t._v("keep-alive")]),t._v("组件激活时调用。"),s("code",[t._v("deactivated")]),t._v("在"),s("code",[t._v("keep-alive")]),t._v("组件停用时调用。这两个生命周期我们在讲解组件时仔细讲解")]),t._v(" "),s("h3",{attrs:{id:"beforedestroy-destroyed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy-destroyed","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeDestroy && destroyed")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("beforeDestroy")]),t._v("在实例销毁之前调用。在这一步，实例仍然完全可用。")]),t._v(" "),s("li",[s("code",[t._v("destroyed")]),t._v("在"),s("code",[t._v("Vue")]),t._v("实例销毁后调用。调用后，"),s("code",[t._v("Vue")]),t._v("实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。")])]),t._v(" "),s("h3",{attrs:{id:"errorcaptured"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errorcaptured","aria-hidden":"true"}},[t._v("#")]),t._v(" errorCaptured")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① 用法")])])],1),t._v(" "),s("p",[t._v("当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回"),s("code",[t._v("false")]),t._v("以阻止该错误继续向上传播，返回"),s("code",[t._v("true")]),t._v("会向上冒泡，并且在正式环境中可用。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("② 错误传播规则")])])],1),t._v(" "),s("ul",[s("li",[t._v("默认情况下，如果全局的"),s("code",[t._v("config.errorHandler")]),t._v("被定义，所有的错误仍会发送它，因此这些错误仍然会向单一的分析服务的地方进行汇报。")]),t._v(" "),s("li",[t._v("如果一个组件的继承或父级从属链路中存在多个"),s("code",[t._v("errorCaptured")]),t._v("钩子，则它们将会被相同的错误逐个唤起。")]),t._v(" "),s("li",[t._v("如果此"),s("code",[t._v("errorCaptured")]),t._v("钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的"),s("code",[t._v("config.errorHandler")]),t._v("。")]),t._v(" "),s("li",[t._v("一个"),s("code",[t._v("errorCaptured")]),t._v("钩子能够返回"),s("code",[t._v("false")]),t._v("以阻止错误继续向上传播。本质上是说"),s("font",{attrs:{color:"#1E90FF"}},[t._v("这个错误已经被搞定了且应该被忽略")]),t._v("。它会阻止其它任何会被这个错误唤起的"),s("code",[t._v("errorCaptured")]),t._v("钩子和全局的"),s("code",[t._v("config.errorHandler")]),t._v("。")],1)])])},[],!1,null,null,null);a.default=n.exports}}]);
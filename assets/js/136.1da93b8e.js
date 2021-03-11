(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{323:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"go的协程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go的协程","aria-hidden":"true"}},[t._v("#")]),t._v(" Go的协程")]),t._v(" "),s("h2",{attrs:{id:"goroutine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goroutine","aria-hidden":"true"}},[t._v("#")]),t._v(" goroutine")]),t._v(" "),s("h3",{attrs:{id:"_1-goroutine概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-goroutine概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. goroutine概述")]),t._v(" "),s("p",[s("code",[t._v("goroutine")]),t._v("实际上是一种协程或者和协程类似的东西，在其他编程当中有个东西叫做"),s("font",{attrs:{color:"#DD1144"}},[t._v("Coroutine")]),t._v(",翻译过来叫做协程，当然也并不是所有的语言都是支持协程，在"),s("code",[t._v("Go")]),t._v("语言中原生的支持。")],1),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[t._v("goroutine是一种轻量级的“线程”，作用和线程差不多，都是用来并发执行一些任务的，但是它的特点是"),s("font",{attrs:{color:"#DD1144"}},[t._v("轻量级")]),t._v("，随手开1000个线程可能开不出来，但是1000个协程确实十分容易")],1)],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DD1144"}},[t._v("goroutine是一种非抢占式多任务处理，由协程主动交出控制权")]),t._v("，那么什么是抢占式? "),s("font",{attrs:{color:"#1E90FF"}},[t._v("比如线程可以随时被操作系统切换，线程就是抢占式多任务处理，自身没有控制权，语句可能执行到一半都会被操作系统掐掉，俗称被抢，像这种最坏的情况执行到一半被抢，就需要上下文存更多东西")]),t._v("，但是对于协程来说，只需要处理其中切换的几个点就可以了，这样对资源的消耗就会小一点。")],1),t._v(" "),s("p",[t._v("协程做到轻量级的根本原因是："),s("font",{attrs:{color:"#DD1144"}},[t._v("它实际上是编译器/解释器/虚拟机层面的多任务。并非操作系统上的多任务，因为操作系统上只有线程")]),t._v("，所以编译器会将"),s("code",[t._v("go")]),t._v("当中的一个"),s("code",[t._v("func")]),t._v("解释成为一个协程，具体执行呢，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("是由调度器来调度我们的协程，这个调度器是go语言自己的调度器，操作系统也有自己的调度器，两者要区分不能混淆")]),t._v("。所以"),s("font",{attrs:{color:"#DD1144"}},[t._v("多个协程可能在一个或者多个线程上运行，这个是由调度器来决定的")])],1),t._v(" "),s("p",[t._v("我们来看个例子：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [0 0 13817147 0 13978346 14245768 0 0 0 0]")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// runtime.Gosched() // [626 782 616 765 403 476 554 561 577 607]")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这个程序表面上会这样执行，按照我们想象的会在一毫秒内，并发的所有数组的元素同时执行"),s("code",[t._v("++")]),t._v("的操作，但是实际上："),s("font",{attrs:{color:"#1E90FF"}},[t._v("整个程序会被第一个协程卡死，因为协程中a[i]++不会自己主动交出控制权，一直都不会退出。而且main函数实际上也是个goroutine，虽然它里面制造了很多goroutine，但是它本身也是，它想执行time.Sleep，但是由于a[i]++不会交出主动权，所以它永远没有机会去执行time.Sleep")]),t._v("。")],1),t._v(" "),s("p",[t._v("但是当我们每个"),s("code",[t._v("goroutine")]),t._v("都能主动交出控制权给调度器，调度器在这些"),s("code",[t._v("goroutine")]),t._v("中平衡分配控制权，虽然前后顺序不一定，但是平均下来，所有"),s("code",[t._v("goroutine")]),t._v("都有机会去执行到，这样就能实现所有的"),s("code",[t._v("goroutine")]),t._v("并发执行。如下图所示：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/go_one_godiaoduqi.png"),alt:""}}),t._v(" "),s("p",[t._v("怎么交出控制权呢？"),s("font",{attrs:{color:"#1E90FF"}},[t._v("必须存在协程的切换（主动交出控制权）或者说io操作使得协程进行切换")]),t._v("，有下面两种方式:")],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("runtime.Gosched")]),t._v("：协程自己能够交出控制权，让别人也有机会能执行，大家都相互让一让，调度器总会平衡到所有的协程"),s("font",{attrs:{color:"#1E90FF"}},[t._v("但是一般我们很少用，因为一般我们都有其他机会进行切换，无需让协程自己主动")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("io操作")]),t._v("：一般io操作会使得协程之间的切换。")],1)]),t._v(" "),s("h3",{attrs:{id:"_2-闭包和数据冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-闭包和数据冲突","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 闭包和数据冲突")]),t._v(" "),s("p",[t._v("我们将上面的代码修改一下，在并发的匿名函数中不写参数：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// goroutine.go")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用的是外部的main函数中的i")]),t._v("\n\t\t\t\truntime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Gosched")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们使用"),s("code",[t._v("go run goroutine.go")]),t._v("来启动程序，会发现报"),s("code",[t._v("panic: runtime error: index out of range [10] with length 10")]),t._v("的错误，为什么？"),s("font",{attrs:{color:"#1E90FF"}},[t._v("因为匿名函数中使用的i是外部的，相当于一个闭包，所以闭包中的i和外部的i是相同的i，所以i在main函数中的for循环最终变成了10，而a[10]这个元素就不存在，超出了a数组的范围")])],1),t._v(" "),s("p",[t._v("然后我们使用特别重要命令查看程序中是否还有数据冲突："),s("font",{attrs:{color:"#DD1144"}},[t._v("go run -race goroutine.go")]),t._v("，即使还原到原来的程序，没有使用闭包，还会有数据冲突:")],1),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\nWARNING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DATA RACE\nRead at "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00c0000580f0")]),t._v(" by main goroutine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("learngo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goroutine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goroutine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x102")]),t._v("\n\nPrevious write at "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00c0000580f0")]),t._v(" by goroutine "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("learngo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goroutine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goroutine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x6f")]),t._v("\n\nGoroutine "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("running"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" created at"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("learngo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goroutine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goroutine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xca")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n")])])]),s("p",[t._v("这个错误的意思就是我们在12行创建的"),s("code",[t._v("goroutine")]),t._v("在20行被读了，又在14行被写了，说白了就是同时对数据执行了读和写的同时操作，实际上就是"),s("code",[t._v("fmt.Println(a)")]),t._v("在"),s("code",[t._v("main")]),t._v("这个"),s("code",[t._v("goroutine")]),t._v("中读数据的时候，同时还有其他的"),s("code",[t._v("goroutine")]),t._v("在并发的写着数据，产生了数据冲突，这个问题我们后面会使用"),s("code",[t._v("channel")]),t._v("来解决，这里我们先不做赘述。")]),t._v(" "),s("h2",{attrs:{id:"调度器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调度器","aria-hidden":"true"}},[t._v("#")]),t._v(" 调度器")]),t._v(" "),s("h3",{attrs:{id:"_1-函数和协程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数和协程","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 函数和协程")]),t._v(" "),s("p",[t._v("关于协程我们还有一句非常重要的话："),s("font",{attrs:{color:"#DD1144"}},[t._v("子程序是协程的一个特例")]),t._v("，子程序就是我们通常写的函数调用，这里明确了协程是比普通的函数更宽泛的概念。两者到底区别在哪里，我们用图示来说明")],1),t._v(" "),s("img",{attrs:{src:t.$withBase("/go_one_goroutine.png"),alt:"协程和普通函数的区别"}}),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("普通函数就运行在一个线程内，main函数和doWork函数相对对立，在main中执行doWork，控制权就给了doWork，等doWork执行完了控制权才能回到main")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("协程就不一样了，main和doWork之间有个通道，数据和控制权都可以双向的流通，相当于两个并发的线程，虽然各做各事情，但可以通过中间管道随时通信，控制权相互交换。main和doWork可能运行在一个线程中，也可能是多个线程，这是由调度器自己随机应变的事情")]),t._v("，"),s("font",{attrs:{color:"#DD1144"}},[t._v("一般来说，调度器会最大开和系统核数一样的线程数。比如4核的处理器，1000个协程一共会映射到4个线程上，怎么分配那是调度器的事情")]),t._v(" 如下所示："),s("br"),t._v(" "),s("img",{attrs:{src:t.$withBase("/go_one_goroutine_thread.png"),alt:""}})],1)]),t._v(" "),s("h3",{attrs:{id:"_2-goroutine的定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-goroutine的定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. goroutine的定义")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("任何函数只需要加上go就能送给调度器运行")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("不需要在定义的时候区分异步函数")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("使用-race来检测数据访问冲突")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("调度器会在合适的点进行切换，切换点不需要显式手动的写出来，可能的切换点如下：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("I/O, select")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("channel")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#1E90FF"}},[t._v("等待锁")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("函数调用（有时）")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("runtime.Gosched()")])],1)])],1)])])},[],!1,null,null,null);a.default=r.exports}}]);
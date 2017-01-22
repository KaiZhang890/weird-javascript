# weird-javascript
Learn Javascript, refer to https://www.udemy.com/understand-javascript

## 介绍
* JavaScript 是世界上最流行的脚本语言。
* 为什么我们要学 JavaScript ？  
  因为你没有选择。在 Web 世界里，只有 JavaScript 能跨平台、跨浏览器驱动网页，与用户交互
* JavaScript 历史
  ```
  1995年，当时的网景公司正凭借其 Navigator 浏览器成为 Web 时代开启时最著名的第一代互联网公司。

  由于网景公司希望能在静态 HTML 页面上添加一些动态效果，于是叫 Brendan Eich 这哥们在两周之内设计出了 JavaScript 语言。你没看错，这哥们只用了10天时间。  

  为什么起名叫 JavaScript ？原因是当时 Java 语言非常红火，所以网景公司希望借 Java 的名气来推广，但事实上 JavaScript 除了语法上有点像 Java，其他部分基本上没啥关系。
  ```
* ECMAScript
  ```
  为了让 JavaScript 成为全球标准，几个公司联合 ECMA（European Computer Manufacturers Association）组织定制了 JavaScript 语言的标准，被称为 ECMAScript 标准。

  所以简单说来就是，ECMAScript 是一种语言标准，而 JavaScript 是网景公司对 ECMAScript 标准的一种实现。

  那为什么不直接把 JavaScript 定为标准呢？因为 JavaScript 是网景的注册商标。
  ```
* 要看官方文档
  [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

## 运行环境
* Execution Context: a wrapper to help manage the code that is running.  
* Name/Value pair: a name which maps to a unique value.
* Object: a collection of name values pairs.
![context-creation-phase](https://github.com/KaiZhang890/weird-javascript/blob/master/Screenshots/context-creation-phase.png?raw=true)
![context-runs-code](https://github.com/KaiZhang890/weird-javascript/blob/master/Screenshots/context-runs-code.png?raw=true)

## 作用域
* Scope: where a variable is available in your code.
![variable-scope](https://github.com/KaiZhang890/weird-javascript/blob/master/Screenshots/variable-scope.png?raw=true)
![scope-chain](https://github.com/KaiZhang890/weird-javascript/blob/master/Screenshots/scope-chain.png?raw=true)

## 事件队列
* Async Javascript: Event Loop.
![event-queue](https://github.com/KaiZhang890/weird-javascript/blob/master/Screenshots/event-queue.png?raw=true)
![event-queue-2](https://github.com/KaiZhang890/weird-javascript/blob/master/Screenshots/event-queue-2.png?raw=true)

# License
[WTFPL](http://www.wtfpl.net) - do What The Fuck you want to Public License

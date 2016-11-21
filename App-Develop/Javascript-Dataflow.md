# Javascript 数据流

Javascript 是一种现代化的语言，目前人类已经在它的帮助下开发了[富有特效的网站](http://www.kikk.be/2015)、[高生产力的好看的文本编辑器](https://www.zhihu.com/question/29984607)、抓取知乎回答的爬虫、[VR](https://techcrunch.com/2016/10/06/oculus-webvr/)，以及用于控制现实世界的[Ruff应用](https://github.com/RuffApps/Apps)。
  
掌握 Javascript 是您实现上述丰富应用的第一步。本章将对 Ruff 开发中可能涉及到的所有 Javascript 概念进行解释，使您能看懂示例代码。

## 变量

Javascript 可以将数据保存在变量里 —— 变量是存储信息的容器
  

```javascript

let x = 2; // 把 2 放进 x 这个容器里
let y = 3; // 把 3 放进 x 这个容器里
let z = x + y; // 把 x y 两个容器里的东西加到一起一股脑放进 z 这个容器里
```

## 函数

Javascript 可以将操作保存在函数里 —— 函数让操作可以重复利用

```javascript

let add = (x, y) => { // 我们创建了一个容器叫做 add，这个容器在放入 x y 两个东西之后就开始进行后面的操作 =>
  let z = x + y; // 我们把这句操作放在容器 add 里: 把 x y 两个容器里的东西加到一起一股脑放进 z 这个容器里
  return z; // 最后把 z 里存储的内容从容器里倒出来
}

add(1, 2); // 得到 3
add(100, 200); // 重复利用，得到 300
add(123, 233); // 留给您作练习
```

## 结构

Javascript 可以把变量和函数包装成一个有层次感的结构，我们称之为对象：

```javascript
// 对象也是一个变量
let someObject = {
  x: 2,
  y: 3,
  add = (x, y) => {
    let z = x + y;
    return z;
  }
};

```

使用「.」我们可以取出对象内的变量或函数

```javascript

someObject.x // <- 它是 2
```

## 例子：Ruff 火警应用

以上知识点已经足够使我们看懂 RUff 应用是怎么操作外部设备的了。

```javascript
// 我们已经取得了 flameSensor 对象，它里面有一个 on 函数，我们现在来使用这个函数
flameSensor.on('fire', function () {
  // 我们已经取得了 lcd 对象，它代表在安保监控室内的 lcd 显示器，它里面有一个 clear 函数，可以用于清除LCD上次显示的内容
  lcd.clear();

  // lcd 里还有一个函数叫 print，可以用它显示火焰警告
  lcd.print('caution!');

  // 我们还取得了一个叫 relay 的控制灭火器的继电器对象，用它里面的 turnOn 函数把相应的灭火器打开
  relay.turnOn();
});
```

## 例子：用 $( ) 来选中设备

就像您用鼠标选中一个文件夹一样简单。$ 其实是一个函数，加上 ( ) 就是调用了这个函数。
  

```javascript

$('#led-g') // 选中一个 id 为 led-g 的设备，顾名思义，它是一个绿色（green）的 LED 灯
  .turnOn(); // 然后打开它，让它头上冒绿光

$('#led-g').turnOn(); // 可以把选中和操作写在同一行，关闭这个灯
```


## $.ready() 与 $.end()

## 数组


## Javascript 内置函数

### setTimeout

### console.log

## 例子：声控灯

```javascript

soundSensor.on('sound', function () {
  led.turnOn();
  // 给彩色 LED 灯设置颜色的 RBG 值，用一个数组来装传入的值
  led.setRGB([0x80, 0x80, 0x80]);

  //若10秒钟内没有声音，则关闭继电器
  setTimeout( function () {
    led.turnOff();
  }, 10000);
});
```

## 条件判断

一个有思想的物联网应用应该根据当前的形势采取不同的行动，当程序的一些部分出现了错误时，不莽撞行事，而是进入处理错误的流程。

## 循环执行

### while

### for

### for in for of

## 例子：（目前还没找到用了条件和循环的好例子）


## ES6

使用[Ruff-babel 快速模板](https://github.com/linonetwo/ruff-babel-starter-kit)可以不需配置环境就直接开始使用 ES6，书写功能强大语法现代的 Javascript。

### 函数的四种写法

ES6 使得我们能够简化一些冗长的写法。

### 什么是「编译到ES5」

Ruff 为了保证性能，不直接支持各种高级语法。实际应用开发过程中我们应考虑到这一点，尽量使用不那么炫酷的写法，以为开发板节省能量。

但既然 Ruff 开发板不直接支持高级语法，我们是怎么让我们高级的写法在 Ruff 开发板上运行的呢？这是因为我们在部署代码到板子上之前进行了一次编译，将 ES6 新语法用 ES5 语法进行了替换。

### 部署前自动编译

prepublish 钩子

### 报错了？

新语法在转换过程中默认了转换出来的代码是在浏览器上执行，因此可能会遇到 Ruff 开发板出于性能考虑而不提供一些浏览器可能支持的内置功能，这时候开发板就会报错。
  
如果您遇到了下列问题，请联系客服：

#### regenerator

#### Symbol

#### typeof

## 异步

设备A可能需要10ms到40ms的反应时间，您要让设备B在设备A反应过来后才做某事， 异步让您不需要管到底是10ms还是40ms，只需要说 A 做完后再让 B 做即可。

## Promise

### Promise.delay(1000)

### `fetch(https://www.baidu.com/)`

## Async Await

Async 的意思是异步变同步（Asynchronous SYNChronization），使您能以同步的形式书写异步代码。
Await 的意思是等候异步完成（Asynchronous WAITing）。

## 例子：三灯乱闪

```javascript

async blink(color) {
  const colorName = ({b: 'blueBlinkInterval', g: 'greenBlinkInterval', r: 'redBlinkInterval'})[color];
  const delayLength = this[colorName];

  while(this.started) {
    $(`#led-${color}`).turnOn();
    console.log(`#led-${color} is on for ${this.blinkLength} ms`);
    await Promise.delay(this.blinkLength);

    $(`#led-${color}`).turnOff();
    console.log(`#led-${color} is off for ${delayLength} ms`);
    await Promise.delay(delayLength);
  }
}
```

## 模板字符串

如果您有许多同类外设需要控制，它们的名字肯定特别像，类似于 「#led-r」、「#led-g」和「#led-b」。如果您有五十个灯需要打开，您一定不愿意写五十行代码将它们一个个打开，这时候您肯定想要写一个循环用三行代码一次性开启它们。我们可以用模板字符串与循环配合做到这一点：

```javascript

for(let i = 1; i <= 50; i++) {
  $(`#led-${i}`).turnOn();
}
```

## 将代码切分放在几个文件里

import 意思是导入，您可以把控制灯的代码放在一个文件里，而把控制屏幕的代码放在另一个文件里，再在 index.js 里 import 那两个文件，从而使得您5天后想修改灯的代码时，不需要翻很长很长的文件才能找到想要修改的代码。

### 解构赋值

我们可以在一个文件里 export 多个变量，因此在 import 时我们就需要做一下过滤，只 import 我们需要的变量：

```javascript

import { LEDControl } from './led.js';
```

## 避免 bug：类型检查

### let 与 var 与 const

### flowtype

```javascript

const supportedColors = {
  r: 'r',
  g: 'g',
  b: 'b'
};

type SupportedColorsType = $Keys<typeof supportedColors>;
```

## 装饰器

```javascript

function decorateBlinkInterval(target, key, descriptor) {
  const method = descriptor.value;
  const moreInterval = 1000;
  let ret;
  descriptor.value = (...args) => {
    args[0] += moreInterval;
    console.log(args);
    ret = method.apply(target, args);
    return ret;
  };
  return descriptor;
}
```

## 计算属性值

## 结语

以上是 Ruff 应用开发中可能用到的所有 Javascript 内容，但很可能你在开发应用时不会完全用尽它们。而 Javascript 是一门在产业界得到了广泛应用的语言，它拥有的特性需要很久的时间才能说尽，它们为数据流提供了各种粒度的控制，如果您对它们感兴趣，非常欢迎您到以下网站进一步学习：

[基本概念](http://www.w3school.com.cn/js/index.asp)

[ES6中文教程](http://es6.ruanyifeng.com/)

# Javascript 数据流

Javascript 是一种现代化的语言，目前人类已经在它的帮助下开发了[富有特效的网站](http://www.kikk.be/2015)、[高生产力的好看的文本编辑器](https://www.zhihu.com/question/29984607)、抓取知乎回答的爬虫、[VR](https://techcrunch.com/2016/10/06/oculus-webvr/)，以及用于控制现实世界的[Ruff应用](https://github.com/RuffApps/Apps)。
  
掌握 Javascript 是您实现上述丰富应用的第一步。

## 变量

Javascript 可以将数据保存在变量里 —— 变量是存储信息的容器
  

```javascript

let x = 2; // 把 2 放进 x 这个容器里
let y = 3; // 把 3 放进 x 这个容器里
let z = x + y; // 把 x y 两个容器里的东西加到一起一股脑放进 z 这个容器里
```

Javascript 可以将操作保存在函数里 —— 函数让操作可以重复利用

```javascript

let add = (x, y) => { // 我们创建了一个容器叫做 add，这个容器在放入 x y 两个东西之后就开始进行后面的操作 =>
  let z = x + y // 我们把这句操作放在容器 add 里: 把 x y 两个容器里的东西加到一起一股脑放进 z 这个容器里
  return z; // 最后把 z 里存储的内容从容器里倒出来
}

add(1, 2); // 得到 3
add(100, 200); // 重复利用，得到 300
add(123, 233); // 留给您作练习
```

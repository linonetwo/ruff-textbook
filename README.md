# ruff-textbook

Textbook about how to develop with Ruff [WIP] [RFC]

## [IoT 从开发到互联](https://github.com/linonetwo/ruff-textbook/tree/master/App-Develop)

Javascript 的教程有很多，例如制定 Javascript 标准的组织提供的[官方教程](http://www.w3school.com.cn/js/js_variables.asp)，它们主要的教学目标是帮助您开发运行在浏览器上的 Web 应用。
  
用 Ruff 快速开发物联网应用，一般会比开发浏览器上的应用简单，您可能只需要掌握一些基本的 Javascript 知识，并简单了解一种叫做 JQuery 的工具。

### [Javascript 数据控制](https://github.com/linonetwo/ruff-textbook/blob/master/App-Develop/Javascript-Dataflow.md)

这一部分里我们将向您介绍 Ruff 开发中将用到的 Javascript 技能，并告诉你如何写 Javascript 能写得又好又快。

### [选中设备](https://github.com/linonetwo/ruff-textbook/blob/master/App-Develop/Selecting-By-JQuery.md)

这一部分里我们将向您介绍在选中设备前需要做什么准备工作、解释选中设备后用导线连接设备时会涉及到的一些术语，并向列出目前可供选中的部分设备。

### [从开始到部署](https://github.com/linonetwo/ruff-textbook/blob/master/App-Develop/Init-%26-Deploy.md)

代码需要部署到设备上运行，您可能已经简单尝试过一到两种部署 Ruff 应用的方法。我们将从这些最简单的部署方法展开，讲述更多的部署可能性，以及部署后对应用 Debug 的方法。

### [测试](https://github.com/linonetwo/ruff-textbook/blob/master/App-Develop/Test.md)

现代 Javascript 开发中有许多有益的工程方法，可以在用户看到 Web 页面拒绝显示前，就在开发阶段告诉开发者代码里有 Bug。我们将这些优秀的实践引入 Ruff 的开发过程，希望能帮助您有效地防止物联网设备搅乱现实世界的秩序。这些实践包括本地自动化测试、关键部分埋点等，它们在提高代码质量的同时，也保证了项目体量变大后您仍能保持对代码的信心。

### [设备互联](https://github.com/linonetwo/ruff-textbook/blob/master/App-Develop/Get-Connected.md)

Javascript 是一门生于互联网，服务互联网的语言，在 Ruff 应用中配置设备与云端的连接，将让您的物联网设备名副其实。
  
Slaff 是与 Ruff 相配套的物联网云平台，通过它连接 Ruff 轻松而愉快。
  
在这个部分我们将介绍 Ruff 应用如何通信，以及如何互相发现。

## [驱动与设备](https://github.com/linonetwo/ruff-textbook/tree/master/Driver-%26-Device)

在选中设备后我们能对设备进行操作。Ruff 的工程师已经[为一系列设备定义了能进行的操作](https://rap.ruff.io)，但他们非常忙碌，如果您自己想控制有个性的设备，您可以写一个设备驱动，暴露出操作这个设备的能力。

### [常见硬件开发概念](https://github.com/linonetwo/ruff-textbook/blob/master/Driver-%26-Device/Electroinc-Concept.md)

当您面对设备文档，很多疑问会产生：什么是 GPIO ？什么叫高电平？中断又是什么？在设备部分里我们将向您解释驱动开发中将会遇到的各种电路名词。

### [用 Javascript 开发硬件驱动](https://github.com/linonetwo/ruff-textbook/blob/master/Driver-%26-Device/Device-Driver-By-Javascript.md)

当开始撰写驱动，您需要知道：driver 函数是什么？this.emit 是做什么的？它们都是 Ruff 的工程师用 Javascript 书写的工具，在驱动部分里我们将向您介绍如何使用这些工具，并介绍保证您的驱动不出严重错误的方法。

## [板卡适配与开发](https://github.com/linonetwo/ruff-textbook/tree/master/Boards)

Ruff 是一个物联网操作系统（IoT OS），支持树莓派、MCU 等您可能需要的板卡，您也可以尝试适配您喜欢的板卡。
  
物联网操作系统将为您提供跨板卡而统一的开发体验，如果您习惯了用 Ruff 板开发应用，您也会很快上手 MCU 的开发。

### [使用树莓派或 MCU](https://github.com/linonetwo/ruff-textbook/blob/master/Boards/RaspberryPi-%26-MCU.md)

在板卡使用部分里我们将详述已得到官方支持的板卡——例如树莓派——的使用流程。除了展示使用流程外，这一部分还包含了使用树莓派和 MCU 等板卡时的注意事项。

### [适配一块新板卡](https://github.com/linonetwo/ruff-textbook/blob/master/Boards/Board-Adaption.md)

在板卡适配部分您将知道如何理解您的板卡，并将其书写成一个板卡描述文件。

## 参考书

开发 Ruff 很简单，精通 Ruff 也不难，但通过 Ruff 你可以将自己的知识面扩展到丰富多彩的硬件世界，因此我们给出一系列参考书目，它们将有益于您的职业发展。

## 撰写思路

Ruff 开发者可能是对硬件一窍不通但是精通 ES6 的前端，或是对 Javascript 一知半解但精通硬件的工程师。所以每个部分都要做到针对这个部分的小白而写。

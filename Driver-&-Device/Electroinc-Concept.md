# 常见硬件开发概念

如果您想为一个按钮添加 click 功能，监听一个按钮被点按的事件，您首先需要知道按钮按下与松开时物理状态有何变化。对于按钮，这很简单，被按下的按钮的 GPIO 口会处在低电平，而为了在按钮被按下的第一时间通知用户做点什么，被按下的按钮会发送一个中断给开发板，通知开发板事情正在起变化。

可见在驱动开发的过程中，您会遇到一些基础但绕不开的电路术语。我们从表示开关量的 GPIO 说起。

## GPIO

GPIO 意思是通用输入／输出（General Purpose Input Output），它是 Ruff 开发板上的一种接口，你可以通过导线将它和外部设备连在一起，用它控制设备，或了解设备在做什么。Ruff 开发板上的 IO0 ~ IO15（非原生）以及 G11 ~ G15、G18 和 G26。
  
Ruff 开发中我们会往开发板上连接一些结构简单的外部设备或电路，有的外设需要用开发板进行控制，有的则被开发板用作输入信号的来源。许多这样的设备只要求有开/关这两种状态就够了，比如 LED 灯的亮与灭、大按键的按下与释放。所以对这些设备的控制和状态读取只需要一位的 0/1 就行了。所以在微控制器芯片上一般都会提供 GPIO，用来做一些「微小的工作」。GPIO 可以用于模拟其他类型的接口，因此 G19 ~ G25 被用于模拟其他接口了。
  
一个 GPIO 口可以用于输出也可以用于输入，在开发 Ruff 应用时怎么使用它，将取决于设备驱动。输入输出用的 0/1 一般被称为「低电平/高电平」，它们是对「低电压/高电压」的进一步抽象，因为驱动开发者并不用了解 GPIO 口的具体电压。而驱动开发者会对高低电平做进一步抽象，使得您在开发 Ruff 的过程中并不需要了解电平高低的变化，只需要使用类似 ```turnOn()``` 或 ```turnOff()``` 的函数。

### 中断

#### 上升沿触发中断

#### 上拉

## 总线

总线（Bus）是开发板上来回运输数据的抽象线路，是计算机组件间交换数据的方式之一。通过总线， Ruff 以一种通用的方式为各外部设备传输数据，或控制外设。
  
虽然操作起来感觉不如 GPIO 精简，但总线可以传输更多数据，例如温湿度传感器的温湿度数字，或向显示屏发送需要显示的像素信息。

## I²C

I²C 意思集成电路总线（Inter-Integrated Circuit），一般顺口读为「i方c」。在 Ruff 开发板上，一个 I²C 体现为一对接口：发送时间信号的 SCL（Serial Clock）和传输数据的 SDA（Serial Data）。
  
通过 I²C 控制不同的设备有不同的方式，需要通过总线发送不同的数字指令来控制外设。这些指令一般可以通过查询外部设备的数据手册，或通过询问店主得知。
  
通过 I²C 接收设备传来的数据也有需要注意的地方：传来的数据一般不能直接当做 Javascript 的 number 类型来使用，需要查询数据手册进行转换，类似：

```javascript

const javascriptValue = Math.floor((i2cValue[0] << 8 | i2cValue[1]) / 1.2);
```

但设备驱动一般会将这些细节隐藏起来，使用 Ruff 开发应用的时候一般只需简单地调用 ```read()``` 或 ```write(3)``` 这样的函数。

## UART

UART 意思是通用异步收发传输器（Universal Asynchronous Receiver/Transmitter），读作「/ˈjuːart/」。
  
通用异步收发传输器，其中的「异步」和我们在 Javascript 部分学到的「异步」是一样的，板子通过它收发的数据会经过一个缓存，而不是直接与设备交流。在 Ruff 开发板上有 RXD（Receive Data）和 TXD（Transmit Data）两个接口，分别用于收发数据。其中的 TX/RX 是 Transmit/Receive 的[缩写](http://electronics.stackexchange.com/questions/214328/whats-the-meaning-of-x-in-rxd-and-txd-of-uart)。
  
开发板内信号传输是串行的，如果外部设备要求并行输入，则可以通过 UART 做一下串并行直接的转换。
  
使用 UART 时需要设置波特率、停止位、数据位，还可以可选地打开奇偶校验和流控制。
  
### 波特率

### 停止位和数据位

### 奇偶校验

### 流控制

## PWM

PWM 意思是脉冲宽度调制（Pulse Width Modulation），当我们需要控制模拟电路，例如想控制五彩 LED 灯颜色的 RGB 值，就需要用到 PWM。
  
例如开发应用时我们可以很简单地为 LED 灯设置颜色：

```javascript

$('#<device-id>').setRGB([0x80, 0x80, 0x80]);
```

实际上我们是改变了 PWM 的占空比（Duty），以此改变外设上的平均电压：

```javascript

this.pwmR.setDuty(this.inputR / 0xff);
this.pwmG.setDuty(this.inputG / 0xff);
this.pwmB.setDuty(this.inputB / 0xff);
```

因此红绿蓝三色 LED 才会以不同的亮度组合，形成复合色。
  
### 占空比

### 方波

## ADC

ADC 意思是模/数转换器（Analog-to-Digital converter），顾名思义，当您需要将电压这样的连续的（即模拟的）物理量转化为 Javascript 中离散的（即数字的） number 类型时，就会需要它。

## QEI

QEI 意思是正交编码器接口（Quadrature Encoder Interface），用来测量电机的转速和方向。

### 每圈脉冲数

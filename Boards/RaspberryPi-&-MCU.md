
如果您拥有一块 Tiva C Series TM4C1294 LaunchPad 开发板，您的应用开发过程与其他开发板的开发过程只有很少的不同，比如创建应用时的初始化：

```shell

rap init --board rpi-2b
```

您只需要需要加上```--board```选项。再看看 MCU 应用的初始化：

```shell

rap init --board tm4c1294-v1
```
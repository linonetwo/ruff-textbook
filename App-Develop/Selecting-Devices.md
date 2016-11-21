# 选中一个设备

我们用 $( ) 来选中设备。

## 能选中什么

Ruff 赠送的外设上一般标有一串类似于 IRT-01 的设备名，它们就是可以直接用于选中的名字：

```javascript

$('#IRT-01')
```

如果您在淘宝等店铺购买了设备，您可以到[驱动搜索页面](https://rap.ruff.io/)输入设备型号，就能搜到设备对应的驱动，安装驱动后就能选中该设备。

## 选中后的操作

如果您曾经用过 JQuery，您可能记得可以用 JQuery 为网页上的按钮添加事件监听器：
  

```javascript

$('#button').click(() => { // 摘录自 W3School，选中一个 id 为 button 的设备，当被按下时
  $('#button').hide(); // 让 id 为 button 的设备躲起来
});
```

但事实上您无法监听 LED 灯被你点按的事件，也没法让 LED 灯躲起来，一是因为 Ruff 上使用的是精简版的 JQuery，以保证设备运行效率; 二是因为您能进行的操作须以实物为准，取决于设备驱动暴露出了哪些操作能力。

## 高级选中

### 模板字符串

主要用于循环选中大量设备

### 选择器工厂

主要用于检查类型，防止 bug。

```javascript
function selectLED(colorName: SupportedColorsType) {
  return $(`#led-${colorName}`)
}
```
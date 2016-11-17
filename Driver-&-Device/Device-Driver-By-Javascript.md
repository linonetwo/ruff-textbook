# 撰写设备驱动

## 初始化项目

## 参考外设文档与代码

## 声明接口信息

## Javascript 驱动代码

```javascript

const PUSHED = 0; // 给 GPIO 低电平起个别名
const RELEASED = 1; // GPIO 高电平

let currentState = RELEASED; // 按钮的按下状态

driver({
  attach: function(inputs) {
    let gpio = inputs['gpio'];

    gpio.on('interrupt', (gpioState) => {
      if (currentState === gpioState) {
        return;
      }

      currentState = gpioState;

      if (gpioState === PUSHED) {
        this.emit('pushed');
      } else {
        this.emit('released');
      }
    });
  },
  exports: {
    isPushed: function() {
      return currentState === PUSHED;
    }
  }
});
```

您的驱动获取这个状态后将它变成一个 'pushed' 的字符串，方便设备驱动使用者理解按钮当前状态。

### driver 对象

#### emit()

## C 绑定

### 工具链

## 驱动测试

## 发布驱动

## 技术支持



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
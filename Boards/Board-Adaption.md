

开发 Ruff 应用常常是为了与设备进行交互，为了适配新板卡，您需要用一份板卡描述文件，说明板卡上存在哪些硬件接口（比如，GPIO接口），以及有哪些应用可以操作的内置设备（比如，LED）：

```json
// board.json
{
  "version": "2.0",
  "id": "foo",
  "model": "foo", // 该板卡的所支持硬件的型号
  "devices": [ // 板卡上所支持的硬件资源（接口或设备）
    {
      "id": "gpio-0", // 说明这个设备可被 $('#gpio-0') 选中
      "driver": "sys-gpio", // 设备使用什么驱动程序
      "inputs": {
        "pin": {
          "type": "number",
          "args": {
            "pin": 0
          }
        }
      },
      "outputs": {
        "gpio": {
          "type": "gpio"
        }
      }
    }
  ],
  "outputs": {
    "gpio-0": "gpio-0/gpio"
  }
}
```

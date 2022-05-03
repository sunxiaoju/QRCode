# 基于jsqr的一个二维码扫描库

### 使用说明

示例
```js
import initCamera from '../../QRCode/index';
import { QRCodeResult } from '../../QRCode/index.d';


  const qrCode = initCamera('canvas', ({ err, data }: QRCodeResult) => {
      if (!err) {
        console.log('========', data);
        qrCode!.video.pause();
        setTimeout(() => {
          qrCode!.video.play();
        }, 5000);
      }
    })
```

错误类型：
```js
err.type: error  type, getUserMedia  error type
err.message:  error message
```

# 作废 Token

## 接口说明

作废 Token 接口用于使指定用户的 Token 失效，用户需要重新获取 Token 才能连接融云 IM 服务。

## 接口地址

```
POST /user/expire.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 用户 ID，最大长度 64 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/user/expire.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "userId=jlk456j5"
```

### JavaScript
```javascript
const axios = require('axios');
const crypto = require('crypto');

const appKey = 'your-app-key';
const appSecret = 'your-app-secret';
const nonce = Math.floor(Math.random() * 100000);
const timestamp = Date.now();
const signature = crypto.createHash('sha1')
  .update(appSecret + nonce + timestamp)
  .digest('hex');

const response = await axios.post('https://api.rong-api.com/user/expire.json', {
  userId: 'jlk456j5'
}, {
  headers: {
    'App-Key': appKey,
    'Nonce': nonce,
    'Timestamp': timestamp,
    'Signature': signature,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
```

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | Integer | 返回码，200 表示成功 |

## 响应示例

### 成功响应
```json
{
  "code": 200
}
```

### 失败响应
```json
{
  "code": 1002,
  "errorMessage": "AppKey不存在"
}
```

## 错误码

| 错误码 | 说明 |
|--------|------|
| 200 | 成功 |
| 1002 | AppKey不存在 |
| 1003 | 参数错误 |
| 1004 | 用户不存在 |

## 注意事项

1. **Token失效**：作废后用户需要重新调用注册接口获取新的Token
2. **连接断开**：作废后用户当前连接会被强制断开
3. **重新连接**：用户需要使用新的Token重新连接融云IM服务

## 最佳实践

1. **安全考虑**：在用户退出登录或Token泄露时调用此接口
2. **用户体验**：在调用前通知用户即将断开连接
3. **错误处理**：根据返回的错误码进行相应处理 
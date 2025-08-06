# 重新激活用户 ID

## 接口说明

重新激活用户 ID 接口用于将已注销的用户重新激活，激活后的用户可以正常使用融云 IM 服务。

## 接口地址

```
POST /user/deactivation/reactivate.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 用户 ID，最大长度 64 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/user/deactivation/reactivate.json" \
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

const response = await axios.post('https://api.rong-api.com/user/deactivation/reactivate.json', {
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
| 1009 | 用户未被注销 |

## 注意事项

1. **用户状态**：只能重新激活已注销的用户
2. **数据恢复**：重新激活后用户的历史数据会保留
3. **重新注册**：重新激活后用户需要重新调用注册接口获取Token

## 最佳实践

1. **状态检查**：激活前确认用户确实处于注销状态
2. **用户通知**：激活后通知用户账号已恢复
3. **数据验证**：激活后验证用户数据完整性 
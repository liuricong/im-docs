# 修改用户信息

## 接口说明

修改用户信息接口用于更新指定用户的名称和头像信息。

## 接口地址

```
POST /user/refresh.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 用户 ID，最大长度 64 字节 |
| name | String | 否 | 用户名称，最大长度 128 字节 |
| portraitUri | String | 否 | 用户头像 URI，最大长度 1024 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/user/refresh.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "userId=jlk456j5&name=Ironman&portraitUri=http%3A%2F%2Fabc.com%2Fmyportrait.jpg"
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

const response = await axios.post('https://api.rong-api.com/user/refresh.json', {
  userId: 'jlk456j5',
  name: 'Ironman',
  portraitUri: 'http://abc.com/myportrait.jpg'
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
| 1006 | 用户名称格式错误 |
| 1007 | 用户头像URI格式错误 |

## 注意事项

1. **部分更新**：可以只更新名称或头像，不需要同时提供两个参数
2. **用户存在性**：只能修改已注册用户的信息
3. **格式验证**：名称和头像URI需要符合格式要求

## 最佳实践

1. **数据验证**：更新前验证用户信息的格式
2. **错误处理**：根据返回的错误码进行相应处理
3. **缓存更新**：更新成功后同步更新本地缓存 
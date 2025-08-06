# 获取用户信息

## 接口说明

获取用户信息接口用于查询指定用户的详细信息，包括用户名称、头像等。

## 接口地址

```
POST /user/get.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 用户 ID，最大长度 64 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/user/get.json" \
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

const response = await axios.post('https://api.rong-api.com/user/get.json', {
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
| id | String | 用户 ID |
| name | String | 用户名称 |
| portraitUri | String | 用户头像 URI |

## 响应示例

### 成功响应
```json
{
  "code": 200,
  "id": "jlk456j5",
  "name": "Ironman",
  "portraitUri": "http://abc.com/myportrait.jpg"
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

1. **用户存在性**：只能查询已注册的用户信息
2. **信息完整性**：返回的信息包括用户注册时提供的所有信息
3. **权限控制**：任何应用都可以查询用户信息

## 最佳实践

1. **缓存策略**：建议缓存用户信息，避免频繁调用
2. **错误处理**：根据返回的错误码进行相应处理
3. **数据验证**：验证返回的用户信息完整性 
# 注册用户

## 接口说明

注册用户是使用融云 IM 服务的第一步，通过此接口可以为用户获取连接融云 IM 服务所需的 Token。

## 接口地址

```
POST /user/getToken.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 用户 ID，最大长度 64 字节，是用户在 App 中的唯一标识 |
| name | String | 是 | 用户名称，最大长度 128 字节 |
| portraitUri | String | 否 | 用户头像 URI，最大长度 1024 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/user/getToken.json" \
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

const response = await axios.post(
  'https://api.rong-api.com/user/getToken.json', 
  {
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
| userId | String | 用户 ID |
| token | String | 用户 Token，用于连接融云 IM 服务 |

## 响应示例

### 成功响应
```json
{
  "code": 200,
  "userId": "jlk456j5",
  "token": "sfd9823ihufi"
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
| 1004 | 用户ID已存在 |
| 1005 | 用户ID格式错误 |
| 1006 | 用户名称格式错误 |
| 1007 | 用户头像URI格式错误 |

## 注意事项

1. **用户ID唯一性**：每个用户ID在同一个App中只能注册一次
2. **Token有效期**：Token默认有效期为30天，过期后需要重新获取
3. **并发限制**：同一用户ID不能同时进行多次注册
4. **字符编码**：所有参数必须使用UTF-8编码

## 最佳实践

1. **用户ID设计**：建议使用有意义的用户ID，如邮箱、手机号等
2. **错误处理**：根据返回的错误码进行相应的错误处理
3. **Token缓存**：建议在客户端缓存Token，避免频繁调用注册接口
4. **重试机制**：网络异常时建议实现重试机制 
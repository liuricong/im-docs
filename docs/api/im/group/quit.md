# 退出群组

## 接口说明

退出群组接口用于将指定用户从群组中移除，用户不再是群组成员。

## 接口地址

```
POST /group/quit.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 要退出群组的用户 ID，最大长度 64 字节 |
| groupId | String | 是 | 群组 ID，最大长度 64 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/group/quit.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "userId=user1&groupId=group1"
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

const response = await axios.post('https://api.rong-api.com/group/quit.json', {
  userId: 'user1',
  groupId: 'group1'
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
| 1005 | 群组不存在 |
| 1006 | 用户不在群组中 |

## 注意事项

1. **群组存在性**：只能退出已存在的群组
2. **成员身份**：只能退出用户所在的群组
3. **群主退出**：群主退出后群组不会自动解散
4. **历史消息**：退出后仍可查看历史消息

## 最佳实践

1. **权限验证**：退出前验证用户是否在群组中
2. **用户确认**：退出前确认用户确实要退出群组
3. **通知机制**：退出后通知其他群组成员
4. **错误处理**：根据返回的错误码进行相应处理

## 相关接口

- [创建群组](/api/im/group/create)
- [加入群组](/api/im/group/join)
- [解散群组](/api/im/group/dismiss)
- [查询群组信息](/api/im/group/info) 
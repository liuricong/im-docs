# 解散群组

## 接口说明

解散群组接口用于解散指定的群组，解散后群组将不存在，所有成员将被移除。

## 接口地址

```
POST /group/dismiss.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 解散群组的用户 ID，必须是群主，最大长度 64 字节 |
| groupId | String | 是 | 群组 ID，最大长度 64 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/group/dismiss.json" \
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

const response = await axios.post('https://api.rong-api.com/group/dismiss.json', {
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
| 1010 | 用户不是群主 |

## 注意事项

1. **权限要求**：只有群主才能解散群组
2. **永久操作**：解散后群组无法恢复
3. **成员移除**：解散后所有成员自动被移除
4. **历史消息**：解散后历史消息仍可查看

## 最佳实践

1. **权限验证**：解散前验证用户是否为群主
2. **用户确认**：解散前确认群主确实要解散群组
3. **成员通知**：解散前通知所有群组成员
4. **数据备份**：建议在解散前备份重要数据

## 相关接口

- [创建群组](/api/im/group/create)
- [加入群组](/api/im/group/join)
- [退出群组](/api/im/group/quit)
- [查询群组信息](/api/im/group/info) 
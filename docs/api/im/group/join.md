# 加入群组

## 接口说明

加入群组接口用于将指定用户添加到群组中，成为群组成员。

## 接口地址

```
POST /group/join.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 要加入群组的用户 ID，最大长度 64 字节 |
| groupId | String | 是 | 群组 ID，最大长度 64 字节 |
| groupName | String | 是 | 群组名称，最大长度 128 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/group/join.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "userId=user1&groupId=group1&groupName=测试群组"
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

const response = await axios.post('https://api.rong-api.com/group/join.json', {
  userId: 'user1',
  groupId: 'group1',
  groupName: '测试群组'
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
| 1006 | 用户已在群组中 |
| 1007 | 群组成员数量超限 |

## 注意事项

1. **群组存在性**：只能加入已存在的群组
2. **成员限制**：单个群组最多支持 3000 个成员
3. **重复加入**：同一用户不能重复加入同一个群组
4. **权限控制**：任何用户都可以加入公开群组

## 最佳实践

1. **群组验证**：加入前验证群组是否存在
2. **成员检查**：加入前检查用户是否已在群组中
3. **数量限制**：注意群组成员数量限制
4. **错误处理**：根据返回的错误码进行相应处理

## 相关接口

- [创建群组](/api/im/group/create)
- [退出群组](/api/im/group/quit)
- [解散群组](/api/im/group/dismiss)
- [查询群组信息](/api/im/group/info) 
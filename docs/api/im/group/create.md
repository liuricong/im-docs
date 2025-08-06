# 创建群组

## 接口说明

创建群组接口用于创建一个新的群组，并可以同时添加群组成员。

## 接口地址

```
POST /group/create.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | String | 是 | 创建群组的用户 ID，最大长度 64 字节 |
| groupId | String | 是 | 群组 ID，最大长度 64 字节，是群组的唯一标识 |
| groupName | String | 是 | 群组名称，最大长度 128 字节 |
| userIds | String | 否 | 群组成员 ID 列表，多个用户 ID 用逗号分隔，最大长度 1000 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/group/create.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "userId=user1&groupId=group1&groupName=测试群组&userIds=user2,user3,user4"
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

const response = await axios.post('https://api.rong-api.com/group/create.json', {
  userId: 'user1',
  groupId: 'group1',
  groupName: '测试群组',
  userIds: 'user2,user3,user4'
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
| id | String | 群组 ID |

## 响应示例

### 成功响应
```json
{
  "code": 200,
  "id": "group1"
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
| 1005 | 群组ID已存在 |
| 1006 | 群组名称格式错误 |
| 1007 | 群组成员数量超限 |

## 注意事项

1. **群组ID唯一性**：每个群组ID在同一个App中只能创建一次
2. **群组成员限制**：单个群组最多支持 3000 个成员
3. **群组名称**：群组名称不能为空，且不能超过 128 字节
4. **创建者权限**：创建者自动成为群组管理员

## 最佳实践

1. **群组ID设计**：建议使用有意义的群组ID，便于管理和识别
2. **群组名称**：使用简洁明了的群组名称
3. **成员管理**：创建群组时一次性添加所有初始成员，避免频繁调用添加成员接口
4. **错误处理**：根据返回的错误码进行相应的错误处理

## 相关接口

- [加入群组](/api/im/group/join)
- [退出群组](/api/im/group/quit)
- [解散群组](/api/im/group/dismiss)
- [查询群组信息](/api/im/group/info)
- [修改群组信息](/api/im/group/refresh) 
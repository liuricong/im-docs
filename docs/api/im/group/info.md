# 查询群组信息

## 接口说明

查询群组信息接口用于获取指定群组的详细信息，包括群组名称、成员数量等。

## 接口地址

```
POST /group/info.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| groupId | String | 是 | 群组 ID，最大长度 64 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/group/info.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "groupId=group1"
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

const response = await axios.post('https://api.rong-api.com/group/info.json', {
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
| id | String | 群组 ID |
| name | String | 群组名称 |
| memberCount | Integer | 群组成员数量 |

## 响应示例

### 成功响应
```json
{
  "code": 200,
  "id": "group1",
  "name": "测试群组",
  "memberCount": 10
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
| 1005 | 群组不存在 |

## 注意事项

1. **群组存在性**：只能查询已存在的群组
2. **信息实时性**：返回的信息是实时的
3. **权限控制**：任何应用都可以查询群组信息

## 最佳实践

1. **缓存策略**：建议缓存群组信息，避免频繁调用
2. **错误处理**：根据返回的错误码进行相应处理
3. **数据验证**：验证返回的群组信息完整性

## 相关接口

- [创建群组](/api/im/group/create)
- [加入群组](/api/im/group/join)
- [退出群组](/api/im/group/quit)
- [解散群组](/api/im/group/dismiss) 
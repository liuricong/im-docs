# 修改群组信息

## 接口说明

修改群组信息接口用于更新指定群组的名称等信息。

## 接口地址

```
POST /group/refresh.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| groupId | String | 是 | 群组 ID，最大长度 64 字节 |
| groupName | String | 是 | 群组名称，最大长度 128 字节 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/group/refresh.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "groupId=group1&groupName=新群组名称"
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

const response = await axios.post('https://api.rong-api.com/group/refresh.json', {
  groupId: 'group1',
  groupName: '新群组名称'
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
| 1005 | 群组不存在 |
| 1006 | 群组名称格式错误 |

## 注意事项

1. **群组存在性**：只能修改已存在的群组
2. **名称格式**：群组名称不能为空，且不能超过 128 字节
3. **权限控制**：任何应用都可以修改群组信息

## 最佳实践

1. **数据验证**：修改前验证群组名称格式
2. **错误处理**：根据返回的错误码进行相应处理
3. **缓存更新**：修改成功后同步更新本地缓存

## 相关接口

- [创建群组](/api/im/group/create)
- [查询群组信息](/api/im/group/info)
- [加入群组](/api/im/group/join)
- [退出群组](/api/im/group/quit) 
# 查询已注销用户

## 接口说明

查询已注销用户接口用于获取指定时间段内已注销的用户列表。

## 接口地址

```
POST /user/deactivation/query-deactivated-list.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| startTime | String | 是 | 开始时间，格式：yyyy-MM-dd HH:mm:ss |
| endTime | String | 是 | 结束时间，格式：yyyy-MM-dd HH:mm:ss |
| pageNo | Integer | 否 | 页码，默认为 1 |
| pageSize | Integer | 否 | 每页数量，默认为 20，最大 100 |

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/user/deactivation/query-deactivated-list.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "startTime=2024-01-01 00:00:00&endTime=2024-01-31 23:59:59&pageNo=1&pageSize=20"
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

const response = await axios.post('https://api.rong-api.com/user/deactivation/query-deactivated-list.json', {
  startTime: '2024-01-01 00:00:00',
  endTime: '2024-01-31 23:59:59',
  pageNo: 1,
  pageSize: 20
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
| totalCount | Integer | 总数量 |
| pageNo | Integer | 当前页码 |
| pageSize | Integer | 每页数量 |
| users | Array | 用户列表 |

## 响应示例

### 成功响应
```json
{
  "code": 200,
  "totalCount": 100,
  "pageNo": 1,
  "pageSize": 20,
  "users": [
    {
      "userId": "user1",
      "deactivationTime": "2024-01-15 10:30:00"
    },
    {
      "userId": "user2",
      "deactivationTime": "2024-01-16 14:20:00"
    }
  ]
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
| 1008 | 时间格式错误 |

## 注意事项

1. **时间范围**：查询时间范围不能超过 30 天
2. **分页查询**：支持分页查询，避免一次性返回过多数据
3. **数据时效**：只能查询最近 90 天内的注销记录

## 最佳实践

1. **合理分页**：根据实际需求设置合适的页面大小
2. **时间范围**：合理设置查询时间范围，避免查询范围过大
3. **数据统计**：可用于用户流失分析和统计 
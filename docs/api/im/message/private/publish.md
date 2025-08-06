# 发送单聊消息

## 接口说明

发送单聊消息接口用于向指定用户发送私聊消息，支持多种消息类型。

## 接口地址

```
POST /message/private/publish.json
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| fromUserId | String | 是 | 发送消息的用户 ID，最大长度 64 字节 |
| toUserId | String | 是 | 接收消息的用户 ID，最大长度 64 字节 |
| objectName | String | 是 | 消息类型，如：RC:TxtMsg、RC:ImgMsg 等 |
| content | String | 是 | 消息内容，JSON 格式 |
| pushContent | String | 否 | 推送内容，用于推送通知，最大长度 1000 字节 |
| pushData | String | 否 | 推送数据，用于推送通知，最大长度 1000 字节 |
| count | Integer | 否 | 是否计数，0 表示不计数，1 表示计数，默认为 1 |
| verifyBlacklist | Integer | 否 | 是否验证黑名单，0 表示不验证，1 表示验证，默认为 0 |
| isPersisted | Integer | 否 | 是否存储，0 表示不存储，1 表示存储，默认为 1 |
| isCounted | Integer | 否 | 是否计数，0 表示不计数，1 表示计数，默认为 1 |
| isIncludeSender | Integer | 否 | 是否包含发送者，0 表示不包含，1 表示包含，默认为 0 |

## 消息类型

### 文本消息 (RC:TxtMsg)
```json
{
  "content": "Hello World"
}
```

### 图片消息 (RC:ImgMsg)
```json
{
  "imageUri": "http://example.com/image.jpg",
  "content": "图片描述"
}
```

### 语音消息 (RC:VcMsg)
```json
{
  "content": "语音内容",
  "duration": 10
}
```

### 视频消息 (RC:VidMsg)
```json
{
  "content": "视频描述",
  "imageUri": "http://example.com/thumb.jpg",
  "videoUri": "http://example.com/video.mp4",
  "duration": 30
}
```

## 请求示例

### cURL
```bash
curl -X POST "https://api.rong-api.com/message/private/publish.json" \
  -H "App-Key: your-app-key" \
  -H "Nonce: 14314" \
  -H "Timestamp: 1408710653000" \
  -H "Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "fromUserId=user1&toUserId=user2&objectName=RC:TxtMsg&content=%7B%22content%22%3A%22Hello%20World%22%7D"
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

const messageContent = {
  content: "Hello World"
};

const response = await axios.post('https://api.rong-api.com/message/private/publish.json', {
  fromUserId: 'user1',
  toUserId: 'user2',
  objectName: 'RC:TxtMsg',
  content: JSON.stringify(messageContent),
  pushContent: '您收到一条新消息',
  count: 1,
  verifyBlacklist: 0,
  isPersisted: 1,
  isCounted: 1,
  isIncludeSender: 0
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
| messageId | String | 消息 ID |
| sentTime | Long | 发送时间戳 |

## 响应示例

### 成功响应
```json
{
  "code": 200,
  "messageId": "1234567890",
  "sentTime": 1640995200000
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
| 1005 | 用户被加入黑名单 |
| 1006 | 消息内容格式错误 |
| 1007 | 消息类型不支持 |

## 注意事项

1. **消息长度限制**：文本消息最大长度 4KB，其他类型消息根据具体限制
2. **发送频率限制**：单用户发送频率限制为 100 次/分钟
3. **黑名单验证**：如果开启黑名单验证，被加入黑名单的用户无法接收消息
4. **消息存储**：默认存储消息，可通过 isPersisted 参数控制

## 最佳实践

1. **消息内容验证**：发送前验证消息内容格式
2. **错误处理**：根据返回的错误码进行相应处理
3. **重试机制**：网络异常时实现重试机制
4. **消息去重**：避免重复发送相同消息 
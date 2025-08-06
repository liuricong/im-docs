# 单聊消息

## 概述

单聊消息是融云 IM 服务中用户之间一对一通信的核心功能，支持多种消息类型和丰富的交互体验。

## 消息类型

### 文本消息 (RC:TxtMsg)
用于发送纯文本内容，支持表情符号和特殊字符。

```json
{
  "objectName": "RC:TxtMsg",
  "content": {
    "content": "Hello World"
  }
}
```

### 图片消息 (RC:ImgMsg)
用于发送图片，支持 JPG、PNG、GIF 等格式。

```json
{
  "objectName": "RC:ImgMsg",
  "content": {
    "imageUri": "http://example.com/image.jpg",
    "content": "图片描述"
  }
}
```

### 语音消息 (RC:VcMsg)
用于发送语音内容，支持多种音频格式。

```json
{
  "objectName": "RC:VcMsg",
  "content": {
    "content": "语音内容",
    "duration": 10
  }
}
```

### 视频消息 (RC:VidMsg)
用于发送视频内容，支持多种视频格式。

```json
{
  "objectName": "RC:VidMsg",
  "content": {
    "content": "视频描述",
    "imageUri": "http://example.com/thumb.jpg",
    "videoUri": "http://example.com/video.mp4",
    "duration": 30
  }
}
```

### 文件消息 (RC:FileMsg)
用于发送文件，支持各种文件类型。

```json
{
  "objectName": "RC:FileMsg",
  "content": {
    "name": "文件名.pdf",
    "size": 1024000,
    "type": "application/pdf",
    "fileUri": "http://example.com/file.pdf"
  }
}
```

### 位置消息 (RC:LBSMsg)
用于发送地理位置信息。

```json
{
  "objectName": "RC:LBSMsg",
  "content": {
    "content": "位置描述",
    "latitude": 39.908823,
    "longitude": 116.397470,
    "poi": "天安门广场"
  }
}
```

## 消息属性

### 基础属性
- **messageId**：消息唯一标识
- **fromUserId**：发送者用户ID
- **toUserId**：接收者用户ID
- **objectName**：消息类型
- **content**：消息内容
- **sentTime**：发送时间戳

### 扩展属性
- **extra**：额外信息
- **pushContent**：推送内容
- **pushData**：推送数据
- **isPersisted**：是否存储
- **isCounted**：是否计数

## 消息状态

### 发送状态
- **sending**：发送中
- **sent**：已发送
- **failed**：发送失败
- **delivered**：已送达
- **read**：已读

### 状态跟踪
```javascript
// 监听消息状态变化
rongClient.on('messageStatus', function(messageId, status) {
  console.log('消息状态变化:', messageId, status);
});
```

## 消息操作

### 发送消息
```javascript
// 发送文本消息
const message = {
  objectName: 'RC:TxtMsg',
  content: {
    content: 'Hello World'
  }
};

rongClient.sendMessage({
  targetId: 'user123',
  conversationType: 1, // 单聊
  message: message
});
```

### 接收消息
```javascript
// 监听接收消息
rongClient.on('message', function(message) {
  console.log('收到消息:', message);
  
  // 处理不同类型的消息
  switch(message.objectName) {
    case 'RC:TxtMsg':
      handleTextMessage(message);
      break;
    case 'RC:ImgMsg':
      handleImageMessage(message);
      break;
    case 'RC:VcMsg':
      handleVoiceMessage(message);
      break;
    default:
      handleCustomMessage(message);
  }
});
```

### 消息撤回
```javascript
// 撤回消息
rongClient.recallMessage({
  messageId: 'message123',
  sentTime: 1640995200000
});
```

### 消息已读
```javascript
// 设置消息已读
rongClient.sendReadReceiptMessage({
  targetId: 'user123',
  conversationType: 1,
  messageId: 'message123'
});
```

## 消息存储

### 本地存储
- 消息缓存
- 会话列表
- 未读消息计数

### 云端存储
- 消息持久化
- 历史消息查询
- 消息同步

## 消息限制

### 长度限制
- 文本消息：最大 4KB
- 图片消息：最大 10MB
- 语音消息：最大 60MB
- 视频消息：最大 100MB
- 文件消息：最大 100MB

### 频率限制
- 单用户发送频率：100 次/分钟
- 消息内容审核：实时审核
- 敏感词过滤：自动过滤

## 最佳实践

### 1. 消息发送
- 发送前验证消息格式
- 合理控制发送频率
- 处理发送失败情况

### 2. 消息接收
- 及时处理接收到的消息
- 实现消息状态更新
- 处理离线消息同步

### 3. 用户体验
- 提供消息发送状态反馈
- 实现消息已读回执
- 支持消息撤回功能

### 4. 性能优化
- 实现消息分页加载
- 使用消息缓存机制
- 优化网络请求策略

## 错误处理

### 常见错误
- 网络连接失败
- 消息发送超时
- 消息格式错误
- 用户不存在

### 错误处理
```javascript
rongClient.on('error', function(error) {
  console.error('融云错误:', error);
  
  switch(error.code) {
    case 1001:
      // 网络连接失败
      reconnect();
      break;
    case 1002:
      // 消息发送失败
      retrySendMessage();
      break;
    default:
      // 其他错误
      handleGeneralError(error);
  }
});
```

## 相关接口

- [发送单聊消息](/api/im/message/private/publish)
- [获取历史消息](/api/im/message/history)
- [设置消息已读](/api/im/message/read)
- [撤回消息](/api/im/message/recall) 
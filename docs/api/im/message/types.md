# 消息类型概述

## 概述

融云 IM 支持多种消息类型，包括文本、图片、语音、视频、文件等，满足不同场景的通信需求。

## 基础消息类型

### 文本消息 (RC:TxtMsg)
用于发送纯文本内容，支持表情符号和特殊字符。

```json
{
  "content": "Hello World"
}
```

### 图片消息 (RC:ImgMsg)
用于发送图片，支持 JPG、PNG、GIF 等格式。

```json
{
  "imageUri": "http://example.com/image.jpg",
  "content": "图片描述",
  "extra": "额外信息"
}
```

### 语音消息 (RC:VcMsg)
用于发送语音内容，支持多种音频格式。

```json
{
  "content": "语音内容",
  "duration": 10,
  "extra": "额外信息"
}
```

### 视频消息 (RC:VidMsg)
用于发送视频内容，支持多种视频格式。

```json
{
  "content": "视频描述",
  "imageUri": "http://example.com/thumb.jpg",
  "videoUri": "http://example.com/video.mp4",
  "duration": 30,
  "extra": "额外信息"
}
```

### 文件消息 (RC:FileMsg)
用于发送文件，支持各种文件类型。

```json
{
  "name": "文件名.pdf",
  "size": 1024000,
  "type": "application/pdf",
  "fileUri": "http://example.com/file.pdf",
  "extra": "额外信息"
}
```

## 位置消息

### 位置消息 (RC:LBSMsg)
用于发送地理位置信息。

```json
{
  "content": "位置描述",
  "latitude": 39.908823,
  "longitude": 116.397470,
  "poi": "天安门广场",
  "extra": "额外信息"
}
```

## 富媒体消息

### 图文消息 (RC:ImgTextMsg)
用于发送图文混排的内容。

```json
{
  "title": "标题",
  "content": "内容描述",
  "imageUri": "http://example.com/image.jpg",
  "url": "http://example.com/detail",
  "extra": "额外信息"
}
```

### 卡片消息 (RC:CardMsg)
用于发送卡片式内容，支持自定义样式。

```json
{
  "title": "卡片标题",
  "content": "卡片内容",
  "imageUri": "http://example.com/card.jpg",
  "url": "http://example.com/card",
  "extra": "额外信息"
}
```

## 系统消息

### 系统通知 (RC:InfoNtf)
用于发送系统通知消息。

```json
{
  "message": "系统通知内容",
  "extra": "额外信息"
}
```

### 群组通知 (RC:GrpNtf)
用于发送群组相关通知。

```json
{
  "operatorUserId": "操作者ID",
  "operation": "add",
  "data": "user1,user2",
  "message": "群组通知内容",
  "extra": "额外信息"
}
```

## 自定义消息

### 自定义消息 (RC:CustomMsg)
用于发送自定义格式的消息。

```json
{
  "customType": "order",
  "customData": {
    "orderId": "12345",
    "status": "paid",
    "amount": 99.99
  },
  "extra": "额外信息"
}
```

## 消息属性

### 基础属性
- **objectName**：消息类型标识
- **content**：消息内容（JSON 格式）
- **extra**：额外信息（可选）

### 扩展属性
- **pushContent**：推送内容
- **pushData**：推送数据
- **isPersisted**：是否存储
- **isCounted**：是否计数
- **isIncludeSender**：是否包含发送者

## 消息限制

### 长度限制
- 文本消息：最大 4KB
- 图片消息：最大 10MB
- 语音消息：最大 60MB
- 视频消息：最大 100MB
- 文件消息：最大 100MB

### 格式限制
- 图片格式：JPG、PNG、GIF、BMP
- 音频格式：MP3、WAV、AAC、AMR
- 视频格式：MP4、AVI、MOV、WMV

## 最佳实践

1. **消息类型选择**：根据内容类型选择合适的消息类型
2. **内容优化**：合理控制消息内容大小，提升传输效率
3. **格式验证**：发送前验证消息格式的正确性
4. **错误处理**：对不支持的消息类型进行降级处理 
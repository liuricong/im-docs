# 消息格式

## 概述

融云 IM 消息采用统一的格式规范，包括消息类型、内容格式、扩展信息等。

## 消息结构

### 基础结构
```json
{
  "objectName": "RC:TxtMsg",
  "content": {
    "content": "Hello World"
  },
  "extra": "额外信息",
  "pushContent": "推送内容",
  "pushData": "推送数据"
}
```

### 字段说明

| 字段名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| objectName | String | 是 | 消息类型标识 |
| content | Object | 是 | 消息内容，JSON 格式 |
| extra | String | 否 | 额外信息，最大长度 1000 字节 |
| pushContent | String | 否 | 推送内容，最大长度 1000 字节 |
| pushData | String | 否 | 推送数据，最大长度 1000 字节 |

## 消息类型

### 文本消息 (RC:TxtMsg)
```json
{
  "objectName": "RC:TxtMsg",
  "content": {
    "content": "Hello World"
  }
}
```

### 图片消息 (RC:ImgMsg)
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

### 图文消息 (RC:ImgTextMsg)
```json
{
  "objectName": "RC:ImgTextMsg",
  "content": {
    "title": "标题",
    "content": "内容描述",
    "imageUri": "http://example.com/image.jpg",
    "url": "http://example.com/detail"
  }
}
```

### 自定义消息 (RC:CustomMsg)
```json
{
  "objectName": "RC:CustomMsg",
  "content": {
    "customType": "order",
    "customData": {
      "orderId": "12345",
      "status": "paid",
      "amount": 99.99
    }
  }
}
```

## 推送配置

### 推送内容
- **pushContent**：用于推送通知显示的内容
- **pushData**：用于推送通知携带的数据

### 推送示例
```json
{
  "objectName": "RC:TxtMsg",
  "content": {
    "content": "Hello World"
  },
  "pushContent": "您收到一条新消息",
  "pushData": "{\"type\":\"chat\",\"from\":\"user1\"}"
}
```

## 扩展信息

### extra 字段
- 用于携带额外的业务数据
- 不会在推送通知中显示
- 客户端可以解析使用

### 使用示例
```json
{
  "objectName": "RC:TxtMsg",
  "content": {
    "content": "Hello World"
  },
  "extra": "{\"businessType\":\"order\",\"orderId\":\"12345\"}"
}
```

## 消息限制

### 长度限制
- 文本消息：最大 4KB
- 图片消息：最大 10MB
- 语音消息：最大 60MB
- 视频消息：最大 100MB
- 文件消息：最大 100MB

### 格式限制
- 所有字段必须使用 UTF-8 编码
- JSON 格式必须正确
- 特殊字符需要转义

## 最佳实践

1. **消息类型选择**：根据内容类型选择合适的消息类型
2. **内容优化**：合理控制消息内容大小
3. **推送配置**：合理设置推送内容和数据
4. **扩展信息**：使用 extra 字段携带业务数据 
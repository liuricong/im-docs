# 接收服务端回调

## 概述

融云服务端回调是融云服务器向您的服务器推送事件通知的机制，用于实时获取用户状态、消息状态等信息。

## 回调类型

### 用户相关回调
- **用户上线**：用户连接成功
- **用户下线**：用户断开连接
- **用户状态变更**：用户在线状态变化

### 消息相关回调
- **消息发送成功**：消息已送达
- **消息发送失败**：消息发送失败
- **消息已读**：消息被用户读取

### 群组相关回调
- **群组创建**：新群组被创建
- **群组成员变更**：群组成员增加或减少
- **群组解散**：群组被解散

### 聊天室相关回调
- **聊天室创建**：新聊天室被创建
- **聊天室销毁**：聊天室被销毁
- **聊天室成员变更**：聊天室成员变化

## 配置回调

### 1. 设置回调地址
在融云控制台设置您的回调地址：
- 登录融云控制台
- 进入"应用管理"
- 选择目标应用
- 点击"服务端回调"
- 填写回调地址

### 2. 回调地址要求
- 必须是 HTTPS 协议
- 端口必须是 443
- 域名必须备案
- 支持 POST 请求

### 3. 回调验证
融云会向您的回调地址发送验证请求：
- 请求方法：POST
- 请求体：包含验证信息
- 响应要求：返回验证结果

## 回调格式

### 请求头
```
Content-Type: application/json
User-Agent: RongCloud-Callback/1.0
```

### 请求体示例
```json
{
  "type": "user_online",
  "timestamp": 1640995200000,
  "data": {
    "userId": "user123",
    "platform": "web"
  }
}
```

### 响应要求
- 状态码：200
- 响应体：`{"code": 200, "message": "success"}`

## 回调处理

### 1. 验证签名
```javascript
const crypto = require('crypto');

function verifySignature(data, signature, secret) {
  const hash = crypto.createHmac('sha256', secret)
    .update(JSON.stringify(data))
    .digest('hex');
  return hash === signature;
}
```

### 2. 处理回调
```javascript
app.post('/callback', (req, res) => {
  const { type, data } = req.body;
  
  switch (type) {
    case 'user_online':
      handleUserOnline(data);
      break;
    case 'user_offline':
      handleUserOffline(data);
      break;
    case 'message_sent':
      handleMessageSent(data);
      break;
    // 处理其他回调类型
  }
  
  res.json({ code: 200, message: 'success' });
});
```

## 重试机制

### 重试规则
- 失败后立即重试
- 最多重试 3 次
- 重试间隔递增：1s、3s、5s

### 重试条件
- 网络超时
- 服务器错误（5xx）
- 响应格式错误

## 安全建议

### 1. 验证来源
- 验证请求来源 IP
- 验证请求签名
- 验证时间戳

### 2. 防护措施
- 设置请求频率限制
- 记录异常请求日志
- 监控回调处理性能

### 3. 错误处理
- 优雅处理异常
- 记录错误日志
- 设置告警机制 
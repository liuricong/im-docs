# 聊天室概述

## 概述

聊天室是融云 IM 服务中的实时聊天功能，支持大规模用户同时在线聊天，适用于直播、游戏、在线教育等场景。

## 功能特性

### 基础功能
- **实时聊天**：支持大规模用户实时聊天
- **消息广播**：消息实时广播给所有在线用户
- **在线状态**：实时显示用户在线状态
- **消息历史**：支持消息历史记录查询

### 高级功能
- **消息审核**：支持消息内容审核和敏感词过滤
- **用户管理**：支持用户禁言、踢出等管理功能
- **消息统计**：支持消息发送量、在线人数等统计
- **自定义消息**：支持自定义消息类型和格式

## 使用场景

### 直播平台
- 直播间聊天
- 主播与观众互动
- 观众之间交流

### 游戏平台
- 游戏内聊天
- 公会聊天
- 世界聊天

### 在线教育
- 课堂互动
- 师生交流
- 同学讨论

### 社交平台
- 话题讨论
- 活动直播
- 群组聊天

## 技术架构

### 聊天室结构
- **聊天室ID**：唯一标识聊天室
- **聊天室名称**：聊天室显示名称
- **在线用户**：当前在线用户列表
- **消息队列**：消息存储和分发

### 消息系统
- **实时消息**：消息实时推送给在线用户
- **消息存储**：消息持久化存储
- **消息分发**：消息高效分发机制

### 用户管理
- **用户加入**：用户加入聊天室
- **用户退出**：用户主动退出聊天室
- **用户踢出**：管理员踢出违规用户
- **用户禁言**：管理员禁言违规用户

## 聊天室管理

### 创建聊天室
```javascript
// 创建聊天室
const chatroomInfo = {
  chatroomId: 'chatroom123',
  chatroomName: '测试聊天室',
  chatroomIntroduction: '这是一个测试聊天室',
  chatroomPortrait: 'http://example.com/chatroom.jpg',
  maxMemberCount: 10000
};

rongClient.createChatroom(chatroomInfo);
```

### 销毁聊天室
```javascript
// 销毁聊天室
rongClient.destroyChatroom({
  chatroomId: 'chatroom123'
});
```

### 查询聊天室信息
```javascript
// 查询聊天室信息
rongClient.getChatroomInfo({
  chatroomId: 'chatroom123'
});
```

## 用户管理

### 用户加入
```javascript
// 用户加入聊天室
rongClient.joinChatroom({
  chatroomId: 'chatroom123',
  userId: 'user123'
});
```

### 用户退出
```javascript
// 用户退出聊天室
rongClient.quitChatroom({
  chatroomId: 'chatroom123',
  userId: 'user123'
});
```

### 用户踢出
```javascript
// 踢出用户
rongClient.kickChatroomUser({
  chatroomId: 'chatroom123',
  userId: 'user123',
  duration: 3600 // 踢出时长（秒）
});
```

### 用户禁言
```javascript
// 禁言用户
rongClient.muteChatroomUser({
  chatroomId: 'chatroom123',
  userId: 'user123',
  duration: 3600 // 禁言时长（秒）
});
```

## 消息功能

### 发送消息
```javascript
// 发送聊天室消息
const message = {
  objectName: 'RC:TxtMsg',
  content: {
    content: 'Hello Chatroom'
  }
};

rongClient.sendChatroomMessage({
  chatroomId: 'chatroom123',
  message: message
});
```

### 接收消息
```javascript
// 监听聊天室消息
rongClient.on('chatroomMessage', function(message) {
  console.log('收到聊天室消息:', message);
  
  // 处理不同类型的消息
  switch(message.objectName) {
    case 'RC:TxtMsg':
      handleTextMessage(message);
      break;
    case 'RC:ImgMsg':
      handleImageMessage(message);
      break;
    default:
      handleCustomMessage(message);
  }
});
```

### 获取历史消息
```javascript
// 获取聊天室历史消息
rongClient.getChatroomHistoryMessages({
  chatroomId: 'chatroom123',
  count: 20,
  order: 1 // 1: 时间倒序, 2: 时间正序
});
```

## 在线状态

### 用户上线
```javascript
// 监听用户上线
rongClient.on('userOnline', function(userId) {
  console.log('用户上线:', userId);
  updateOnlineUserList(userId);
});
```

### 用户下线
```javascript
// 监听用户下线
rongClient.on('userOffline', function(userId) {
  console.log('用户下线:', userId);
  removeOnlineUser(userId);
});
```

### 在线用户列表
```javascript
// 获取在线用户列表
rongClient.getChatroomOnlineUsers({
  chatroomId: 'chatroom123',
  count: 100,
  order: 1
});
```

## 消息类型

### 文本消息
```json
{
  "objectName": "RC:TxtMsg",
  "content": {
    "content": "Hello World"
  }
}
```

### 图片消息
```json
{
  "objectName": "RC:ImgMsg",
  "content": {
    "imageUri": "http://example.com/image.jpg",
    "content": "图片描述"
  }
}
```

### 自定义消息
```json
{
  "objectName": "RC:CustomMsg",
  "content": {
    "customType": "gift",
    "customData": {
      "giftId": "gift123",
      "giftName": "玫瑰花",
      "giftCount": 1
    }
  }
}
```

## 性能优化

### 消息分发
- 消息分片处理
- 负载均衡分发
- 消息队列优化

### 用户管理
- 用户状态缓存
- 在线用户统计
- 用户权限验证

### 存储优化
- 消息分库分表
- 历史消息归档
- 数据压缩存储

## 最佳实践

### 1. 聊天室管理
- 合理设置聊天室规模
- 建立完善的管理制度
- 及时处理违规行为
- 定期清理无效聊天室

### 2. 消息管理
- 设置消息审核机制
- 控制消息发送频率
- 实现消息分类管理
- 保护用户隐私信息

### 3. 用户体验
- 提供清晰的使用指南
- 实现消息实时推送
- 优化消息显示效果
- 提升聊天室活跃度

### 4. 安全考虑
- 实现内容审核机制
- 保护用户隐私信息
- 防止恶意行为攻击
- 建立举报处理机制

## 相关接口

- [创建聊天室](/api/im/chatroom/create)
- [销毁聊天室](/api/im/chatroom/destroy)
- [查询聊天室信息](/api/im/chatroom/info)
- [查询聊天室成员](/api/im/chatroom/user/query) 
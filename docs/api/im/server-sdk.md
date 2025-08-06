# Server SDK

## 概述

融云提供多种编程语言的 Server SDK，帮助开发者快速集成融云 IM 服务。

## 支持的编程语言

### Java SDK
- **GitHub**: https://github.com/rongcloud/server-sdk-java
- **Maven**: `com.rongcloud:rongcloud-server-sdk`
- **版本**: 3.0.0+

### PHP SDK
- **GitHub**: https://github.com/rongcloud/server-sdk-php
- **Composer**: `rongcloud/server-sdk-php`
- **版本**: 2.0.0+

### Go SDK
- **GitHub**: https://github.com/rongcloud/server-sdk-go
- **版本**: 1.0.0+

### Node.js SDK
- **GitHub**: https://github.com/rongcloud/server-sdk-nodejs
- **NPM**: `rongcloud-server-sdk`
- **版本**: 3.0.0+

### Python SDK
- **GitHub**: https://github.com/rongcloud/server-sdk-python
- **PyPI**: `rongcloud-server-sdk`
- **版本**: 1.0.0+

## 快速开始

### Java SDK

#### 安装依赖
```xml
<dependency>
    <groupId>com.rongcloud</groupId>
    <artifactId>rongcloud-server-sdk</artifactId>
    <version>3.0.0</version>
</dependency>
```

#### 初始化
```java
import com.rongcloud.server.sdk.RongCloud;

RongCloud rongCloud = RongCloud.getInstance(appKey, appSecret);
```

#### 注册用户
```java
User user = new User();
user.setId("user1");
user.setName("张三");
user.setPortrait("http://example.com/avatar.jpg");

Result result = rongCloud.user.register(user);
```

#### 发送消息
```java
Message message = new Message();
message.setFromUserId("user1");
message.setToUserId("user2");
message.setObjectName("RC:TxtMsg");
message.setContent("{\"content\":\"Hello World\"}");

Result result = rongCloud.message.privateMsg.publish(message);
```

### PHP SDK

#### 安装依赖
```bash
composer require rongcloud/server-sdk-php
```

#### 初始化
```php
use RongCloud\RongCloud;

$rongCloud = new RongCloud($appKey, $appSecret);
```

#### 注册用户
```php
$user = [
    'id' => 'user1',
    'name' => '张三',
    'portrait' => 'http://example.com/avatar.jpg'
];

$result = $rongCloud->user()->register($user);
```

#### 发送消息
```php
$message = [
    'fromUserId' => 'user1',
    'toUserId' => 'user2',
    'objectName' => 'RC:TxtMsg',
    'content' => json_encode(['content' => 'Hello World'])
];

$result = $rongCloud->message()->private()->publish($message);
```

### Go SDK

#### 安装依赖
```bash
go get github.com/rongcloud/server-sdk-go
```

#### 初始化
```go
import "github.com/rongcloud/server-sdk-go/rongcloud"

client := rongcloud.NewRongCloud(appKey, appSecret)
```

#### 注册用户
```go
user := &rongcloud.User{
    ID:        "user1",
    Name:      "张三",
    Portrait:  "http://example.com/avatar.jpg",
}

result, err := client.User.Register(user)
```

#### 发送消息
```go
message := &rongcloud.Message{
    FromUserId: "user1",
    ToUserId:   "user2",
    ObjectName: "RC:TxtMsg",
    Content:    `{"content":"Hello World"}`,
}

result, err := client.Message.Private.Publish(message)
```

## 功能特性

### 用户管理
- 用户注册
- 用户信息更新
- 用户注销
- 用户查询

### 消息管理
- 发送单聊消息
- 发送群聊消息
- 发送聊天室消息
- 发送系统通知

### 群组管理
- 创建群组
- 加入群组
- 退出群组
- 解散群组
- 群组成员管理

### 聊天室管理
- 创建聊天室
- 销毁聊天室
- 聊天室成员管理

### 内容审核
- 文本审核
- 图片审核
- 视频审核

## 错误处理

### 错误码
```java
// Java
if (result.getCode() != 200) {
    System.out.println("错误码: " + result.getCode());
    System.out.println("错误信息: " + result.getErrorMessage());
}
```

```php
// PHP
if ($result['code'] != 200) {
    echo "错误码: " . $result['code'] . "\n";
    echo "错误信息: " . $result['errorMessage'] . "\n";
}
```

```go
// Go
if result.Code != 200 {
    fmt.Printf("错误码: %d\n", result.Code)
    fmt.Printf("错误信息: %s\n", result.ErrorMessage)
}
```

## 最佳实践

### 1. 异常处理
- 对所有 API 调用进行异常处理
- 记录详细的错误日志
- 实现重试机制

### 2. 性能优化
- 使用连接池
- 合理设置超时时间
- 避免频繁创建客户端实例

### 3. 安全考虑
- 妥善保管 AppKey 和 AppSecret
- 使用 HTTPS 协议
- 验证请求来源

### 4. 监控告警
- 监控 API 调用成功率
- 设置错误率告警
- 监控响应时间

## 示例项目

### Java 示例
- [Spring Boot 集成示例](https://github.com/rongcloud/server-sdk-java/tree/master/examples/spring-boot)
- [Web 应用示例](https://github.com/rongcloud/server-sdk-java/tree/master/examples/web)

### PHP 示例
- [Laravel 集成示例](https://github.com/rongcloud/server-sdk-php/tree/master/examples/laravel)
- [ThinkPHP 集成示例](https://github.com/rongcloud/server-sdk-php/tree/master/examples/thinkphp)

### Go 示例
- [Gin 集成示例](https://github.com/rongcloud/server-sdk-go/tree/master/examples/gin)
- [Echo 集成示例](https://github.com/rongcloud/server-sdk-go/tree/master/examples/echo) 
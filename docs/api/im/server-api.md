# 集成 Server API

欢迎使用融云服务端 API。本文档将引导您了解融云 Server API 的工作原理，并完成您的第一次 API 调用，帮助您快速将融云的即时通讯能力集成到您的应用中。

通过 Server API，您可以在您的应用服务端（App Server）实现丰富的业务功能，例如：

* **用户管理**：将您的用户接入融云 IM 服务(注册用户)，并设置用户信息。
* **消息发送**：发送单聊、群聊消息，或系统通知。
* **群组管理**：创建群组、管理群组，维护群组成员关系。
* **内容审核**：对消息内容进行审核，保证社区氛围。
* **状态订阅**：通过服务端回调，实时获取用户在线状态、消息收发状态等。

**部分服务管理类接口，以及高级扩展特性仅在 IM Server API 中提供**。关于 API 的完整功能，详见 [API 接口列表](/api/im/api-list)。

## 核心概念

为了更好地使用 Server API，我们建议您了解以下核心概念：

* **[API 请求签名](/api/im/signature)**：了解 Server API 的安全认证机制，确保您的请求能够被正确处理。
* **数据格式**：大部分接口使用 `application/x-www-form-urlencoded` 格式，少数特定接口使用 `application/json`。
* **[Server API 域名](/api/im/domains)**：了解融云提供的多数据中心域名，并为您的应用实现高可用部署。
* **[状态码](/api/im/status-codes)**：熟悉不同状态码的含义，以便在出现问题时快速定位。
* **[服务端回调](/api/im/callback)**：通过配置回调，您的服务器可以接收来自融云服务的实时事件通知，例如用户在线状态变更、聊天室房间状态变更等。

## 交互流程

::: warning 安全警告
您**必须**通过您的应用服务端调用所有 Server API 接口。**切勿**为了图方便而从客户端（App）直接调用 Server API，这会严重暴露您的 `App Secret`，带来极大的安全风险。
:::

下图清晰地展示了您的应用（App）、您的服务器（App Server）以及融云服务器（IM Server）之间的交互流程：

1. App 客户端向您的应用服务端发起业务请求（例如：请求登录IM）。
2. 您的应用服务端调用融云 Server API，为该用户获取一个 Token。
3. 您的应用服务端将获取到的 Token 返回给客户端。
4. 客户端使用此 Token 连接到融云的 IM 服务，进行实时通讯。

![App、App Server 与 IM Server 交互关系图](/images/interaction-flow.svg)

## 快速入门：调用第一个接口

下面，我们将以注册用户为例，指导您完成一次完整的 Server API 调用。

### 第 1 步：准备工作

在开始前，请确保：

* 您已经在融云控制台创建了应用，并获取了有效的 **App Key** 和 **App Secret**。这两个凭证将用于 API 请求的签名认证。
* 您已准备好一个测试客户端，用于后续使用生成的 Token 建立 IM 连接。
* 推荐您提前了解 IM Server API 的默认行为与配置，以使整体接入体验更为顺畅。

### 第 2 步：构建并发送请求

Server API 的调用过程主要分为三步：准备参数、生成签名、发送请求。

#### 1. 准备请求参数

调用注册用户接口需要以下业务参数：`userId`、`name` 和 `portraitUri`。

同时，所有 Server API 请求都需要在 HTTP Header 中包含以下认证参数：

* **App-Key**：您的应用 App Key。
* **Nonce**：随机数，每次请求应不同，长度不超过 18 个字符。
* **Timestamp**：时间戳，从 1970 年 1 月 1 日 0 点 0 分 0 秒开始到现在的**毫秒**数。

#### 2. 生成签名

签名是 Server API 的核心安全机制。所有请求都必须经过签名认证。 签名 `Signature` 是通过 SHA1 哈希算法计算得出，计算源字符串由 `App Secret`、`Nonce` 和 `Timestamp` 三者拼接而成。

关于签名的详细生成方法，详见 [API 请求签名](/api/im/signature)。

#### 3. 发送 HTTP 请求

准备好所有参数后，就可以发送 HTTP 请求了。所有请求**必须**使用 HTTPS 协议，且当前版本的 IM Server API 接口均为 `POST` 请求。

以下是一个调用 `user/getToken.json` 接口的完整 HTTP 请求示例：

```http
POST /user/getToken.json HTTP/1.1
Host: api.rong-api.com
App-Key: your-own-app-key
Nonce: 14314
Timestamp: 1408710653000
Signature: 30be0bbca9c9b2e27578701e9fda2358a814c88f
Content-Type: application/x-www-form-urlencoded
Content-Length: 78

userId=jlk456j5&name=Ironman&portraitUri=http%3A%2F%2Fabc.com%2Fmyportrait.jpg
```

::: tip 备注
Server API 的域名 `Host` 在不同区域有多个可用地址。为了保证服务的高可用，建议您实现域名的自动切换机制。详见 [Server API 域名](/api/im/domains)。
:::

### 第 3 步：处理响应

请求成功后，融云服务端会返回 `application/json` 格式的响应数据。

一个成功的 `getToken` 响应示例如下：

```json
{
    "code": 200,
    "userId": "jlk456j5",
    "token": "sfd9823ihufi"
}
```

* **`code`**：HTTP 状态码。`200` 表示请求成功。关于所有状态码的详细信息，请参阅 [状态码列表](/api/im/status-codes)。
* **结果数据**：响应正文中会包含您请求的数据。对于某些操作，响应正文可能为空。

## 数据格式

IM Server API 接口一般使用 `application/x-www-form-urlencoded` 格式发送数据。

请注意，以下接口使用 `application/json` 格式发送数据：

* **发送单聊模板消息**：`/message/private/publish_template.json`
* **发送单个用户系统通知模板消息**：`/message/system/publish_template.json`
* **发送超级群消息**：`/message/ultragroup/publish.json`
* **为单个用户设置标签**：`/user/tag/set.json`
* **为多个用户设置标签**：`/user/tag/batch/set.json`
* **不落地通知**：`/push.json`
* **单个用户不落地通知**：`/push/user.json`
* **推送 Plus**：`/push/custom.json`
* **单聊流式消息**：`/v3/message/private/publish_stream.json`
* **群聊流式消息**：`/v3/message/group/publish_stream.json`
* **服务端获取流内容**：`/v3/message/get_stream.json`

## 下一步

恭喜您！您已经了解了 Server API 的基本调用流程。现在，您可以：

* 浏览 [API 接口列表](/api/im/api-list)，了解全部功能。
* 前往融云控制台，开始您的应用开发。

---

**最后更新于 2025年8月4日** 
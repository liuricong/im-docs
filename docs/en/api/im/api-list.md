# API 接口列表

本文档列出了即时通讯（IM）服务端提供的 API 接口、调试工具、及注意事项。

::: tip 提示
* IM Server API 全部接口均使用 **POST** 请求方式。
* 如果您首次接入 IM Server API，强烈推荐先了解 [API 调用方法](/api/im/server-api)。
:::

## API 默认行为与配置

集成 IM Server API 需要注意以下默认行为：

1. 应用服务端可调用 IM Server API 直接发送消息。如果以用户身份向群组、聊天室发送消息，不要求已加入群组或聊天室。
2. 应用服务端调用 IM Server API 的行为不会在北极星的连接信息中生成记录。但通过 Server API 发送的消息均可通过北极星的消息流转查询。
3. 如果应用配置了敏感词过滤、消息回调服务、第三方审核，请注意调用 Server API 发送的消息默认不进行过滤。如有需要，您需要在控制台免费基础功能页面启用 **Server API 发送消息过滤敏感词**。
4. 如果应用启用了全量消息路由，请注意调用 Server API 发送的消息默认不进行路由。如有需要，您需要在控制台免费基础功能页面启用 **Server API 发送消息实时路由**。
5. Server API 的部分接口为即时通讯的高级、扩展特性或付费增值提供的接口。需要为开通服务后才能使用。您可以在控制台的免费基础功能页面与 IM 服务管理页面找到大部分服务配置开关，也可以在阅读相关 API 接口文档时找到具体细节。

## API 调试工具

::: tip 提示
本文档已列出了 API 接口在控制台「北极星」调试地址（需登录开发者账号）。

* 控制台「北极星」开发者工具箱的 IM Server API 调试 页面提供了大部分 API 接口的调试功能。请注意区分**开发环境**与**生产环境**。
:::

## 用户管理

::: tip 提示
IM Server API 的主要功能之一是注册用户 。您需要使用 App 的用户 ID 换取 Token，App 用户才能接入即时通讯服务。
:::

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [注册用户](/api/im/user/register) | /user/getToken.json | 200 次/每秒，可调频 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F1) |
| [作废 Token](/api/im/user/expire) | /user/token/expire.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F237) |
| [获取用户信息](/api/im/user/get) | /user/info.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F37) |
| [修改用户信息](/api/im/user/modify) | /user/refresh.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F2) |
| [注销用户](/api/im/user/deactivation/deactivate) | /user/deactivate.json | 100 用户/每秒 | 暂不支持 |
| [查询已注销用户](/api/im/user/deactivation/query-deactivated-list) | /user/deactivate/query.json | 100 次/每秒 | 暂不支持 |
| [重新激活用户 ID](/api/im/user/deactivation/reactivate) | /user/reactivate.json | 100 用户/每秒 | 暂不支持 |

## 用户黑/白名单服务

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [添加用户到黑名单](/api/im/user/blacklist/add) | /user/blacklist/add.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F3) |
| [从黑名单移除用户](/api/im/user/blacklist/remove) | /user/blacklist/remove.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F4) |
| [查询用户黑名单列表](/api/im/user/blacklist/query) | /user/blacklist/query.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F5) |
| [添加用户到白名单](/api/im/user/whitelist/add) | /user/whitelist/add.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F6) |
| [从白名单移除用户](/api/im/user/whitelist/remove) | /user/whitelist/remove.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F7) |
| [查询用户白名单列表](/api/im/user/whitelist/query) | /user/whitelist/query.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#0%5F8) |

## 消息管理

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [发送单聊消息](/api/im/message/private/send) | /message/private/publish.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F9) |
| [发送群聊消息](/api/im/message/group/send) | /message/group/publish.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F10) |
| [发送聊天室消息](/api/im/message/chatroom/send) | /message/chatroom/publish.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F11) |
| [发送系统通知](/api/im/message/system/send) | /message/system/publish.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F12) |
| [发送单聊模板消息](/api/im/message/private/template) | /message/private/publish_template.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F13) |
| [发送群聊模板消息](/api/im/message/group/template) | /message/group/publish_template.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F14) |
| [发送系统通知模板消息](/api/im/message/system/template) | /message/system/publish_template.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F15) |

## 会话管理

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [设置指定会话免打扰](/api/im/conversation/notification/set) | /conversation/notification/set.json | 100 次/每秒，可调频 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F62) |
| [查询指定会话免打扰](/api/im/conversation/notification/get) | /conversation/notification/get.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F63) |
| [设置指定会话类型免打扰](/api/im/conversation/type/notification/set) | /conversation/type/notification/set.json | 100 次/每秒 | 暂不支持 |
| [查询指定会话类型免打扰](/api/im/conversation/type/notification/get) | /conversation/type/notification/get.json | 100 次/每秒 | 暂不支持 |

## 系统通知

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [发送系统通知](/api/im/system/send) | /message/system/publish.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F12) |
| [发送系统通知模板消息](/api/im/system/template) | /message/system/publish_template.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#1%5F15) |

## 群组管理

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [创建群组](/api/im/group/create) | /group/create.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F16) |
| [加入群组](/api/im/group/join) | /group/join.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F17) |
| [退出群组](/api/im/group/quit) | /group/quit.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F18) |
| [解散群组](/api/im/group/dismiss) | /group/dismiss.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F19) |
| [查询群组信息](/api/im/group/info) | /group/info.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F20) |
| [修改群组信息](/api/im/group/refresh) | /group/refresh.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F21) |
| [查询群组成员](/api/im/group/user/query) | /group/user/query.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F22) |
| [添加群组成员](/api/im/group/user/add) | /group/user/add.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F23) |
| [移除群组成员](/api/im/group/user/remove) | /group/user/remove.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F24) |

## 群组禁言服务

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [设置群组禁言](/api/im/group/mute/set) | /group/mute/set.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F25) |
| [取消群组禁言](/api/im/group/mute/cancel) | /group/mute/cancel.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F26) |
| [查询群组禁言状态](/api/im/group/mute/query) | /group/mute/query.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#2%5F27) |

## 超级群管理

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [创建超级群](/api/im/ultragroup/create) | /ultragroup/create.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#3%5F28) |
| [加入超级群](/api/im/ultragroup/join) | /ultragroup/join.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#3%5F29) |
| [退出超级群](/api/im/ultragroup/quit) | /ultragroup/quit.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#3%5F30) |
| [解散超级群](/api/im/ultragroup/dismiss) | /ultragroup/dismiss.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#3%5F31) |
| [查询超级群信息](/api/im/ultragroup/info) | /ultragroup/info.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#3%5F32) |
| [修改超级群信息](/api/im/ultragroup/refresh) | /ultragroup/refresh.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#3%5F33) |

## 聊天室管理

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [创建聊天室](/api/im/chatroom/create) | /chatroom/create.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#4%5F34) |
| [销毁聊天室](/api/im/chatroom/destroy) | /chatroom/destroy.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#4%5F35) |
| [查询聊天室信息](/api/im/chatroom/info) | /chatroom/info.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#4%5F36) |
| [查询聊天室用户](/api/im/chatroom/user/query) | /chatroom/user/query.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#4%5F37) |

## 内容审核

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [文本审核](/api/im/content/text/audit) | /content/text/audit.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#5%5F38) |
| [图片审核](/api/im/content/image/audit) | /content/image/audit.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#5%5F39) |
| [视频审核](/api/im/content/video/audit) | /content/video/audit.json | 100 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#5%5F40) |

## 推送与通知管理

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [推送 Plus](/api/im/push/push-plus) | /push/custom.json | 20 次/每小时，100 次/每自然日，可调频 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#7%5F130) |
| [推送聚合统计](/api/im/push/push-plus#getdaypushdata) | /stat/getDayPushData | 1 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#7%5F131) |
| [单次推送统计](/api/im/push/push-plus#getpushiddata) | /stat/getPushIdData | 1 次/每秒 | [API 调试](https://console.rongcloud.cn/agile/formwork/imServerApi/index#7%5F132) |

## 翻译服务

| 功能/文档页面 | API URL | 频率限制 | 北极星 API 调试地址 |
|---------------|---------|----------|-------------------|
| [获取 JWT Token](/api/im/translation/get-jwt-token) | /jwt/getToken.json | 100 次/每秒 | 暂不支持 |

---

**最后更新于 2025年8月4日** 
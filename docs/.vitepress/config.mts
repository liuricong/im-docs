import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RongCloud',
  description: 'IM文档中心',
  lang: 'zh-CN',
  
  // GitHub Pages 配置
  base: '/im-docs/',
  
  // 开发服务器配置
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5173
    }
  },

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'RongCloud',

    nav: [
      { text: '产品概述', link: '/overview' },
      {
        text: '即时通讯 SDK',
        items: [
          {
            text: 'Mobile', items: [
              { text: 'Android', link: '/im/android' },
              { text: 'iOS', link: '/im/ios' },
              { text: 'HarmonyOS', link: '/im/harmonyos' },
              { text: 'uni-app', link: '/im/uniapp' },
              { text: 'Flutter', link: '/im/flutter' },
              { text: 'Unity', link: '/im/unity' },
              { text: 'React Native', link: '/im/react-native' }
            ]
          },
          {
            text: 'Web', items: [
              { text: 'Web', link: '/im/web' },
              { text: '小程序', link: '/im/miniprogram' }
            ]
          }
        ]
      },
      {
        text: '服务端 API',
        items: [
          {
            text: '即时通讯', items: [
              { text: 'Server API', link: '/api/im/server-api' },
              { text: '服务端回调', link: '/api/im/callback' },
              {
                text: 'Server SDK', items: [
                  { text: 'Java', link: '/api/im/sdk/java' },
                  { text: 'PHP', link: '/api/im/sdk/php' },
                  { text: 'Go', link: '/api/im/sdk/go' }
                ]
              }
            ]
          },
          {
            text: '音视频', items: [
              { text: 'Server API', link: '/api/rtc/server-api' },
              { text: '服务端回调', link: '/api/rtc/callback' }
            ]
          }
        ]
      },

      {
        text: '资源 & 工具',
        items: [
          { text: '查询消息流转', link: '/resources/message-flow' },
          { text: '我的工单', link: '/resources/tickets' },
          { text: '定价与计费', link: '/resources/pricing' },
          { text: 'Demo', link: '/resources/demo' },
          { text: 'SDK 下载', link: '/resources/downloads' }
        ]
      }
    ],

    sidebar: {
      '/api/im/': [
        { text: '集成 Server API', link: '/api/im/server-api' },
        { text: '计费细则', link: '/api/im/billing' },
        { text: '出海指南', link: '/api/im/global' },
        { text: '调整频率限制', link: '/api/im/rate-limit' },
        { text: 'API 接口列表', link: '/api/im/api-list' },
        { text: 'API 域名', link: '/api/im/domains' },
        { text: 'API 请求签名', link: '/api/im/signature' },
        { text: '接收服务端回调', link: '/api/im/callback' },
        {
          text: '用户管理',
          collapsed: true,
          items: [
            { text: '注册用户', link: '/api/im/user/register' },
            { text: '作废 Token', link: '/api/im/user/expire' },
            { text: '获取用户信息', link: '/api/im/user/get' },
            { text: '修改用户信息', link: '/api/im/user/modify' },
            { text: '注销用户', link: '/api/im/user/deactivation/deactivate' },
            { text: '查询已注销用户', link: '/api/im/user/deactivation/query-deactivated-list' },
            { text: '重新激活用户 ID', link: '/api/im/user/deactivation/reactivate' }
          ]
        },

        {
          text: '用户黑/白名单服务',
          collapsed: true,
          items: [
            { text: '添加用户到黑名单', link: '/api/im/user/blacklist/add' },
            { text: '从黑名单移除用户', link: '/api/im/user/blacklist/remove' },
            { text: '查询用户黑名单列表', link: '/api/im/user/blacklist/query' },
            { text: '添加用户到白名单', link: '/api/im/user/whitelist/add' },
            { text: '从白名单移除用户', link: '/api/im/user/whitelist/remove' },
            { text: '查询用户白名单列表', link: '/api/im/user/whitelist/query' }
          ]
        },
        {
          text: '消息管理',
          collapsed: true,
          items: [
            { text: '发送单聊消息', link: '/api/im/message/private/send' },
            { text: '发送群聊消息', link: '/api/im/message/group/send' },
            { text: '发送聊天室消息', link: '/api/im/message/chatroom/send' },
            { text: '发送系统通知', link: '/api/im/message/system/send' },
            { text: '发送单聊模板消息', link: '/api/im/message/private/template' },
            { text: '发送群聊模板消息', link: '/api/im/message/group/template' },
            { text: '发送系统通知模板消息', link: '/api/im/message/system/template' }
          ]
        },
        {
          text: '会话管理',
          collapsed: true,
          items: [
            { text: '设置指定会话免打扰', link: '/api/im/conversation/notification/set' },
            { text: '查询指定会话免打扰', link: '/api/im/conversation/notification/get' },
            { text: '设置指定会话类型免打扰', link: '/api/im/conversation/type/notification/set' },
            { text: '查询指定会话类型免打扰', link: '/api/im/conversation/type/notification/get' }
          ]
        },
        {
          text: '系统通知',
          collapsed: true,
          items: [
            { text: '发送系统通知', link: '/api/im/system/send' },
            { text: '发送系统通知模板消息', link: '/api/im/system/template' }
          ]
        },
        {
          text: '群组管理',
          collapsed: true,
          items: [
            { text: '创建群组', link: '/api/im/group/create' },
            { text: '加入群组', link: '/api/im/group/join' },
            { text: '退出群组', link: '/api/im/group/quit' },
            { text: '解散群组', link: '/api/im/group/dismiss' },
            { text: '查询群组信息', link: '/api/im/group/info' },
            { text: '修改群组信息', link: '/api/im/group/refresh' },
            { text: '查询群组成员', link: '/api/im/group/user/query' },
            { text: '添加群组成员', link: '/api/im/group/user/add' },
            { text: '移除群组成员', link: '/api/im/group/user/remove' }
          ]
        },
        {
          text: '群组禁言服务',
          collapsed: true,
          items: [
            { text: '设置群组禁言', link: '/api/im/group/mute/set' },
            { text: '取消群组禁言', link: '/api/im/group/mute/cancel' },
            { text: '查询群组禁言状态', link: '/api/im/group/mute/query' }
          ]
        },
        {
          text: '超级群管理',
          collapsed: true,
          items: [
            { text: '创建超级群', link: '/api/im/ultragroup/create' },
            { text: '加入超级群', link: '/api/im/ultragroup/join' },
            { text: '退出超级群', link: '/api/im/ultragroup/quit' },
            { text: '解散超级群', link: '/api/im/ultragroup/dismiss' },
            { text: '查询超级群信息', link: '/api/im/ultragroup/info' },
            { text: '修改超级群信息', link: '/api/im/ultragroup/refresh' }
          ]
        },
        {
          text: '聊天室管理',
          collapsed: true,
          items: [
            { text: '创建聊天室', link: '/api/im/chatroom/create' },
            { text: '销毁聊天室', link: '/api/im/chatroom/destroy' },
            { text: '查询聊天室信息', link: '/api/im/chatroom/info' },
            { text: '查询聊天室用户', link: '/api/im/chatroom/user/query' }
          ]
        },
        {
          text: '内容审核',
          collapsed: true,
          items: [
            { text: '文本审核', link: '/api/im/content/text/audit' },
            { text: '图片审核', link: '/api/im/content/image/audit' },
            { text: '视频审核', link: '/api/im/content/video/audit' }
          ]
        },
        {
          text: '推送与通知管理',
          collapsed: true,
          items: [
            { text: '推送 Plus', link: '/api/im/push/push-plus' },
            { text: '推送聚合统计', link: '/api/im/push/push-plus#getdaypushdata' },
            { text: '单次推送统计', link: '/api/im/push/push-plus#getpushiddata' }
          ]
        },
        {
          text: '翻译服务',
          collapsed: true,
          items: [
            { text: '获取 JWT Token', link: '/api/im/translation/get-jwt-token' }
          ]
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            { text: '消息类型概述', link: '/api/im/message-types' },
            { text: 'AI 机器人', link: '/api/im/ai-bot' },
            { text: '单聊管理', link: '/api/im/private-chat' },
            { text: '群组业务', link: '/api/im/group' },
            { text: '超级群管理', link: '/api/im/ultra-group' },
            { text: '聊天室管理', link: '/api/im/chatroom' },
            { text: '内容审核', link: '/api/im/content-moderation' },
            { text: '文本翻译', link: '/api/im/translation' },
            { text: '最佳实践', link: '/api/im/best-practices' },
            { text: '翻译服务', link: '/api/im/translation-service' },
            { text: '状态码', link: '/api/im/status-codes' },
            { text: 'Server SDK', link: '/api/im/server-sdk' }
          ]
        }
      ],
      '/en/api/im/': [
        { text: 'Server API Integration', link: '/en/api/im/server-api' },
        { text: 'Billing Details', link: '/en/api/im/billing' },
        { text: 'Global Guide', link: '/en/api/im/global' },
        { text: 'Rate Limit Adjustment', link: '/en/api/im/rate-limit' },
        { text: 'API List', link: '/en/api/im/api-list' },
        { text: 'API Domains', link: '/en/api/im/domains' },
        { text: 'API Request Signature', link: '/en/api/im/signature' },
        { text: 'Server Callback', link: '/en/api/im/callback' },
        {
          text: 'User Management',
          collapsed: true,
          items: [
            { text: 'Register User', link: '/en/api/im/user/register' },
            { text: 'Expire Token', link: '/en/api/im/user/expire' },
            { text: 'Get User Info', link: '/en/api/im/user/get' },
            { text: 'Modify User Info', link: '/en/api/im/user/modify' },
            { text: 'Deactivate User', link: '/en/api/im/user/deactivation/deactivate' },
            { text: 'Query Deactivated Users', link: '/en/api/im/user/deactivation/query-deactivated-list' },
            { text: 'Reactivate User ID', link: '/en/api/im/user/deactivation/reactivate' }
          ]
        },
        {
          text: 'User Black/White List Service',
          collapsed: true,
          items: [
            { text: 'Add User to Blacklist', link: '/en/api/im/user/blacklist/add' },
            { text: 'Remove User from Blacklist', link: '/en/api/im/user/blacklist/remove' },
            { text: 'Query User Blacklist', link: '/en/api/im/user/blacklist/query' },
            { text: 'Add User to Whitelist', link: '/en/api/im/user/whitelist/add' },
            { text: 'Remove User from Whitelist', link: '/en/api/im/user/whitelist/remove' },
            { text: 'Query User Whitelist', link: '/en/api/im/user/whitelist/query' }
          ]
        },
        {
          text: 'Message Management',
          collapsed: true,
          items: [
            { text: 'Send Private Message', link: '/en/api/im/message/private/send' },
            { text: 'Send Group Message', link: '/en/api/im/message/group/send' },
            { text: 'Send Chatroom Message', link: '/en/api/im/message/chatroom/send' },
            { text: 'Send System Notification', link: '/en/api/im/message/system/send' },
            { text: 'Send Private Template Message', link: '/en/api/im/message/private/template' },
            { text: 'Send Group Template Message', link: '/en/api/im/message/group/template' },
            { text: 'Send System Template Message', link: '/en/api/im/message/system/template' }
          ]
        },
        {
          text: 'Conversation Management',
          collapsed: true,
          items: [
            { text: 'Set Conversation DND', link: '/en/api/im/conversation/notification/set' },
            { text: 'Query Conversation DND', link: '/en/api/im/conversation/notification/get' },
            { text: 'Set Conversation Type DND', link: '/en/api/im/conversation/type/notification/set' },
            { text: 'Query Conversation Type DND', link: '/en/api/im/conversation/type/notification/get' }
          ]
        },
        {
          text: 'System Notifications',
          collapsed: true,
          items: [
            { text: 'Send System Notification', link: '/en/api/im/system/send' },
            { text: 'Send System Template Message', link: '/en/api/im/system/template' }
          ]
        },
        {
          text: 'Group Management',
          collapsed: true,
          items: [
            { text: 'Create Group', link: '/en/api/im/group/create' },
            { text: 'Join Group', link: '/en/api/im/group/join' },
            { text: 'Quit Group', link: '/en/api/im/group/quit' },
            { text: 'Dismiss Group', link: '/en/api/im/group/dismiss' },
            { text: 'Query Group Info', link: '/en/api/im/group/info' },
            { text: 'Modify Group Info', link: '/en/api/im/group/refresh' },
            { text: 'Query Group Members', link: '/en/api/im/group/user/query' },
            { text: 'Add Group Members', link: '/en/api/im/group/user/add' },
            { text: 'Remove Group Members', link: '/en/api/im/group/user/remove' }
          ]
        },
        {
          text: 'Group Mute Service',
          collapsed: true,
          items: [
            { text: 'Set Group Mute', link: '/en/api/im/group/mute/set' },
            { text: 'Cancel Group Mute', link: '/en/api/im/group/mute/cancel' },
            { text: 'Query Group Mute Status', link: '/en/api/im/group/mute/query' }
          ]
        },
        {
          text: 'Ultra Group Management',
          collapsed: true,
          items: [
            { text: 'Create Ultra Group', link: '/en/api/im/ultragroup/create' },
            { text: 'Join Ultra Group', link: '/en/api/im/ultragroup/join' },
            { text: 'Quit Ultra Group', link: '/en/api/im/ultragroup/quit' },
            { text: 'Dismiss Ultra Group', link: '/en/api/im/ultragroup/dismiss' },
            { text: 'Query Ultra Group Info', link: '/en/api/im/ultragroup/info' },
            { text: 'Modify Ultra Group Info', link: '/en/api/im/ultragroup/refresh' }
          ]
        },
        {
          text: 'Chatroom Management',
          collapsed: true,
          items: [
            { text: 'Create Chatroom', link: '/en/api/im/chatroom/create' },
            { text: 'Destroy Chatroom', link: '/en/api/im/chatroom/destroy' },
            { text: 'Query Chatroom Info', link: '/en/api/im/chatroom/info' },
            { text: 'Query Chatroom Users', link: '/en/api/im/chatroom/user/query' }
          ]
        },
        {
          text: 'Content Moderation',
          collapsed: true,
          items: [
            { text: 'Text Audit', link: '/en/api/im/content/text/audit' },
            { text: 'Image Audit', link: '/en/api/im/content/image/audit' },
            { text: 'Video Audit', link: '/en/api/im/content/video/audit' }
          ]
        },
        {
          text: 'Push & Notification Management',
          collapsed: true,
          items: [
            { text: 'Push Plus', link: '/en/api/im/push/push-plus' },
            { text: 'Push Aggregation Statistics', link: '/en/api/im/push/push-plus#getdaypushdata' },
            { text: 'Single Push Statistics', link: '/en/api/im/push/push-plus#getpushiddata' }
          ]
        },
        {
          text: 'Translation Service',
          collapsed: true,
          items: [
            { text: 'Get JWT Token', link: '/en/api/im/translation/get-jwt-token' }
          ]
        },
        {
          text: 'Others',
          collapsed: true,
          items: [
            { text: 'Message Types Overview', link: '/en/api/im/message-types' },
            { text: 'AI Bot', link: '/en/api/im/ai-bot' },
            { text: 'Private Chat Management', link: '/en/api/im/private-chat' },
            { text: 'Group Business', link: '/en/api/im/group' },
            { text: 'Ultra Group Management', link: '/en/api/im/ultra-group' },
            { text: 'Chatroom Management', link: '/en/api/im/chatroom' },
            { text: 'Content Moderation', link: '/en/api/im/content-moderation' },
            { text: 'Text Translation', link: '/en/api/im/translation' },
            { text: 'Best Practices', link: '/en/api/im/best-practices' },
            { text: 'Translation Service', link: '/en/api/im/translation-service' },
            { text: 'Status Codes', link: '/en/api/im/status-codes' },
            { text: 'Server SDK', link: '/en/api/im/server-sdk' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rongcloud' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 RongCloud Inc.'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1890ff' }]
  ],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'material-theme-palenight'
    },
    lineNumbers: true
  }
})

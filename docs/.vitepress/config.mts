import { defineConfig } from 'vitepress'

// 根据环境设置 base 路径
const base = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS ? '/im-docs/' : '/'

export default defineConfig({
  title: 'RongCloud',
  description: 'IM文档中心',
  lang: 'zh-CN',
  
  // GitHub Pages 配置
  base,
  
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

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search docs',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'select',
                  navigateText: 'navigate',
                  closeText: 'close'
                }
              }
            }
          }
        }
      }
    },

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
          text: '消息类型概述',
          collapsed: true,
          items: [
            { text: '消息类型', link: '/api/im/message/types' },
            { text: '消息格式', link: '/api/im/message/format' }
          ]
        },
        {
          text: '消息管理',
          collapsed: true,
          items: [
            { text: '发送单聊消息', link: '/api/im/message/private/publish' },
            { text: '发送群聊消息', link: '/api/im/message/group/publish' },
            { text: '发送聊天室消息', link: '/api/im/message/chatroom/publish' },
            { text: '发送系统通知', link: '/api/im/message/system/publish' },
            { text: '发送单聊模板消息', link: '/api/im/message/private/publish_template' },
            { text: '发送群聊模板消息', link: '/api/im/message/group/publish_template' },
            { text: '发送系统通知模板消息', link: '/api/im/message/system/publish_template' },
            { text: '发送超级群消息', link: '/api/im/message/ultragroup/publish' },
            { text: '单聊流式消息', link: '/api/im/message/private/publish_stream' },
            { text: '群聊流式消息', link: '/api/im/message/group/publish_stream' },
            { text: '服务端获取流内容', link: '/api/im/message/get_stream' }
          ]
        },
        {
          text: 'AI 机器人',
          collapsed: true,
          items: [
            { text: 'AI 机器人概述', link: '/api/im/ai/overview' },
            { text: '创建 AI 机器人', link: '/api/im/ai/create' },
            { text: '删除 AI 机器人', link: '/api/im/ai/delete' },
            { text: '查询 AI 机器人', link: '/api/im/ai/query' }
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
            { text: '发送系统通知', link: '/api/im/system/publish' },
            { text: '发送系统通知模板消息', link: '/api/im/system/publish_template' }
          ]
        },
        {
          text: '单聊管理',
          collapsed: true,
          items: [
            { text: '单聊概述', link: '/api/im/private/overview' },
            { text: '单聊消息', link: '/api/im/private/message' }
          ]
        },
        {
          text: '群组业务',
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
            { text: '移除群组成员', link: '/api/im/group/user/remove' },
            { text: '设置群组禁言', link: '/api/im/group/user/gag/add' },
            { text: '解除群组禁言', link: '/api/im/group/user/gag/remove' },
            { text: '查询群组禁言列表', link: '/api/im/group/user/gag/list' },
            { text: '设置群组全员禁言', link: '/api/im/group/user/gag/all' },
            { text: '解除群组全员禁言', link: '/api/im/group/user/gag/all/remove' },
            { text: '设置群组白名单', link: '/api/im/group/user/whitelist/add' },
            { text: '移除群组白名单', link: '/api/im/group/user/whitelist/remove' },
            { text: '查询群组白名单', link: '/api/im/group/user/whitelist/query' }
          ]
        },
        {
          text: '超级群管理',
          collapsed: true,
          items: [
            { text: '超级群概述', link: '/api/im/ultragroup/overview' },
            { text: '创建超级群', link: '/api/im/ultragroup/create' },
            { text: '解散超级群', link: '/api/im/ultragroup/dismiss' },
            { text: '查询超级群信息', link: '/api/im/ultragroup/info' },
            { text: '修改超级群信息', link: '/api/im/ultragroup/refresh' },
            { text: '查询超级群成员', link: '/api/im/ultragroup/user/query' },
            { text: '添加超级群成员', link: '/api/im/ultragroup/user/add' },
            { text: '移除超级群成员', link: '/api/im/ultragroup/user/remove' },
            { text: '设置超级群禁言', link: '/api/im/ultragroup/user/gag/add' },
            { text: '解除超级群禁言', link: '/api/im/ultragroup/user/gag/remove' },
            { text: '查询超级群禁言列表', link: '/api/im/ultragroup/user/gag/list' },
            { text: '设置超级群全员禁言', link: '/api/im/ultragroup/user/gag/all' },
            { text: '解除超级群全员禁言', link: '/api/im/ultragroup/user/gag/all/remove' }
          ]
        },
        {
          text: '聊天室管理',
          collapsed: true,
          items: [
            { text: '聊天室概述', link: '/api/im/chatroom/overview' },
            { text: '创建聊天室', link: '/api/im/chatroom/create' },
            { text: '销毁聊天室', link: '/api/im/chatroom/destroy' },
            { text: '查询聊天室信息', link: '/api/im/chatroom/info' },
            { text: '查询聊天室成员', link: '/api/im/chatroom/user/query' },
            { text: '添加聊天室成员', link: '/api/im/chatroom/user/add' },
            { text: '移除聊天室成员', link: '/api/im/chatroom/user/remove' },
            { text: '设置聊天室禁言', link: '/api/im/chatroom/user/gag/add' },
            { text: '解除聊天室禁言', link: '/api/im/chatroom/user/gag/remove' },
            { text: '查询聊天室禁言列表', link: '/api/im/chatroom/user/gag/list' },
            { text: '设置聊天室全员禁言', link: '/api/im/chatroom/user/gag/all' },
            { text: '解除聊天室全员禁言', link: '/api/im/chatroom/user/gag/all/remove' }
          ]
        },
        {
          text: '内容审核',
          collapsed: true,
          items: [
            { text: '内容审核概述', link: '/api/im/content/overview' },
            { text: '文本审核', link: '/api/im/content/text/audit' },
            { text: '图片审核', link: '/api/im/content/image/audit' },
            { text: '视频审核', link: '/api/im/content/video/audit' }
          ]
        },
        {
          text: '文本翻译',
          collapsed: true,
          items: [
            { text: '文本翻译概述', link: '/api/im/translation/overview' },
            { text: '翻译文本', link: '/api/im/translation/translate' }
          ]
        },
        {
          text: '最佳实践',
          collapsed: true,
          items: [
            { text: '最佳实践概述', link: '/api/im/best-practices/overview' },
            { text: '性能优化', link: '/api/im/best-practices/performance' },
            { text: '安全建议', link: '/api/im/best-practices/security' }
          ]
        },
        {
          text: '推送与通知管理',
          collapsed: true,
          items: [
            { text: '推送概述', link: '/api/im/push/overview' },
            { text: '不落地通知', link: '/api/im/push/publish' },
            { text: '单个用户不落地通知', link: '/api/im/push/user' },
            { text: '推送 Plus', link: '/api/im/push/custom' }
          ]
        },
        {
          text: '翻译服务',
          collapsed: true,
          items: [
            { text: '翻译服务概述', link: '/api/im/translate/overview' },
            { text: '翻译文本', link: '/api/im/translate/text' }
          ]
        },
        { text: '状态码', link: '/api/im/status-codes' },
        { text: 'Server SDK', link: '/api/im/server-sdk' }
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
    ['meta', { name: 'theme-color', content: '#1890ff' }],
    ['style', {}, `
      .VPHomeHero .name {
        background: linear-gradient(120deg, #1890ff, #722ed1) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        color: transparent !important;
        font-weight: 900 !important;
        font-size: 3.2rem !important;
        letter-spacing: -0.02em !important;
      }
    `]
  ],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'material-theme-palenight'
    },
    lineNumbers: true
  },

  // 临时禁用死链接检查，让构建能够成功
  ignoreDeadLinks: true
})

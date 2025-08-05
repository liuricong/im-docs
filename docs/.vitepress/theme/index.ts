import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import client from './client.js'
import VersionSelect from './components/VersionSelect.vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里添加自定义插槽
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('VersionSelect', VersionSelect)
    client.enhanceApp({ app })
  }
} 
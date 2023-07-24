import { createApp } from 'vue'
import { setupRouter } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'


const bootstrap = () => {
    const app = createApp(App)

    // 安装初始化路由
    setupRouter(app)
    app.use(ElementPlus)
    app.mount('#app')
}
bootstrap()
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import './assets/main.css'

const app = createApp(App)

//注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(router)

app.use(ElementPlus).mount('#app')

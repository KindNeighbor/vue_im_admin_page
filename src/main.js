// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 전역 스타일
import './assets/app.css'

const app = createApp(App)

// 라우터 사용
app.use(router)

// 앱 마운트 - index.html 의 div 아이디
app.mount('#app')
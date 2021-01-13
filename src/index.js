import Vue from 'vue'
import App from './app.vue'

import './assets/styles/main.css'
import './assets/images/logo.png'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)

/*入口js文件*/
import Vue from 'vue'

import App from './App'
import './index.css'

/*创建vm*/
new Vue ({
  el:'#app',
  components:{ App },
  template: "<App/>"
})


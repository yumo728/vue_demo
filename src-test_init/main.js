/*入口js*/
import Vue from 'vue'
import App from './App'

import './index.css'

/*创建vm*/
/* eslint-disable no-new */
new Vue ({
  el:'#app',
  components: { App },
  template: '<App/>'
})

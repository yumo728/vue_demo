/*入口js*/
import Vue from 'vue'
import App from './App' //先引入

import './index.css'

/* 创建vm */
new Vue({
  el: '#app',
  components: { App },  //映射组件标签
  template: '<App/>'  //指定需要渲染到页面的模板
})




/**
 * Author: xiaolin@in66.com
 * Mail: liuyejunnan@163.com
 * Date: 2018/08/20
 * Desc: Loading UE
 * API:
 * options:
 * QA:
 * ①. 如何引入?
   import Loading from '@/plugin/loading'
   Vue.use(Loading, {...options})
 * ②. 如何调用?
 * this.$loading.show() // 开启
 * this.$loading.hide() // 关闭
*/

import Vue from 'vue'
import merge from '../../util/merge'
import Loading from './Loading.vue'

let $instance
let LoadingConstructor = Vue.extend(Loading)

let initInstance = () => {
  $instance = new LoadingConstructor({
    el: document.createElement('div')
  })
  // 添加到boby
  document.body.appendChild($instance.$el)
}

let $Loading = (options = {}) => {
  initInstance()
  merge($instance.$data, options)
  return {
    show: $instance._show,
    hide: $instance._hide
  }
}

export default {
  install(Vue, options) {
    if (!Vue.$loading) {
      Vue.$loading = $Loading(options)
    }
    Vue.prototype.$loading = Vue.$loading
  }
}

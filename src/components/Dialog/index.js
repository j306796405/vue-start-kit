import Vue from 'vue'
import DialogComponent from './index.vue'

// extend 是构造一个组件的语法器.传入参数，返回一个组件
let DialogConstructor = Vue.extend(DialogComponent)
let initComponent

const Alert = (option = {}) => {
  initComponent = new DialogConstructor()

  if (typeof option !== 'object') {
    initComponent.content = option
  }

  return new Promise((resolve, reject) => {
    initComponent.successCallback = () => {
      resolve()
    }

    initComponent.$mount()
    document.querySelector(option.container || 'body').appendChild(initComponent.$el)
  })
}

export default Alert

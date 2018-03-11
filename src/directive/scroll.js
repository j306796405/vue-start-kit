import Vue from 'vue'

Vue.directive('scroll', {
  inserted (el, binding, vNode, oldVNode) {
    let h = el.offsetHeight
    let isLoading = false
    let cbName = binding.expression
    let cb = vNode.context[cbName]

    el.addEventListener('scroll', async () => {
      if (h + el.scrollTop + 10 >= el.firstChild.clientHeight && !isLoading) {
        isLoading = true
        try {
          cb && await cb()
        } catch (e) {
          console.error(e)
        }
        isLoading = false
      }
    })
  }
})

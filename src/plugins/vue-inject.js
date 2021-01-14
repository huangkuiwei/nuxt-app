import Vue from 'vue'

Vue.prototype.$myVueInject = (string) => {
  console.log('vue string', string)
}

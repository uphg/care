import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('c-button', Button)
Vue.component('c-icon', Icon)

new Vue({
    el: '#app'
})
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('c-button', Button)
Vue.component('c-icon', Icon)
Vue.component('c-button-group', ButtonGroup)
Vue.component('c-input', Input)
Vue.component('c-row', Row)
Vue.component('c-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi'
    }
})


/* 引入chai */
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect

/* 单元测试 */
{
    // 吧Button组件变为构造函数
    const Constructor = Vue.extend(Button)
    // new 一个构造函数的实例
    const button = new Constructor({
        // 给组件传入一个icon属性
        propsData: {
            icon: 'settings'
        }
    })
    // 将实例添加到内存中
    button.$mount()
    // 获取 button 中的 svg 图标 use
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    // 断言它的 xlink:href 为 #i-settings
    expect(href).to.eq('#i-settings')
    // 每次断言完成后删除button元素
    button.$el.remove()
    // 删除button对象
    button.$destroy()
}
/* 测试 loading，如果 loading 为 true 的状态下 use 的 xlink:href 应该为"#i-loading" */
{
    // 吧Button组件变为构造函数
    const Constructor = Vue.extend(Button)
    // new 一个构造函数的实例
    const button = new Constructor({
        // 给组件传入一个icon属性
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    // 将实例添加到内存中
    button.$mount()
    // 获取 button 中的 svg 图标 use
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    // 断言它的 xlink:href 为 #i-loading
    expect(href).to.eq('#i-loading')
    // 每次断言完成后删除button元素
    button.$el.remove()
    // 删除button对象
    button.$destroy()
}

/* 测试 Button按钮的 css - order属性（flex的子元素的order属性）默认属性为 order: 1，断言它的值是否为 1 */
{
    // 创建一个div并将它塞到body中，用于存放button，因为button只有出现在页面中才会渲染css属性
    const div = document.createElement('div')
    document.body.appendChild(div)
    // 吧Button组件变为构造函数
    const Constructor = Vue.extend(Button)
    // new 一个构造函数的实例
    const button = new Constructor({
        // 给组件传入一个icon属性
        propsData: {
            icon: 'settings'
        }
    })
    // 将实例添加到上面创建的div中
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    // 获取svg的CSS属性order，的值
    let order = window.getComputedStyle(svg).order
    // 此处的1应该是字符串，所有属性获取后都为字符串
    expect(order).to.eq('1')
    // 每次断言完成后删除button元素
    button.$el.remove()
    // 删除button对象
    button.$destroy()
}

/* 测试 Button按钮的图标位置，就是图标的 css - order属性（flex的子元素的order属性）默认属性为 order: 1，断言它的值是否为 1 */
{
    // 创建一个div并将它塞到body中，用于存放button，因为button只有出现在页面中才会渲染css属性
    const div = document.createElement('div')
    document.body.appendChild(div)
    // 吧Button组件变为构造函数
    const Constructor = Vue.extend(Button)
    // new 一个构造函数的实例
    const button = new Constructor({
        // 给组件传入一个icon属性
        propsData: {
            icon: 'settings'
        }
    })
    // 将实例添加到上面创建的div中
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    // 获取svg的CSS属性order，的值
    let order = window.getComputedStyle(svg).order
    // 此处的1应该是字符串，所有属性获取后都为字符串
    expect(order).to.eq('1')
    // 每次断言完成后删除button元素
    button.$el.remove()
    // 删除button对象
    button.$destroy()
}

/* 测试 Button按钮图标位置在最后时 css - order属性（flex的子元素的order属性）默认属性为 order: 1，断言它的值是否为 2，也就是是否靠后 */
{
    // 创建一个div并将它塞到body中，用于存放button，因为button只有出现在页面中才会渲染css属性
    const div = document.createElement('div')
    document.body.appendChild(div)
    // 吧Button组件变为构造函数
    const Constructor = Vue.extend(Button)
    // new 一个构造函数的实例
    const button = new Constructor({
        // 给组件传入一个icon属性
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    // 将实例添加到上面创建的div中
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    // 获取svg的CSS属性order，的值
    let order = window.getComputedStyle(svg).order
    // 此处的值应该为2，因为它是放在最后的图标
    expect(order).to.eq('2')
     // 每次断言完成后删除button元素
     button.$el.remove()
     // 删除button对象
     button.$destroy()
}

/* 测试button的click事件有无问题 */
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    // 使用chai.spy伪装一个匿名函数
    let spy = chai.spy(function(){})
    // 如果vm的onclick事件触发了，我们就执行spy(间谍函数)
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    // 我期待(断言)我们的间谍(spy)被调用
    expect(spy).to.have.been.called()
}
import { h, render, createVNode } from 'vue'

const loading = {

    render() {
        return h(
            'div',
            {
                id: 'loading'
            },
            h('div',
                {
                    classList: 'box center'
                },
                h('img',
                    {
                        src: require('@/assets/loading.png')
                    }
                )
            )
        )
    }
}

function test() {
    const vm = createVNode(loading)
    const dom = document.getElementById('loading')
    if (dom !== null) {
        vm.el = dom
    } else {
        render(vm, document.createElement('div'))
        document.body.appendChild(vm.el)
    }

    vm.el.style = 'display:none'
    const close = () => {
        vm.el.style = 'display:none'
    }

    const show = () => {
        vm.el.style = 'display:block'
    }

    return {
        close,
        show
    }
}


export default {
    test,
    loading
}
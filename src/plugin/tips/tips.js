import { createVNode, h, render } from "vue"

let text = '提示类容'

let type = 'success'


const tips = {
    render() {
        return h('section', { id: 'tips', classList: type === 'success' ? 'success' : 'danger' }, text)
    }
}

function serve(texts, types) {
    text = texts
    type = types
    const vm = createVNode(tips)
    const dom = document.getElementById('tips')
    if (dom !== null) {
        render(vm, document.createElement('div'))
        document.body.replaceChild(vm.el, dom)
    } else {
        render(vm, document.createElement('div'))
        document.body.appendChild(vm.el)
    }

    setTimeout(() => {
        vm.el.style = "display: none"
    }, 3000)
}


export default {
    tips,
    serve
}
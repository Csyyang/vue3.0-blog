import request from '@/util/request'

export function submit(data) {
    return request({
        url: '/posterior/login',
        method: 'post',
        data
    })
}


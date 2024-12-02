import request from '@/util/request'

export function submit(data) {
    return request({
        url: '/posterior/login',
        method: 'post',
        data
    })
}

export function updateArticl(data) {
    return request({
        url: '/posterior/updateArticl',
        method: 'post',
        data,
        header: {
            'Content-Type': 'multipart/form-data'
        }
    })
}


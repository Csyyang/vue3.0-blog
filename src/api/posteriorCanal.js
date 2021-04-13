import request from '@/util/request'

export function submit(data) {
    return request({
        url: '/submit',
        method: 'post',
        data
    })
}


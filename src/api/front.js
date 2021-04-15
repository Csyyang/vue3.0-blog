import request from '@/util/request'


export function getArticles() {
    return request({
        url: '/front/getArticles',
        method: 'post',
        data: {}
    })
}

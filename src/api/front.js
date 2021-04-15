import request from '@/util/request'


export function getArticles() { // 获取所有文章
    return request({
        url: '/front/getArticles',
        method: 'post',
        data: {}
    })
}

export function getTypeArticles(data) { // 获取指定类型文章
    return request({
        url: '/front/typeArticles',
        method: 'post',
        data
    })
}


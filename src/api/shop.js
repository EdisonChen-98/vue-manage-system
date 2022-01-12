import request from '@/util/http.js'

export function getAllShop(data) {
    return request({
        url: 'auth/getAllShop',
        method: 'post',
        data
    })
}

export function getMyShop(data) {
    return request({
        url: 'auth/getMyShop',
        method: 'post',
        data
    })
}
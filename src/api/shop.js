import request from '@/util/http.js'

export function getAllShop() {
    return request({
        url: 'auth/getAllShop',
        method: 'get',
    })
}
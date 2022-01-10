import request from '@/util/http.js'

export function apiGetUserInfo() {
    return request({
        url: 'auth/getUserInfo',
        method: 'get',
    })
}

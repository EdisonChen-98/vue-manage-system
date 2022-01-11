/*
 * @Author: Edison Chen
 * @Date: 2022-01-11 09:47:13
 */
import request from '@/util/http.js'

export function apiGetUserInfo() {
    return request({
        url: 'auth/getUserInfo',
        method: 'get',
    })
}

export function updateUserInfo(data) {
    return request({
        url: 'auth/updateUserInfo',
        method: 'post',
        data
    })
}

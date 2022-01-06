/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 16:15:03
 */
import request from '@/util/http.js'

export function apiLogin(data) {
    return request({
        url: 'common/login',
        method: 'post',
        data
    })
}

export function apiRegister(data) {
    return request({
        url: 'common/register',
        method: 'post',
        data
    })
}
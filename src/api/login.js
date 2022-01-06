/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 16:15:03
 */
import request from '@/util/http.js'

export function handleLogin(data) {
    return request({
        url: 'auth/login',
        method: 'post',
        data
    })
}
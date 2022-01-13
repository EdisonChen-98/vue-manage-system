/*
 * @Author: Edison Chen
 * @Date: 2022-01-13 09:14:40
 */
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

export function addMyShop(data) {
    return request({
        url: 'auth/addMyShop',
        method: 'post',
        data
    })
}
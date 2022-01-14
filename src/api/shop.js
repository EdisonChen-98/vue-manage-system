/*
 * @Author: Edison Chen
 * @Date: 2022-01-13 09:14:40
 */
import request from '@/util/http.js'

export function getAllShopList(data) {
    return request({
        url: 'auth/getAllShopList',
        method: 'post',
        data
    })
}

export function getMyShopList(data) {
    return request({
        url: 'auth/getMyShopList',
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

export function deleteMyShop(data) {
    return request({
        url: 'auth/deleteMyShop',
        method: 'post',
        data
    })
}

export function getMyShopDetail(data) {
    return request({
        url: 'auth/getMyShopDetail',
        method: 'post',
        data
    })
}

export function editMyShop(data) {
    return request({
        url: 'auth/editMyShop',
        method: 'post',
        data
    })
}
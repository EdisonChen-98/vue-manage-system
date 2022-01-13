/*
 * @Author: Edison Chen
 * @Date: 2022-01-13 15:42:55
 */
import vue from '@/main.js'

let loading;
export function startLoading() {
    loading = vue.$loading({
        lock: true,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
        customClass: 'loadingDom'
    })

}

export function endLoading() {
    loading.close()
}
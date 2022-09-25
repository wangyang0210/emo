import request from 'src/utils/request'

enum Api {
    getAuthorize = 'https://oauth.cnblogs.com/connect/authorize',
    getToken = 'https://oauth.cnblogs.com/connect/token'
}

export function getAuthorize(data: any): any {
    return request({
        url: Api.getToken,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        data
    })
}

export function getToken(data: any): any {
    return request({
        url: Api.getToken,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        data
    })
}

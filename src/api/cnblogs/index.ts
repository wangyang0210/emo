import request from 'src/utils/request'

enum Api {
    getAuthorize = 'https://oauth.cnblogs.com/connect/authorize',
    getToken = 'https://oauth.cnblogs.com/connect/token'
}

export function getAuthorize(): any {
    return request({
        url: Api.getToken,
        method: 'POST'
    })
}

export function getToken(): any {
    return request({
        url: Api.getToken,
        method: 'POST'
    })
}

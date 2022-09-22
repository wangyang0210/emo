https://api.cnblogs.com/help#top

oauth: {
        authority: 'https://oauth.cnblogs.com',
        tokenEndpoint: '/connect/token',
        authorizeEndpoint: '/connect/authorize',
        userInfoEndpoint: '/connect/userinfo',
        clientId: 'vscode-cnb',
        clientSecret: '',
        responseType: 'code',
        scope: 'openid profile CnBlogsApi CnblogsAdminApi',
        revocationEndpoint: '/connection/revocation',
    },
    apiBaseUrl: 'https://i.cnblogs.com',

 oauth: Object.assign({}, defaultConfig.oauth, {
        authority: env.Authority ? env.Authority : 'https://my-oauth.cnblogs.com',
        clientId: env.ClientId ? env.ClientId : 'vscode-cnb',
        clientSecret: env.ClientSecret ? env.ClientSecret : '',
    }),
    apiBaseUrl: 'https://admin.cnblogs.com',


`${globalState.config.apiBaseUrl}/api/settings`;
`${globalState.config.apiBaseUrl}/api/posts/body/images`
`${globalState.config.apiBaseUrl}/api/category/blog/1/edit`
`${globalState.config.apiBaseUrl}/api/category/blog/1`
`${globalState.config.apiBaseUrl}/api/category/blog/${category.categoryId}`
`${globalState.config.apiBaseUrl}/api/category/blog/${categoryId}`
`${globalState.config.apiBaseUrl}/api/tags/list`
`${this._baseUrl}/api/posts/list?${s}`
`${this._baseUrl}/api/posts/${postId}`
`${this._baseUrl}/api/posts/${postId}`
`${this._baseUrl}/api/bulk-operation/post?${s}`
`${this._baseUrl}/api/posts`
`${globalState.config.apiBaseUrl}/api/category/site`
export async function request(
    url: string = '',
    method: string = 'GET',
    data: object = {}
): Promise<void> {
    const options: object = {
        method,
        mode: 'cors',
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    }
    if (Object.keys(data).length > 0) Object.assign(options, { body: JSON.stringify(data) })
    const response = await fetch(url, options)
    return await response.json()
}

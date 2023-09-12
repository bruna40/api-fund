// /users/:id
export function buildRoutePath(path) {  
    const routeParametersRegex = /:([a-zA-Z]+)/g
    const paramsWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${paramsWithParams}(?<query>\\?(.*))?$`)
    // O query é opcional, por isso o ? no final
    // O query serve para pegar os parâmetros da query string na url

    return pathRegex
}
const TokenKey = 'vue_admin_template_token'

//本地存储获取token
export function getToken() {
  return localStorage.getItem(TokenKey)
}

//本地存储持久化存储token
export function setToken(token: string) {
  return localStorage.setItem(TokenKey, token)
}

//本地存储清空token
export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

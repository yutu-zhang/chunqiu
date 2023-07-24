import request from 'utils/http'

// api枚举
enum Api {
  homeList = '/login'
}

// 用户信息
interface UserInfo {
  userName: string
}

/**
 * 登录
 */
export const accountLogin = () => {
  return request<UserInfo>({
    url: Api.homeList,
    method: 'get'
  })
}

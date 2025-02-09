import request from '@/utils/request'

// 获取全部对话
export function getChatList() {
  return request({
    method: 'get',
    url: '/chato/api/v1/domains/public_domain/get_chat_session'
  })
}

export function addSession(data) {
  return request({
    method: 'post',
    url: '/chato/api/v1/domains/public_domain/add_chat_session',
    data
  })
}

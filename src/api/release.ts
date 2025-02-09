import type { EChannelType } from '@/enum/release'
import type {
  ApplicationFormData,
  CreateGroupChatResponse,
  brandDomainType,
  brandDomainTypeKeyFile,
  createPublicStatus,
  feishuPublicSerachRes,
  feishuSwitchConfigType,
  feishuiPublicFormType,
  firstGuideSelectDataConfig,
  patchChannelType,
  weixinConfigType
} from '@/interface/release'
import request from '@/utils/request'

// 创建群聊
export function createPublic(domainId, data) {
  return request({
    method: 'post',
    url: `/chato/weixin_group/${domainId}/create`,
    data
  })
}

// 查询当前创建的群聊
export function serachPublicCreateStatus(orgId: number) {
  return request<createPublicStatus>({
    url: `/chato/weixin_group/${orgId}/is_done`
  })
}

// 编辑群聊
export function editPublic(domainId, data) {
  return request({
    method: 'post',
    url: `/chato/weixin_group/${domainId}/update/v2`,
    data
  })
}

// 获取群聊接口
export function getPubliclist(domainId: number) {
  return request<CreateGroupChatResponse[]>({
    url: `/chato/weixin_group/${domainId}/list`
  })
}

// 获取群聊图片
export function getPublicCodeImg(domainId, id) {
  return request({
    url: `/chato/weixin_group/${domainId}/refresh/${id}`
  })
}

// 行业列表
export function getIndustry() {
  return request({
    method: 'post',
    url: `/chato/api/v1/config/industry`
  })
}

// 新注册用户表单-行业+问题
export function getFirstGuideSelect() {
  return request({
    url: '/chato/api/v1/org/industry_select_config'
  })
}

// 新用户注册表单-提交
export function postFirstGuideSelect(data: firstGuideSelectDataConfig) {
  return request<firstGuideSelectDataConfig>({
    method: 'post',
    url: '/chato/api/v1/org/additions/save',
    data
  })
}

// 空间保存
export function applicationFormSave(data: ApplicationFormData) {
  return request({
    method: 'post',
    url: `/chato/api/v1/org/release_applications/save`,
    data
  })
}

// 保存品牌域名
export function saveBrandDomain(domain_slug: string, data: brandDomainType) {
  return request({
    method: 'post',
    url: `/api/custom_host/${domain_slug}/save`,
    data
  })
}

export function getBrandDomain(domain_slug: string) {
  return request<brandDomainTypeKeyFile[]>({
    url: `/api/custom_host/${domain_slug}/get`
  })
}

// 查询飞书配置
export function getFeishuConfig(domain_slug: string) {
  return request<feishuPublicSerachRes>({
    method: 'post',
    url: '/chato/feishu/search',
    data: { domain_slug }
  })
}

// 配置飞书
export function postFeishuConfig(data: feishuiPublicFormType & { domain_slug: string }) {
  return request({
    method: 'post',
    url: '/chato/feishu/login',
    data: data
  })
}

// 飞书群聊开关
export function postSwitchFeishuConfig(data: feishuSwitchConfigType) {
  return request({
    method: 'post',
    url: '/chato/feishu/ban',
    data
  })
}

// 创建微信客服：app-id
export function postWeixinConfig(domain_slug: string, app_id: string) {
  return request({
    url: `/chato/api/v1/wechat_kf/url/${domain_slug}/${app_id}`
  })
}

// 创建微信客服：app-id、app-secret
export function patchWeixinConfig(domain_slug: string, data: weixinConfigType) {
  return request({
    method: 'post',
    url: `/chato/api/v1/wechat_kf/account/${domain_slug}`,
    data
  })
}

// 查询微信客服
export function getWeixinServiceConfig(domain_slug: string) {
  return request({
    url: `/chato/api/v1/wechat_kf/account/${domain_slug}`
  })
}

// 查询抖音
export function getTitokServiceConfig(domain_slug: string) {
  return request({
    url: `/chato/api/v1/douyin/authorization/${domain_slug}`
  })
}

// channel_get
export function getChannelType(channel_type: EChannelType, domain_slug: string) {
  return request({
    url: `/chato/api/v1/channel/${channel_type}/account/${domain_slug}`
  })
}

// channel_patch
export function patchChannelType(
  channel_type: EChannelType,
  domain_slug: string,
  data: patchChannelType
) {
  return request({
    method: 'patch',
    url: `/chato/api/v1/channel/${channel_type}/account/${domain_slug}`,
    data
  })
}
// 进入已有群 < 200人
export function postWeixinPublicInviteMini(domain_id: number, data: any) {
  return request({
    method: 'post',
    url: `/chato/weixin_group/${domain_id}/invite_qr_code_img`,
    data
  })
}

// 进入已有群 > 200 人
export function postWeixinPublicInviteLarge(domain_id: number, data: any) {
  return request({
    method: 'post',
    url: `/chato/weixin_group/${domain_id}/invite_by_user`,
    data
  })
}

// 进入已有群获取机器人二维码
export function getWeixinPublicRobotQrCode(domain_id: number) {
  return request({
    url: `/chato/weixin_group/${domain_id}/available/wxuser/qrcode`
  })
}

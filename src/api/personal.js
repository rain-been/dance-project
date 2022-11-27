import request from '@/util/request';

// 个人资料
export const reqEditInfo = () => {
    return request.get(`/userCenter/users/me`);
}

// 我的会员
export const reqMemberInfo = (vip_product) => {
    return request.get(`/setup/setups/search/findByGroupType?groupType=${vip_product}`);
}
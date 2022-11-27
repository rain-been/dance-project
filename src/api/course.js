import request from '@/util/request';

// 请求课程列表
export const reqCourseList = ({ routeName, sortParams, query }) =>
  request.get(`/moment/moments/collect/vip_zone/${sortParams}`, {
    params: query,
  });
//   request.get(`/moment/moments/collect/${routeName}/${sortParams}`, {
//     params: query,
//   });

// 请求过滤列表
export const reqFilterList = (routeName) =>
  request.get(`/moment/properties/filter/vip_zone`);
//   request.get(`/moment/properties/filter/${routeName}`);

// 请求主题列表
export const reqOptionList = () =>
  request.get(
    `/moment/activityZones/collect/default?access_token=6b44a37a-0df2-4a8a-a4b8-7c0cd2d2a222&pageSize=16`
  );

//   请求活动课程列表
// export const reqActivityList = ()=>request.get(`/moment/activityZones/collect/default`,{params})

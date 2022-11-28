import request from '../../utils/requestMock';


// 会员专区选择标签列表接口
export const reqChooseTag = ()=>request.get('/videoDeail/lable')
// 视频课选择标签列表接口
export const reqVideoList = ()=>request.get('/videoDeail/lable')
// 直播课选择标签列表接口
export const reqLiveClass = ()=>request.get('/videoDeail/lable')
// 获取线下课选择标签列表数据
export const reqLineClass = ()=>request.get('/videoDeail/lable')
// 获取主题页面的数据请求接口
export const reqThemePage = ()=>request.get('/videoDeail/theme')
// 会员中心部分视频模块数据的接口
export const reqVideoModule = ()=>request.get('/videoDetail/videoList')
// 视频课部分的数据接口
export const reqVideoClass = ()=>request.get('/videoDetail/videoList')
// 直播课部分的数据接口
export const reqLiveClassData = ()=>request.get('/videoDetail/videoList')
// 线下课部分的数据接口
export const reqLineClassVideo = ()=>request.get('/videoDetail/videoList')
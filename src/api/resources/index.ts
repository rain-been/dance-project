//书写数据可是接口函数API
//二次封装的axios,人家封装好的baseURL=>app-dev
//mock接口baseURl->mock
import requestMock from '@/utils/requestMock';
//轮播图
export const reqBanner = ()=>requestMock.get('/banner');
//技能
export const reqUserSkill = ()=>requestMock.get('/userSkill');
//视频播放
export const reqVideo = ()=>requestMock.get('/video');

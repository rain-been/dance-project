//书写数据可是接口函数API
//二次封装的axios,人家封装好的baseURL=>app-dev
//mock接口baseURl->mock
import requestMock from '@/utils/tuo_utils/requestMock';
//数据可视化需要接口函数
export const reqTraining = ()=>requestMock.get('/training');

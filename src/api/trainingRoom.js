import request from '@/util/request';

//请求历史记录
export const reqHistoryList = (pageSize,pageNum)=>{
    return request.get(`/moment/viewRecords?pageSize=${pageSize}&pageNum=${pageNum}`)
}
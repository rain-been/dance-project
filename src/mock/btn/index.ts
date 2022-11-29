// @ts-ignore
import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/mock/moment/moments/3be78c019da04985a69154e23a4822d3?access_token=f4a9887d-fd0a-4b50-8aa7-a646c9da6316','get',()=>{
    return {
        code: 200,
        data,
        message: 'success'
    }
})
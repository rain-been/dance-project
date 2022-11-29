import Mock from 'mockjs'
import RecommendData from './home/recommendData.json'
import productionSynthesizeData from './home/productionSynthesizeData.json'
import dynamicData from './home/dynamicData.json'
import courseSynthesizeData from './home/courseSynthesizeData.json'
import screen from './home/screen.json'
import popTrainingData from './home/popTrainingData.json'
import newcomerData from './home/newcomerData.json'
import lastestData from './home/lastestData.json'
import search from './home/search.json'
import videoPlay from './home/videoPlay.json'

const access_token = '439b9104-1848-477a-aad9-0902069119d6'
//获取视频列表
Mock.mock(`/mock/moment/moments/rec/default?access_token=${access_token}&column=recommend&pageSize=20&pageNum=0&localCache=0`,()=>{
  return {
    code:200,
    data:RecommendData,
    message:'success'
  }
})

Mock.mock(`/mock/moment/moments/collect/original/integrated?access_token=${access_token}&column=original&pageSize=20&pageNum=0`,()=>{
  return {
    code:200,
    data:productionSynthesizeData,
    message:'success'
  }
})

Mock.mock(`/mock/moment/moments/collect/original/popTraining?access_token=${access_token}&column=original&pageSize=20&pageNum=0`,()=>{
  return {
    code:200,
    data:popTrainingData,
    message:'success'
  }
})

Mock.mock(`/mock/moment/moments/collect/original/newcomer?access_token=${access_token}&column=original&pageSize=20&pageNum=0`,()=>{
  return {
    code:200,
    data:newcomerData,
    message:'success'
  }
})

Mock.mock(`/mock/moment/moments/collect/original/lastest?access_token=${access_token}&column=original&pageSize=20&pageNum=0`,()=>{
  return {
    code:200,
    data:lastestData,
    message:'success'
  }
})

Mock.mock(`/mock/moment/moments/frontDynamic/default?access_token=${access_token}&column=frontDynamic&pageSize=20`,()=>{
  return {
    code:200,
    data:dynamicData,
    message:'success'
  }
})

Mock.mock(`/mock/moment/moments/collect/course/integrated?access_token=${access_token}&column=course&pageSize=20&pageNum=0`,()=>{
  return {
    code:200,
    data:courseSynthesizeData,
    message:'success'
  }
})

//获取筛选列表
Mock.mock(`/mock/moment/moments/moment/properties/filter/original?access_token=${access_token}`,()=>{
  return {
    code:200,
    data:screen,
    message:'success'
  }
})

//搜索请求
Mock.mock(`/mock/avocation/avocations/search/findByName?access_token=439b9104-1848-477a-aad9-0902069119d6&name=1`,()=>{
  return {
    code:200,
    data:search,
    message:'search'
  }
})

//视频页面数据
Mock.mock(`/mock/moment/moments/64ab2e1a863342438d898d45ee6033c4?access_token=439b9104-1848-477a-aad9-0902069119d6&source=recommend`,()=>{
  return {
    code:200,
    data:videoPlay,
    message:'search'
  }
})



import request from "@/util/request.js";

//选择兴趣列表
//1.获取我的兴趣列表
export const getInterestList = (pageNum, pageSize) => {
  return request.get("/avocation/avocations/rec/user", {
    params: {
      pageNum,
      pageSize,
    },
  });
};
//2.兴趣列表已经选的
export const hasSelectList = () => {
  return request.get("/userCenter/users/me");
};
//3.兴趣列表关键字搜索
export const keySearch = (name) => {
  return request.get("/avocation/avocations/search/findByName", {
    params: {
      name,
    },
  });
};

//[http://zsjyyds.online:9000/apis/promotion/ads/search/findByPosition?access_token=c494ae44-3adc-48ca-8749-5128a53358d7&position=pc_mainpage](https://gitee.com/link?target=https%3A%2F%2Fwww.dance365.com%2Fapis%2Fpromotion%2Fads%2Fsearch%2FfindByPosition%3Faccess_token%3Dc494ae44-3adc-48ca-8749-5128a53358d7%26position%3Dpc_mainpage)

//广告轮播
export const getCarouselData = (position) => {
  return request.get("/promotion/ads/search/findByPosition", {
    params: {
      position,
    },
  });
};
//推荐
export const getRecommendData = (pageSize, pageNum) => {
  return request.get("/moment/moments/rec/default", {
    params: {
      pageSize,
      pageNum,
    },
  });
};

//****作品
//综合榜
export const getSynthesizeData = (pageSize, pageNum, column) => {
  return request.get("/moment/moments/collect/original/integrated", {
    params: {
      pageSize,
      pageNum,
      column,
    },
  });
};
//热搜榜
export const getHotSearch = (pageSize, pageNum, column) => {
  return request.get("/moment/moments/collect/original/popTraining", {
    params: {
      pageSize,
      pageNum,
      column,
    },
  });
};
//新锐榜单
export const getCuttingedge = (pageSize, pageNum, column) => {
  return request.get("/moment/moments/collect/original/newcomer", {
    params: {
      pageSize,
      pageNum,
      column,
    },
  });
};
//最新
export const getNewest = (pageSize, pageNum, column) => {
  return request.get("/moment/moments/collect/original/newcomer", {
    params: {
      pageSize,
      pageNum,
      column,
    },
  });
};

//*** 获取可隐藏的动态条件
export const getCanHideCondition = () => {
  return request.get("/moment/properties/filter/original");
};
//多条件过滤
export const GetMultipleConditionsFilter = (pageSize, pageNum, column) => {
  return request.post("/moment/moments/collect/original/lastest", {
    pageSize,
    pageNum,
    column,
  });
};

//***教程
//综合
export const getCourseSynthesize = (pageSize, pageNum, column) => {
  return request.get("/moment/moments/collect/course/integrated", {
    params: {
      pageSize,
      pageNum,
      column,
    },
  });
};
//可隐藏的动态条件
export const getgetCanHideConditionSynthesize = () => {
  return request.get("/moment/properties/filter/course");
};

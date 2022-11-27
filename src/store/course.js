import { ElMessage } from 'element-plus/es';
import { defineStore } from 'pinia';
import { reqCourseList, reqFilterList, reqOptionList } from '../api/course';

// 排序参数集合
const sortParamsCollect = [
  'integrated',
  'sellCountDesc',
  'integrated',
  'integrated',
  'sellCountDesc',
  'sellCountDesc',
//   'viewCountDesc',
//   'priceDesc',
//   'priceAsc',
//   'onsellTimeDesc',
];

const initCourseState = ()=>({
    // 请求的查询参数
    query: {
      access_token: '6b44a37a-0df2-4a8a-a4b8-7c0cd2d2a222',
      pageSize: 20,
      pageNum: 0,
    },
    // 排序集合索引
    sortIndex: 0,
    // 课程列表
    courseList: [],
    // 过滤属性值列表
    filterList: [],
    // 过滤选中参数
    filterParams: [],
    // 主题列表
    optionList: [],
})

export const useCourseStore = defineStore({
  id: 'course',
  state() {
    return {
     ...initCourseState(),
      // 路由名称动态添加到请求参数中
      routeName: 'vip_zone',
      // 课程列表请求加载中
      isCourseListLoading: false,
      // 过滤列表请求加载中
      isFilterListLoading: false,
      // 主题列表请求加载中
      isOptionLoading: false,
      // 没有更多内容了
      isNoMore:false
    };
  },
  actions: {
    // 请求课程列表封装
    async getCourseList() {
      try {
        // 请求前修改加载中状态
        this.isCourseListLoading = true;
        // 获取参数传入请求中，请求多态调用
        const { query, sortIndex, routeName } = this;
        const sortParams = sortParamsCollect[sortIndex];
        const { content } = await reqCourseList({
          query,
          sortParams,
          routeName,
        });
        //   响应的值放的位置不同，进行判断
        if (content.content) { 
         // 根据请求回来的数据长度满不满足请求的pagesize判断是否有没有更多了
         if(content.content.length<this.query.pageSize) this.isNoMore = true;
         else this.isNoMore = false;
         // 累加课程列表
          this.courseList = this.courseList.concat(content.content);
        } else {
         // 根据请求回来的数据长度满不满足请求的pagesize判断是否有没有更多了
         if(content.length<this.query.pageSize) this.isNoMore = true;
         else this.isNoMore = false;
         // 累加课程列表
          this.courseList = this.courseList.concat(content);
        }
        // 请求完成后修改加载中状态
        this.isCourseListLoading = false;
      } catch (e) {
        // 请求失败也要修改加载中状态
        this.isCourseListLoading = false;
        // 失败弹窗
        ElMessage(e.message);
      }
      // this.courseList = [...this.courseList,...content.content];
    },
    //  请求过滤属性值列表
    async getFilterList() {
      try {
        // 请求前修改加载中状态
        this.isFilterListLoading = true;
        const re = await reqFilterList();
        this.filterList = re;
        // 请求完成后修改加载中状态
        this.isFilterListLoading = false;
      } catch (e) {
        // 请求失败也要修改加载中状态
        this.isFilterListLoading = false;
        // 失败弹窗
        ElMessage(e.message);
      }
    },
    //  请求主题列表
    async getOptionList() {
      try {
        // 请求前修改加载中状态
        this.isOptionLoading = true;
        const { content } = await reqOptionList();
        // 请求完成后修改加载中状态
        this.isOptionLoading = false;
        this.optionList = content;
      } catch (e) {
        // 请求失败也要修改加载中状态
        this.isOptionLoading = false;
        // 失败弹窗
        ElMessage(e.message);
      }
    },
    resetCourseInfoByRoute(){
      Object.assign(this,initCourseState());
    }
  },
});

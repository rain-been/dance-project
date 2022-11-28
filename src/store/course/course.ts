import {defineStore} from 'pinia';
// 引入选择标签列表数据的接口
import { reqChooseTag, reqLineClass,reqLiveClassData,reqLineClassVideo, reqLiveClass, reqThemePage, reqVideoClass, reqVideoList,reqVideoModule } from '../../api/course/course';
let useStore = defineStore('useStore',{
    state:()=>({
        // 存储标签选择列表数据
        tagList:[],
        videoTagList:[],
        liveTagList:[],
        lineClassTag:[],
        themepagedata:{},   
        videoModuled:[],
        videoclassData:[],
        liveclassData:[],
        lineclassData:[]
    }),
    actions:{
        // 获取会员专区选择标签列表数据
        async getTagList(){
            let result = await reqChooseTag();        
            console.log(result);
            
            this.tagList = result.data;
        },
        // 获取视频课选择标签类标数据
        async getVideoTag(){
            let result = await reqVideoList();
            this.videoTagList = result.data;
            
        },
        //获取直播课选择标签列表数据
        async getLiveClass(){
            let result = await reqLiveClass(); 
            this.liveTagList = result.data;
        },
        // 获取线下课选择标签列表数据
        async getLineTag(){
            let result = await reqLineClass();
            this.lineClassTag = result.data;
        },
        // 获取主题页的数据
        async getTheme(){
            let result = await reqThemePage();
            this.themepagedata = result.data.content;
            console.log(result.data.content);
            
        },
        // 获取会员中心视频列表模块的数据
        async getVideoModules(){
            let result = await reqVideoModule();
            this.videoModuled = result.data.content;
            // console.log(result.data.content);
            
        },
        // 获取视频课视频模块的数据
        async getVideoClassData(){
            let result = await reqVideoClass();
            this.videoclassData = result.data.content;
            
        },
        // 直播课视频模块数据
        async getLiveClassData(){
            let result = await reqLiveClassData();
            this.liveclassData = result.data.content;
            console.log(result.data.content);
        },
        // 线下课视频数据模块
        async getLineClassdata(){
            let result = await reqLineClassVideo();
            this.lineclassData = result.data.content;
        }


    },
    getters:{},

})


export default useStore;
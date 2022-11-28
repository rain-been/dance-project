<template>
    <div class="main">
        <!-- 标签选择部分 -->
        <el-card class="tagCard">
            <div class="selectCenter">
                <div class="selectContainer" :class="{fold:isFold}">
                    <el-row class="selectList" v-for="(item,index) in tagListStore.liveTagList" :key="index">
                        <el-col :span="2" class="selectType">{{item.label}}:</el-col>
                        <el-col :span="22" class="selectMatter">
                            <div class="select-item" :class="{actives:dances.isClick}"
                                @click="tagHandler(dances,item.choises)" v-for="(dances,index) in item.choises"
                                :key="index">{{dances.name}}</div>
                        </el-col>
                    </el-row>
                    <div class="reset" @click="resetHandler">重置</div>
                </div>
                <div class="folds" @click="isFold = !isFold">
                    <sapn v-if="isFold">展开全部</sapn>
                    <span v-else>收起</span>
                </div>
            </div>
        </el-card>
        <!-- 综合排序 -->
        <el-card class="screen">
            <div class="screenContainer">
                <div class="synthesis" @click="isSort = !isSort">
                    <span v-if="isSort">综合排序</span>
                    <span v-else>综合</span>
                </div>
                <div class="sales" @click="isSales = !isSales">
                    <span v-if="isSales">销量</span>
                    <span v-else>销量由高到低</span>
                </div>
                <div class="views" @click="isViews = !isViews">
                    <span v-if="isViews">浏览量</span>
                    <span v-else>浏览量由高到低</span>
                </div>
                <div class="priceup">
                    <el-dropdown placement="bottom">
                        <span class="el-dropdown-link">
                            价格
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">价格由高到低</el-dropdown-item>
                                <el-dropdown-item command="b">价格由低到高</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="time" @click="isTime = !isTime">
                    <span v-if="isTime">发布时间</span>
                    <span v-else>发布时间由近及远</span>
                </div>
            </div>
        </el-card>
        <!-- 视频内容 -->
        <div class="card_content_wrapper">
            <div class="loadMoreList">
                <div class="content_card_item" v-for="(videoModule,index) in tagListStore.liveclassData" :key="index">
                    <!-- 视频内容 -->
                    <div class="card_item">
                        <!-- 视频图片 -->
                        <div class="card-top">
                            <img :src="videoModule.cover" class="cover"/>
                            <!-- 播放按钮 -->
                            <router-link to="/detail/video"><img class="play" src="../../../../public/static/play.png"
                                    alt="" /></router-link>
                            <span>视频课</span>
                            <router-view></router-view> 
                        </div>
                        <div class="card-bottom">
                            <div class="card-bottom-top">
                                <div class="video-text">{{videoModule.momentClassificationBackup.workTitle}}</div>
                                <div class="price-zan">
                                    <span class="price">￥<i>{{videoModule.commodityBackup.price}}</i>.00</span>
                                    <span class="zan">{{videoModule.statisticsBackup.enquiryCount}}k人浏览</span>
                                </div>
                                <div class="vip-video">
                                    <img src="../../../static/vip_free.png" alt="">
                                </div>
                                <div class="myZan">
                                    <svg t="1666139214246" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="4652" width="14" height="14">
                                        <path
                                            d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                                            p-id="4653"></path>
                                    </svg>
                                    <span>{{videoModule.statisticsBackup.viewCount}}</span>
                                    <svg t="1666139352255" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="5643" width="14" height="14">
                                        <path
                                            d="M622.56056 464.834794c0 27.928073 22.73684 50.64854 50.664913 50.64854 27.956725 0 50.693566-22.720468 50.693566-50.64854 0-27.928073-22.73684-50.66389-50.693566-50.66389C645.2974 414.171927 622.56056 436.907745 622.56056 464.834794"
                                            p-id="5644"></path>
                                        <path
                                            d="M931.254178 211.459063c0-40.637536-33.05893-73.698512-73.728188-73.698512L166.471964 137.76055c-40.637536 0-73.727165 33.059953-73.727165 73.698512l0 506.796488c0 40.637536 33.088606 73.696466 73.727165 73.696466l251.16846 0 94.343715 94.28641 94.315062-94.28641 251.226788 0c40.669258 0 73.728188-33.05893 73.728188-73.696466l0-82.560344-0.089028-1.282203L931.254178 211.459063zM875.96699 695.220928c0 22.88522-18.558681 41.444924-41.443901 41.444924L579.446623 736.665853l-67.462484 67.490114-67.430762-67.490114L189.506587 736.665853c-22.88522 0-41.4746-18.559705-41.4746-41.444924L148.031986 234.493685c0-22.88522 18.58938-41.488927 41.4746-41.488927l645.01548 0c22.88522 0 41.443901 18.603707 41.443901 41.488927l0 396.579247 0 36.161594L875.965967 695.220928z"
                                            p-id="5645"></path>
                                        <path
                                            d="M461.321272 464.834794c0 27.928073 22.735817 50.64854 50.662867 50.64854 27.929096 0 50.66389-22.720468 50.66389-50.64854 0-27.928073-22.734794-50.66389-50.66389-50.66389C484.057089 414.171927 461.321272 436.907745 461.321272 464.834794"
                                            p-id="5646"></path>
                                        <path
                                            d="M300.083008 464.834794c0 27.928073 22.735817 50.64854 50.66389 50.64854 27.927049 0 50.662867-22.720468 50.662867-50.64854 0-27.928073-22.735817-50.66389-50.662867-50.66389C322.817802 414.171927 300.083008 436.907745 300.083008 464.834794"
                                            p-id="5647"></path>
                                    </svg>
                                    <span>{{videoModule.statisticsBackup.favoriteCount}}</span>
                                    <svg t="1666139387021" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="6647" width="14" height="14">
                                        <path
                                            d="M512 150.25664c7.1424 0 20.224 2.2272 27.59168 17.152l81.24416 164.61312a82.0224 82.0224 0 0 0 61.78816 44.91264l181.69344 26.40384c16.46592 2.39104 22.6304 14.14656 24.83712 20.9408 2.20672 6.79424 4.13184 19.92192-7.7824 31.5392l-131.48672 128.16384a82.03776 82.03776 0 0 0-23.58272 72.61184l31.03744 180.96128c1.6128 9.41568-0.54272 17.72032-6.40512 24.6784-6.08256 7.21408-15.01696 11.52-23.90016 11.52-4.83328 0-9.5232-1.2288-14.336-3.7632l-162.49856-85.43232a82.35008 82.35008 0 0 0-38.19008-9.43104c-13.25056 0-26.45504 3.26144-38.17984 9.42592L311.31648 869.9904c-4.75136 2.49856-9.5744 3.7632-14.336 3.7632-8.88832 0-17.8176-4.30592-23.90016-11.51488-5.8624-6.95808-8.01792-15.26272-6.40512-24.6784l31.03744-180.95104a82.03264 82.03264 0 0 0-23.59808-72.6272l-131.4816-128.16896c-11.91424-11.61728-9.99424-24.74496-7.7824-31.5392 2.20672-6.79424 8.36608-18.54464 24.83712-20.9408l181.69344-26.39872a81.9968 81.9968 0 0 0 61.7728-44.88192l81.25952-164.64384c7.36256-14.9248 20.44416-17.152 27.58656-17.152m0-71.79264c-36.57728 0-73.15968 19.05664-91.96544 57.16992L338.77504 300.27776a10.25536 10.25536 0 0 1-7.72096 5.61152L149.36064 332.288c-84.11648 12.22144-117.7088 115.59936-56.83712 174.92992l131.47648 128.15872c2.41664 2.3552 3.52256 5.74976 2.94912 9.07776l-31.03744 180.96128c-11.37152 66.29376 41.30304 120.12032 101.06368 120.12032 15.76448 0 32.04096-3.75296 47.744-12.0064l162.51392-85.43744a10.28096 10.28096 0 0 1 9.54368 0l162.51392 85.43744c15.70816 8.25856 31.96928 12.0064 47.744 12.0064 59.75552 0 112.43008-53.8368 101.06368-120.12032l-31.03744-180.96128a10.26048 10.26048 0 0 1 2.94912-9.07776l131.47648-128.15872c60.87168-59.33056 27.27936-162.70848-56.83712-174.92992l-181.69344-26.40384a10.25536 10.25536 0 0 1-7.72096-5.61152L603.97568 135.6288c-18.816-38.10816-55.3984-57.1648-91.97568-57.1648z"
                                            fill="#666666" p-id="6648"></path>
                                    </svg>
                                    <span>{{videoModule.statisticsBackup.userCacheCount}}</span>
                                </div>
                            </div>
                            <div class="card-bottom-don">
                                <div class="bottom-text">
                                    <img class="userAva" :src="videoModule.creatorBackup.avatar"/>
                                    <span>{{videoModule.creatorBackup.name}}</span>
                                    <img class="lv" src="../../../static/lv.png" alt="">
                                </div>
                                <div class="date">2022/10/20</div>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            <!-- 加载更多-->
            <div class="load_more_btn_wrapper" style="">
                <button v-loading.lock="isloading" class="more" @click="More()">加载更多</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {onMounted} from 'vue';
import useStore from '../../../store/course/course';
import { ElMessage } from 'element-plus';
import {reqVideoModule} from '../../../api/course/course';
let tagListStore = useStore();
// 定义展开收起的状态
const isFold = ref<boolean>(true);

const isSort = ref<boolean>(true)
const isSales = ref<boolean>(true)
const isViews = ref<boolean>(true)
const isTime = ref<boolean>(true)

// 定义加载的状态
const isloading=ref<boolean>(false)

// 单个标签按钮点击回调  两个参数 第一个参数每一项的单个标签 第二个参数每一项的全部标签
const tagHandler = async (dances:any, dancesList:any) => {
    // 判断 通过属性isClick属性判断是否存在（是否点击单个标签）如果已经点击（isClick:true）再次点击 修改isclick为false 
    if (dances.isClick) {
        dances.isClick = false;
        return
    }
    //   定义一个数组 用filter方法的返回值存储点击的单个isCheck属性值为true标签
    let result = dancesList.filter((item:any) => {
        return item.isClick
    })
    //   判断 通过这个数组的长度来判断每一项选择数组里面存储的数据超过三条时 提示
    if (result.length > 2) {
        ElMessage.info('同一筛选条件最多选择3个')
        return
    }
    // 点击单个标签isCheck属性为true
    dances.isClick = true;

    let res = await reqVideoModule();
    res.data.content.forEach((item:any)=>{
        tagListStore.liveclassData.splice(0,'',item)
    })
}

// 重置按钮点击回调
const resetHandler = () => {
    tagListStore.liveTagList.forEach((item:any) => {
        item.choises.forEach((dance:any) => {
            dance.isClick = false;
        })
    })
    tagListStore.getLiveClassData();
}
// 组件挂载完毕
onMounted(()=>{
    // 通知pinia仓库发请求 获取选择标签列表数据
    tagListStore.getLiveClass();
    // 通知pinia发请求 获取视频模块数据
    tagListStore.getLiveClassData();
})

// 点击更多按钮的回调
const More = async()=>{
    isloading.value = true;
    let result = await reqVideoModule()
    isloading.value = false
    result.data.content.forEach((item:any)=>{
        tagListStore.liveclassData.push(item)
    })
}

</script>

<style scoped>
.main {
    background: #f5f5f5;
}
/*会员专区*/
.memberCard {
    width: 1200px;
    margin: 0 auto;
    margin-top: 15px;
}
.members {
    width: 1200px;
    margin: 0 auto;
}
.members-top {
    font-size: 18px;
    margin: 0 0 16px;
    font-weight: 400;
}
.members-bottom {
    display: flex;
}
.userInfo {
    display: flex;
    padding-right: 200px;
}
.via>img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
    margin-top: 6px;
}
.viaInfo {
    margin-top: 12px;
    line-height: 20px;
}
.userName {
    color: #000;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
}
.grade {
    width: 40px;
    height: 18px;
    background: #ff2fa8;
    color: white;
    margin-left: 10px;
    border-radius: 5px;
    padding: 0 8px;
}
.grade>i {
    font-style: italic;
    font-size: 5px;
}
.viaInfo>p {
    margin-top: 8px;
    font-size: 12px;
    color: #f93684;
}
.intro {
    display: flex;
}
.video {
    display: flex;
    padding-right: 150px;
}
.videoImg>img {
    width: 58px;
    height: 58px;
    margin-right: 20px;
}
.videoInfo>p {
    text-align: center;
    cursor: pointer;
}
.studyFree {
    color: #000;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
}
.videoInfo>p>i {
    color: #f93684;
}
.videoInfo {
    margin-top: 17px;
}
.discountsImg>img {
    width: 58px;
    height: 58px;
    margin-right: 20px;
}
.discounts {
    display: flex;
    padding-right: 60px;
}
.discountInfo {
    margin-top: 15px;
}
.buy-vip {
    color: #000;
    text-decoration: none;
}
.discountInfos {
    margin-left: 7px;
}
/*会员登陆后*/
.to-vip {
    position: relative;
}
.to-vip-btn {
    background: #f93684;
    border: 0;
    width: 80px;
    height: 32px;
    border-radius: 20px;
}
.vip-bottom {
    font-size: 12px;
    color: #7D8090;
    position: absolute;
    bottom: 20px;
    left: 0px;
    right: 8px;
    top: 50px;
    text-decoration: none;
}
.vip-text {
    text-decoration: none;
    font-size: 12px;
    color: white;
}
/*标签选择*/
.tagCard {
    width: 1200px;
    margin: 0 auto;
    margin-top: 5px;
    overflow: hidden;
}
.selectCenter {
    width: 1200px;
    margin: 0 auto 10px;
    background-color: #fff;
    padding: 26px 30px;
    box-sizing: border-box;
    position: relative;
}
.selectContainer {
    overflow: hidden;
}
.fold {
    height: 150px;
}
.selectList {
    width: 1140px;
    font-size: 14px;
}
.selectType {
    float: left;
    padding: 7px 0px;
    color: #b1b5c1;
}
.selectMatter {
    width: 1045px;
    box-sizing: border-box;
}
.select-item {
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    padding: 7px 13px;
    margin: 0 24px 10px 0;
    color: #7d8090;
}
.actives {
    color: white;
    background: #f93684;
}
.reset {
    position: absolute;
    top: 32px;
    right: 40px;
    cursor: pointer;
    font-size: 14px;
    color: #f93684;
}
.folds {
    text-align: center;
    color: #f93684;
    font-size: 14px;
    margin: 20px 0 0;
    cursor: pointer;
}
/*综合排序*/
.screenContainer {
    display: flex;
}
.screen {
    width: 1200px;
    margin: 0 auto;
    margin-top: 5px;
}
.synthesis {
    padding-left: 5px;
    font-size: 14px;
}
.synthesis>span {
    padding-left: 5px;
    font-size: 14px;
}
.sales:hover {
    color: #f93684;
}
.sales {
    margin-left: 60px;
    font-size: 14px;
}
.views:hover {
    color: #f93684;
}
.priceup {
    margin-left: 60px;
    display: inline-block;
    font-size: 14px;
    color: #7d8090;
    cursor: pointer;
}
.views {
    margin-left: 60px;
    font-size: 14px;
}
.synthesis-price {
    font-size: 14px;
    margin-left: 60px;
}
.myZan .icon {
    margin-right: 5px;
}
.price-content {
    display: none;
}
.price-content {
    display: block;
    width: 120px;
    height: 80px;
    position: absolute;
    top: -20px;
    left: -45px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 4px rgb(220, 215, 215);
}
.price-item {
    color: #111;
    margin-top: 10px;
    padding: 5px;
    text-align: center;
}
.time:hover {
    color: #f93684;
}
.time {
    margin-left: 60px;
    font-size: 14px;
}
/*视频*/
.card_content_wrapper {
    margin-top: 5px;
    padding-bottom: 20px;
    width: 1200px;
    margin: 0 auto;
}
.card_content_wrapper .loadMoreList {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;
}
.content_card_item {
    padding: 0 8px;
    box-sizing: border-box;
    border-radius: 4px;
}
.card_item {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 224px;
    height: 280px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 4px;
}
.card-top {
    width: 100%;
    height: 126px;
    position: relative;
}
.card-top .cover {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
/* 鼠标滑过视频图片 */
.card-top .cover:hover {
    opacity: .6;
}
.play {
    position: absolute;
    top: 80px;
    left: 15px;
    display: inline-block;
    width: 30px;
    height: 30px;
}
.card-top span {
    position: absolute;
    color: #fff;
    top: 82px;
    right: 10px;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    border-radius: 12px;
    background: rgba(0, 0, 0, .6);
}
.card-bottom {
    width: 100%;
}
.card-bottom-top {
    width: 100%;
    display: flex;
    padding: 0px 6px;
    box-sizing: border-box;
    flex-direction: column;
    border-bottom: 1px solid #b1b5c1;
}
.video-text {
    font-size: 14px;
    color: #111;
    padding-top: 10px;
    line-height: 14px;
    height: 15px;
    width:196px;
    display: block;
    white-space: nowrap;  
    overflow: hidden;
    text-overflow: ellipsis;
}
.price-zan {
    margin-top:15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    box-sizing: border-box;
}
.price-zan span {
    display: inline-block;
}
.price-zan .price {
    color: #f93684;
    font-size: 16px;
}
.price-zan .zan {
    font-size: 12px;
    color: #b1b5c1;
}
.lv {
    width: 12px;
    height: 12px;
    margin-left: 5px;
}
.vip-video>img {
    width: 38px;
    height: 14px;
}
.card-bottom-don {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card-bottom-don .bottom-text span{
    display: inline-block;
    font-size: 12px;
    box-sizing: border-box;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    margin-left: 8px;
    overflow: hidden;
}
.bottom-text {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 6px;
    box-sizing: border-box;
}
.bottom-text .userAva {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
.date {
    font-size: 12px;
    color: #b1b5c1;
    padding-right: 5px;
    box-sizing: border-box;
}
.myZan {
    display: flex;
    font-size: 12px;
    align-items: center;
    height: 28px;
}
.myZan span {
    display: inline-block;
    margin-right: 20px;
}
/* 加载更多 */
.more{
    display: block;
    width: 140px;
    height: 40px;
    line-height: 38px;
    font-size: 14px;
    color: #82858e;
    border: 1px solid #eaecf0;
    border-radius: 4px;
    background: #fff;
    text-align: center;
    margin: 20px auto 0;
    cursor: pointer;
}
/* 控制视频 */
:v-deep .is-active {
    background-color: white !important;
    border-bottom: none !important;
}
:v-deep.el-menu-item:hover {
    background-color: white !important;
    color: #f93684 !important;
}
.videos {
    width: 224px;
    height: 126px;
}
.videoOne {
    width: 224px;
    height: 280px;
    font-size: 14px;
    background-color: white;
    border-radius: 4px;
}
.videoList {
    display: flex;
}
.videoContainer {
    width: 1200px;
    margin: 10px auto 0;
    padding-top: 20px;
}
.bs {
    width: 12px;
    height: 12px;
}
.avt {
    width: 24px;
    height: 24px;
}
.videoContainer {
    width: 1200px;
    margin: 0 auto;
    margin-top: 5px;
}
.videos {
    width: 224px;
    height: 380px;
    background: #f93684;
}
.price:hover {
    color: #f93684;
}
.synthesis:hover {
    color: #f93684;
}
.price {
    display: inline-block;
    font-size: 16px;
}
.meunCard {
    margin: -10px 0;
    overflow: hidden;
}
:v-deep .el-check-tag {
    background: #f93684;
    color: white;
    margin-left: 10px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    user-select: none;
    margin-right: 24px;
    margin-bottom: 10px;
}
.area {
    height: 80px;
    width: 1200px;
    margin: 0 auto;
}
.scroll {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.scroll>a {
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    padding: 20px 4px;
    margin: 0 20px;
    font-size: 18px;
    color: #111;
}
.active {
    display: block;
    border-bottom: 2px solid #111;
}
</style>
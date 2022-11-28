<template>
  <div class="media">
    <div class="top   containRight">
      <span>浏览记录</span>
    </div>
    <div class="center  containRight">
      <div class="search-wrap">
        <div class='search'>
          <el-input :prefix-icon="Search" size="normal" class="input" v-model="search"></el-input>
          <el-button class="search-btn">搜索</el-button>
        </div>
        <div class="delete">
          <span v-show="show" @click="showDel">批量删除</span>
          <div v-show="!show" class="showDel">
            <span @click="cancel">取消</span>
            <span>确定</span>
            <span>全选</span>
          </div>
        </div>
      </div>
      <div v-show="!search.length" class="wrapper containRight">
        <div class="more" v-for="(item, index) in data" :key="item.id">
          <div class="more-left">
            <img class="img" :src="item.cover">
            <div class="title">
              <span>{{ item.title }}</span>
              <span style="font-size : 14px">动态</span>
              <div class="name">
                <img class="avatar" :src="item.avatar">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
          <span>{{ item.updateTime }}</span>
          <el-button class="deleteBtn" @click="del(index)">删除</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref, onMounted, computed } from "vue";
import moment from 'moment'
//引入接口
import { reqTraining } from '@/api/tuo_api/training/index'
//模拟响应式数据
let search = ref('')
//定义批量删除显示与隐藏
let show = ref(true)
// 存储历史观看数据
let data = ref([])
// 存储筛选后的历史观看数据
let dataList = ref([])
onMounted(() => {
  getHistory()
});
const getHistory = async () => {
  let result: any = await reqTraining();
  data.value = result.content.map(item => {
    let time = moment(item.updateTime).format('MM-DD');
    return {
      id: item.id,
      // 标题
      title: item.momentTitle,
      // 视频状态:动态/直播...
      videoState: item.momentSubject,
      //封面
      cover: item.momentBackup.cover[0],
      // 点击跳转播放视频连接
      router: item.momentBackup.router,
      // 头像
      avatar: item.momentBackup.creatorBackup.avatar,
      //名字
      name: item.momentBackup.creatorBackup.name,
      // 时间戳
      updateTime: time
    }
  })
}
// 点击删除当前一行
const del = (index: any) => {
  data.value.splice(index, 1)
}
// 点击批量删除
const showDel = () => {
  show.value = false
}
// 点击取消
const cancel =()=>{
  show.value=true
}
</script>

<style scoped>
.media {
  width: 1020px;
}

.top {
  height: 72px;
  margin-bottom: 10px;
  display: flex;
  position: relative;
}

.containRight {
  background-color: #fff;
  border-radius: 4px;
}

.top span {
  font-size: 14px;
  display: block;
  padding: 28px 30px
}

.top .active {
  position: absolute;
  left: 26px;
  top: 51px;
  background-color: #f93684;
  width: 37px;
  height: 4px;
}

.center {
  margin-bottom: 20px;
}

.center .search-wrap {
  padding: 14px 40px 10px 31px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}

.center .search {
  height: 40px;
}

.center .input {
  color: #7d8090;
  width: 270px;
  height: 40px;
}

.center .search-btn {
  width: 62px;
  height: 40px;
  background: #f5f7f9;
  border-radius: 4px;
  color: #7d8090;
  font-size: 14px;
  display: inline-block;
  padding: 12px 17px;
  margin-left: 10px;
}

.center .wrapper {
  padding: 0 35px 0 22px;
  margin-bottom: 20px;
  height: auto;
}

.center .more {
  width: 963px;
  height: 140px;
  font-size: 16px;
  padding: 10px 0;
  color: #111;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.center .more1 {
  width: 963px;
  height: 60px;
  border-bottom: 1px solid #ebeef5;
  font-size: 12px;
  color: #909399;
  text-align: center;
  line-height: 60px;
}

.center .wrapper1 {
  height: 700px;
  padding: 0 35px 0 22px;
  margin-bottom: 20px;
}

.wrapper1 {
  padding: 0 35px 0 22px;
}

.center .more .img {
  width: 169px;
  height: 101px;
}

.center .more .more-left {
  width: 680px;
  display: flex;
}

.center .more .more-left .title {
  width: 325px;
  height: 101px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left
}

.center .more .more-left .name {
  display: flex;
  justify-content: flex-start;
  align-items: center;

}

.center .more .more-left .avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.showDel span{
  font-size: 16px;
  margin:0 10px;
  color: #f93684;
}
>>>.deleteBtn {
  color: #bbb;
  border: transparent
}

>>>.deleteBtn:hover {
  color: #f93684
}
</style>

<template>
<div class="card-container">
<div class="card" v-for="(item ,index) in video " :key="item.id">
    <div class="card-img" >
      <!-- 视频图片 -->
      <a class="card-picture">
        <img :src="item.cover[0]">
        
      <el-icon color="#C0C0C0" :size="20"><VideoPlay /></el-icon>
      </a>
    </div>

    <!-- 卡片标题和浏览量、点赞、收藏等 -->
    <div class="card-main" >
      <div class="card-title">
        <span class="production">作品</span>
        <span class="title">{{item.title}}</span>
      </div>

      <p class="browse-people">
        2022人浏览
      </p>

      <!-- 点赞、消息、收藏 -->
      <ul>
        <li>
          <el-icon><Pointer /></el-icon><span>0</span>
        </li>
        <li>
          <el-icon><ChatDotRound /></el-icon><span>12</span>
        </li>
        <li>
          <el-icon><Star /></el-icon><span>100</span>
        </li>
      </ul>
    </div>

    <!-- 分割线 -->
    <div style="height: 1px; background-color: #ccc; margin-top:-20px"></div>

    <!-- 卡片底部 -->
    <div class="card-footer">
      <div class="footer-l">
        <div class="avatar">
          <img class="avatar" src="https://rs.dance365.com/photo/f70e49155ce6401999da5449472f4450_rs_ac2d1cb37263462b8a65444fe88c23d2.jpg">
        </div>
        <span>77</span>
      </div>
      <span class="time-date">11-22</span>
    </div>
  </div>
</div>

</template>

<script setup lang='ts'>
import {onMounted,ref} from "vue";
import {reqVideo} from "@/api/resources/index";
// 存储轮播图数据
let video = ref([]);
onMounted(async () => {
  let result: any = await reqVideo();
  video.value = result.content;
  // video.value = result.content.map((item) => {
  //   return {
      
  //     id:item.id,
  //     title: item.title,
  //     // 图片1
  //     imgUrl:item.cover[0],

  //   };
  // });
});
</script>

<style lang="less" scoped>
.card-container{
  display: grid;
  grid-template-columns: repeat(5,1fr);
}
.card {
 
  height: 280px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 20px 20px 0;
  overflow: hidden;

  // 卡片头部
  .card-img {
    overflow: hidden;
    .card-picture {
      display: block;
      width: 100%;
      height: 126px;
      background-color: #333;
      position: relative;

    }

    img {
      width: 100%;
      // height: 100%;
      // background-size: cover;
    }
  }

  // 卡片主体
  .card-main {
    padding: 10px;

    .card-title {
      display: flex;
      line-height: 20px;
      margin-bottom: 15px;

      .production {
        font-size: 12px;
        border: 1px solid #333;
        border-radius: 4px;
        margin-right: 10px;
      }

      .title {
        display: block;
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .browse-people {
      font-size: 12px;
      color: #ccc;
      margin-bottom:-8px;
    }

    ul {
      display: flex;
      list-style: none;
      margin-left:-45px;

      li {
        margin-right: 10px;
        

        i {
          color: #ccc;
          margin-right: 4px;
        }
      }

      span {
        font-size: 12px;
        color: #ccc;
      }
    }
  }

  // 分割线
  .el-divider {
    margin: 0;
  }

  // 卡片底部
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-size: 5px;

    .footer-l {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .avatar {
        width: 30px;
        height: 30px;
        background-color: #ccc;
        border-radius: 50%;
        margin-right: 10px;
      }

      span {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .time-date {
      color: #ccc;
    }
  }

}
.el-icon{
  position: absolute;
    bottom: 6px;
    left: 10px;
    display: inline-block;
    width: 30px;
    height: 30px;
}
</style>
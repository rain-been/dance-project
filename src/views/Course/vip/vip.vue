<template>
  <el-card class="vip">
    <div class="title">会员专区</div>
    <div class="main">
      <div class="left">
        <p class="avatar"></p>
      </div>
      <div class="vip-min">
        <div class="item">
          <span class="text">登录</span>
          <a class="desc" style="color: #fa5e9d">开通会员尊享10大特权</a>
        </div>
        <div class="item">
          <img
            class="icon"
            src="https://rs.dance365.com/teach_video_free.png"
          />
          <span class="text"
            >以下<span style="color: #fa5e9d">{{ total }}</span>个会员专区课程全部免费学习</span>
        </div>
        <div class="item">
          <img
            class="icon"
            src="https://rs.dance365.com/member_preferential.png"
          />
          <span class="text">购买非会员专区课程可获会员立减优惠</span>
        </div>
      </div>
      <div class="btn">
        <el-button class="btn-top">立即开通</el-button>
        <a>查看/开通 </a>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  total: number;
}>();
</script>

<style lang="less" scoped>
.vip {
  width: 95%;
  height: 140px;
  margin-top: 10px;

  .title {
    width: 100%;
    position: relative;
    top: 10px;
    left: 30px;
  }
  .main {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    .left {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;
      left: 40px;
      background: url("https://rs.dance365.com/default_head@3x.png?imageView2/0/w/100/h/100/format/webp/ignore-error/1");
      background-size: cover;
      background-position: 50%;
      -ms-flex-negative: 0;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .vip-min {
      padding: 20px 20px;
      box-sizing: border-box;
      display: flex;
      .item:first-child {
        width: 220px;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #dee2e6;
        .text {
          text-align: left;
          width: 172px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      .item {
        width: 330px;
        display: flex;
        justify-content: center;
        .icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .text {
          text-align: center;
          width: 172px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
    .btn {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      .btn-top {
        background-color: rgb(249, 54, 132);
        border-radius: 30px;
      }
    }
  }
}
</style>

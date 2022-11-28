<template>
    <div>
      <div class="right">
        <el-card class="topHeader">
          <div class="title">我的优惠券 ：</div>
        </el-card>
        <el-card class="content">
          <div class="searchInfo">
            <div class="search">
              <el-input placeholder="请输入优惠券兑换码" v-model="couponsSearch">
              </el-input>
              <button class="link-button">兑换</button>
            </div>
            <div>
                <div class="link-button">
                  <i class="iconfont icon-lingjuanzhongxin"></i>
                  领券中心</div>
                <div class="link-button">
                  <i class="iconfont icon-youhuijuan"></i>
                  历史优惠劵</div>
            </div>
          </div>
          <div class="message">优惠券仅用于线下课</div>
          <div class="couponsData">暂无数据</div>
        </el-card>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "coupons",
  });
  </script>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  const couponsSearch = ref("");
  
  const route = useRoute();
  onMounted(() => {
    // console.log(route.meta.title);
  });
  </script>
  <style scoped lang="scss">
  .right {
    width: 1020px;
    margin: 0 0 20px;
    .topHeader {
      margin: 0 0 10px;
      .title {
        padding: 6px 10px;
        color: #111;
        font-size: 14px;
      }
    }
    .content {
      width: 100%;
      padding: 10px;
      .searchInfo {
          display: flex;
          justify-content: space-between;
          align-items: center;
        .search {
          //   width: 480px;
          height: 40px;
          .el-input {
            width: 480px;
          }
          :deep(.el-input__wrapper) {
            vertical-align: middle;
            height: 40px;
            line-height: 38px;
            border-radius: 4px;
            padding: 0 15px;
            color: #606266;
            border: 1px solid #dcdfe6;
            box-shadow: none;
            background-color: #f5f7f9 !important;
            border-color: #eaecf0 !important;
          }
          button {
            vertical-align: middle;
            width: 100px;
            height: 40px;
            margin-left: 11px;
            color: #fff;
            background: linear-gradient(#ff2828, #ff43f2);
            border-radius: 3px;
            border: 1px solid #f936c2;
          }
        }
        .link-button {
          font-size: 14px;
          color: #111;
          display: inline-block;
          margin-left: 42px;
          cursor: pointer;
          i {
              width: 14px;
              height: 14px;
              line-height: 14px;
          }
        }
      }
      .message {
        margin-top: 20px;
        font-size: 14px;
        color: #db596c;
      }
      .couponsData {
        font-size: 14px;
        padding: 20px 0px;
        text-align: center;
        height: 200px;
        color: #909399;
      }
    }
  }
  </style>
  

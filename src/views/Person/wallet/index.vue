<template>
    <div>
      <div class="right">
        <el-card class="topHeader">
          <div class="title">我的钱包余额 ：</div>
        </el-card>
        <el-card class="content">
          <div class="wallet-title">
            钱包余额
            <div class="tip_icon">
              <el-icon class="icon_icon" default><WarningFilled /></el-icon>
            </div>
          </div>
          <div class="wallet-price">
            <div class="price">￥0.00</div>
          </div>
          <div class="button-cash">
            <!-- <el-button color="#f93684" disabled height="50px" size="large"
              >提现
              </el-button> -->
            <button disabled class="withdraw">提现</button>
          </div>
          <div class="connection">
            <span class="service">
              <div class="foot_icon">
                <el-icon class="icon_icon_service" :size="35"
                  ><Service
                /></el-icon>
                <span class="tip" style="font-sixe: 14px" color="#909399;"
                  >联系客服</span
                >
              </div>
            </span>
          </div>
        </el-card>
        <el-card class="foot">
          <div class="wallet-detail">
            钱包明细
            <div class="foot-icon1">
              <el-icon class="icon_icon"><WarningFilled /></el-icon>
            </div>
          </div>
          <div class="foot-paging">
            <span class="nodata">暂无数据</span>
          </div>
        </el-card>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "wallet",
  });
  </script>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { WarningFilled } from "@element-plus/icons-vue";
  import { Service } from "@element-plus/icons-vue";
  
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
      margin: 0 0 10px;
      .wallet-title {
        font-size: 16px;
        color: #111;
        text-align: center;
        position: relative;
        margin: 32px 0;
        .tip_icon {
          position: absolute;
          top: -13px;
          width: 15px;
          height: 30px;
          right: 425px;
          .icon_icon {
            width: 100%;
            height: 100%;
          }
        }
      }
      .wallet-price {
        font-size: 26px;
        color: #111;
        text-align: center;
        padding: 60px 0 51px;
        font-weight: 700;
      }
      .button-cash {
        text-align: center;
        height: 50px;
        display: block;
        .withdraw {
          width: 180px;
          height: 50px;
          margin: 0 auto;
          display: block;
          color: #fff;
          background: linear-gradient(#ff2828, #d043ff);
          border: 1px solid #fc9bc2;
          cursor: not-allowed;
        }
      }
      .connection {
        text-align: center;
        padding: 111px 0 16px;
        .service {
          color: #7d8090;
          font-size: 18px;
          .foot_icon {
            display: inline-block;
            cursor: pointer;
            font-size: 14px;
            vertical-align: middle;
            .icon_icon_service {
              width: 20px;
              height: 20px;
              margin-right: 12px;
              vertical-align: text-bottom;
              transform: translateY(-1px);
            }
          }
        }
      }
    }
    .foot {
      margin-bottom: 20px;
      .wallet-detail {
        color: #111;
        font-size: 14px;
        padding-bottom: 23px;
        position: relative;
      }
      .foot-icon1 {
        position: absolute;
        top: 0;
        left: 65px;
        width: 30px;
        height: 15px;
        .icon_icon {
          width: 100%;
          height: 100%;
        }
      }
  
      .foot-paging {
        max-height: 364px;
        overflow-x: hidden;
        overflow-y: auto;
        border-top: 1px solid #e3e3e3;
        font-size: 14px;
        padding: 20px 0px;
        text-align: center;
        color: #909399;
      }
    }
  }
  </style>
  

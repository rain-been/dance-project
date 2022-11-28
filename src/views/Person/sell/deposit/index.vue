<template>
    <div>
      <div class="right">
        <el-card class="topHeader">
          <div class="title">我的保证金 ：</div>
        </el-card>
        <el-card class="content">
          <div class="deposit-title">
            保证金余额
            <div class="tip_icon">
              <el-icon class="icon_icon" default><WarningFilled /></el-icon>
            </div>
          </div>
          <div class="deposit-title-price">
            <div class="price">￥0.00</div>
            <div class="price-line">
              <div class="text">
                <span class="payment" style="color: rgb(102, 102, 102)">
                  待补缴金额：
                </span>
                <span class="maincolor">￥0.00</span>
                <span class="to">></span>
              </div>
            </div>
          </div>
          <div class="space-amount">
            <div class="amount">
              <p>可提现余额</p>
              <p>0.00</p>
            </div>
            <div class="amount">
              <p>不可提现余额</p>
              <p>0.00</p>
            </div>
          </div>
          <div class="btn">
            <div class="left">提现</div>
            <div class="right">充值</div>
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
          <div class="deposit-detail">保证金明细</div>
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
    name: "deposit",
  });
  </script>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { WarningFilled, Service } from "@element-plus/icons-vue";
  
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
      .deposit-title {
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
      .deposit-title-price {
        text-align: center;
        .price {
          font-size: 26px;
          color: #111;
          text-align: center;
          padding: 20px 0 2px;
          font-weight: 700;
        }
        .price-line {
          cursor: pointer;
          display: inline-block;
          color: #121212;
          margin: 18px 0 0;
  
          font-size: 14px;
          background: #f5f7f9;
          border-radius: 16px;
          font-weight: 700;
          .text {
            width: 183px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            .payment {
              cursor: pointer;
              text-align: center;
              margin-top: 18px;
              font-size: 14px;
              font-weight: 700;
            }
            .maincolor {
              color: #36f949;
              text-align: center;
              font-size: 14px;
              font-weight: 700;
              margin-right: 5px; 
            }
            .to{
              font-family: SimSon;
              color: #aaa;
            }
  
          }
        }
      }
      .space-amount {
        margin: 0 auto;
        width: 200px;
        margin-top: 20px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        .amount {
          display: block;
          p {
            margin: 0;
            margin-bottom: 10px;
            padding: 0;
            color: #7d8090;
            font-size: 14px;
            text-align: center;
          }
          p:nth-of-type(2) {
            color: #121212;
            font-size: 20px;
            text-align: center;
          }
        }
      }
      .btn {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        width: 400px;
        .left {
          color: #f93643;
          border: 1px solid #f93697;
          cursor: pointer;
          width: 170px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          border-radius: 8px;
        }
        .right {
          color: #fff;
          background: linear-gradient(#ff2828, #ff43ec);
          cursor: pointer;
          width: 170px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          border-radius: 8px;
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
      margin-top: 10px;
      margin-bottom: 20px;
      .deposit-detail {
        color: #111;
        font-size: 14px;
        padding-bottom: 23px;
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
  

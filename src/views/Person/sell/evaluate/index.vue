<template>
    <div>
      <div class="right">
        <el-card class="topHeader">
          <div class="title">评价管理 ：</div>
          <div class="panel">
            <div class="left-panel">
              <div>
                近90天续购率 :
                <span calss="maincolor">暂无续购</span>
              </div>
            </div>
            <div class="right-panel">
              <div>
                累计评价：
                <span calss="maincolor">暂无评价</span>
                累计续购率：
                <span calss="maincolor">暂无续购</span>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="content">
          <div class="shop-evaluate">商品评价</div>
          <div>
            <el-tabs v-model="activeName" class="demo-tabs">
              <el-tab-pane label="全部(0)" name="all"></el-tab-pane>
              <el-tab-pane label="近90天(0)" name="nearly"></el-tab-pane>
              <el-tab-pane label="五星(0)" name="five"></el-tab-pane>
              <el-tab-pane label="四星(0)" name="four"></el-tab-pane>
              <el-tab-pane label="三星(0)" name="three"></el-tab-pane>
              <el-tab-pane label="二星(0)" name="two"></el-tab-pane>
              <el-tab-pane label="一星(0)" name="one"></el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "evaluate",
  });
  </script>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  // import type { TabsPaneContext } from "element-plus";
  
  const route = useRoute();
  onMounted(() => {
    // console.log(route.meta.title);
  });
  const activeName = ref("nearly");
  // const handleClick = (tab: TabsPaneContext, event: Event) => {
  //   console.log(tab, event);
  // };
  </script>
  <style scoped lang="scss">
  .right {
    width: 1020px;
    margin: 0 0 20px;
    :deep(.el-card__body) {
      padding: 0 30px;
    }
    .topHeader {
      margin: 0 0 10px;
      .title {
        padding: 6px 10px;
        color: #111;
        font-size: 14px;
        height: 60px;
        line-height: 60px;
      }
      .panel {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        padding: 6px 10px;
        font-size: 15px;
        border-top: 1px solid #e3e3e3;
        span {
          color: #f93684;
        }
  
        .left-panel {
          display: block;
        }
        .right-panel {
          display: block;
          margin-right: 24px;
        }
      }
    }
    .content {
      width: 100%;
      padding-top: 10px;
      height: 700px;
      background: url("../../../../assets/images/trainingRoom/none.png") no-repeat
        center;
      background-color: #fff;
      :deep(.el-tabs__item.is-active) {
        color: #f93684;
      }
      :deep(.el-tabs__active-bar) {
        background-color: #f93684;
      }
      :deep(.el-tabs__item:hover) {
        color: #f93684;
        cursor: pointer;
      }
      .shop-evaluate {
        padding: 10px 0;
        font-size: 16px;
      }
      .demo-tabs > .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
      }
    }
  }
  </style>
  
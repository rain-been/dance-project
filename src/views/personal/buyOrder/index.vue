<template>
  <div>
    <div class="right">
      <!-- 菜单栏 -->
      <el-card class="topHeader">
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          style="border: 0px"
        >
          <el-menu-item index="1"
            ><div class="text">全部订单</div></el-menu-item
          >
          <el-menu-item index="2"><div class="text">待付款</div></el-menu-item>
          <el-menu-item index="3"><div class="text">待评价</div></el-menu-item>
          <el-menu-item index="4"
            ><div class="text">待服务/发货</div></el-menu-item
          >
          <el-menu-item index="5"><div class="text">待确认</div></el-menu-item>
          <el-menu-item index="6"
            ><div class="text">退款/售后</div></el-menu-item
          >
        </el-menu>
      </el-card>
      <el-card class="content">
        <!-- 搜索 -->
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item style="margin-right: 10px !important">
            <div class="search">
              <el-input class="w-50 m-2">
                <template #prefix>
                  <el-icon class="el-input__icon"><search /></el-icon>
                </template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="searchBtn" size="large" color="#f5f7f9">
              <span>搜索</span>
            </el-button>
          </el-form-item>
        </el-form>
        <!-- 表格 -->
        <div class="centerTable">
          <el-table style="width: 100%">
            <el-table-column label="订单信息" width="410" />
            <el-table-column label="购买数量" width="150" />
            <el-table-column label="单价" />
            <el-table-column label="实付" />
            <el-table-column label="状态" />
            <el-table-column label="操作" />
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "buyOrder",
});
</script>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { Search } from "@element-plus/icons-vue";

const route = useRoute();
onMounted(() => {
  // console.log(route.meta.title);
});
</script>
<style scoped lang="scss">
.right {
  width: 1020px;
  margin: 0 0 20px;
  :deep(.el-card__body) {
    padding: 0;
  }
  .topHeader {
    margin: 0 0 10px;
    .title {
      padding: 6px 10px;
      color: #111;
      font-size: 14px;
    }
    :deep(.el-menu-item.is-active) {
      color: #111;
      background-color: fff;
      --el-menu-hover-bg-color: #fff;
      .text::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 37px;
        height: 4px;
        transform: translateX(-50%);
        background-color: #f93684;
        border-radius: 2%;
        transition: background-color 0.3s ease;
      }
    }
    :deep(.el-menu-item:hover) {
      background-color: #fff;
      color: #111111;
    }
    :deep(.el-menu--horizontal > .el-menu-item) {
      padding: 0 30px;
      .text {
        padding: 8px 0 4px 0;
      }
    }
    :deep(.el-menu--horizontal > .el-menu-item.is-active) {
      position: relative;
      border-bottom: 0px solid #fff;
      color: #111111 !important;
    }
  }
  .content {
    width: 100%;
    padding: 30px;
    .search {
      :deep(.el-input__wrapper) {
        vertical-align: middle;
        width: 268px;
        height: 38px;
        line-height: 38px;
        border-radius: 4px;
        padding: 0 15px;
        color: #606266;
        border: 1px solid #dcdfe6;
        box-shadow: none;
        background-color: #f5f7f9 !important;
        border-color: #eaecf0 !important;
      }
    }
    .searchBtn {
      span {
        color: #7d8090;
      }
    }
    .centerTable {
      height: 700px;
      :deep(.el-table th.el-table__cell) {
        background-color: #f5f7f9;
        text-align: center;
        color: #393939;
        font-size: 14px;
        padding: 10px 0;
        font-weight: 400;
      }
    }
  }
}
</style>

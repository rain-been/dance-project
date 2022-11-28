<template>
    <div>
<<<<<<< HEAD
      <div class="right">
        <!-- 菜单栏 -->
        <el-card class="topHeader">
          <div class="title">
            代首款 ：
            <span class="tip_icon">
              <el-icon class="icon_icon" default><WarningFilled /></el-icon>
            </span>
          </div>
        </el-card>
        <el-card class="content">
          <div class="contentHeader">
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
  
            <span class="price">累计待收款：¥ 0.00</span>
          </div>
          <!-- 表格 -->
          <div class="centerTable">
            <el-table style="width: 100%">
              <el-table-column label="项目" width="410" />
              <el-table-column label="金额" width="300" />
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
    name: "payments",
  });
  </script>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { Search } from "@element-plus/icons-vue";
  import { WarningFilled } from "@element-plus/icons-vue";
  
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
      :deep(.el-card__body) {
        padding: 0;
      }
      width: 100%;
      padding: 30px;
      .contentHeader {
        display: flex;
        justify-content: space-between;
        .search {
          :deep(.el-input__wrapper) {
            vertical-align: middle;
            width: 255px;
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
        .price {
          font-size: 14px;
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
  
=======
        <h2>payments</h2>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'payments'
})
</script>

<script lang = "ts" setup>

</script>

<style scoped>

</style>
>>>>>>> 857d9d6b9c906b5a357dd74d2d2680d45a800d8a

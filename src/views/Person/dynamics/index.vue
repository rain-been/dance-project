<template>
    <div>
<<<<<<< HEAD
      <div class="right">
        <el-card class="topHeader">
          <div class="title">资源动态 ：</div>
        </el-card>
        <el-card class="content">
          <!-- 搜索框/下拉选框 -->
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item style="margin-right: 10px !important">
              <div class="search">
                <el-input v-model="resourceSearch" class="w-50 m-2">
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
            <el-form-item label="资源类型:" class="resSelected">
              <el-select
                v-model="resourceTypeValue"
                :popper-append-to-body="false"
              >
                <el-option
                  v-for="resItem in resourceType"
                  :key="resItem.id"
                  :label="resItem.name"
                  :value="resItem.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="状态:" class="resSelected">
              <el-select
                v-model="resourceStateValue"
                :popper-append-to-body="false"
              >
                <el-option
                  v-for="stateItem in resourceState"
                  :key="stateItem.id"
                  :label="stateItem.name"
                  :value="stateItem.id"
                />
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 表格 -->
          <div class="centerTable">
            <el-table :data="resourceList" style="width: 100%">
              <el-table-column label="内容" width="410" />
              <el-table-column label="发布时间" width="150" />
              <el-table-column label="数据" />
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
    name: "dynamics",
  });
  </script>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { Search } from "@element-plus/icons-vue";
  
  const route = useRoute();
  
  // 搜索资源
  const resourceSearch = ref("");
  
  // 资源类型
  const resourceType = ref([
    { id: "t1", name: "全部资源" },
    { id: "t2", name: "作品" },
    { id: "t3", name: "教程" },
    { id: "t4", name: "动态" },
    { id: "t5", name: "专题" },
  ]);
  const resourceTypeValue = ref("t1");
  // 资源状态
  const resourceState = ref([
    { id: "s1", name: "全部" },
    { id: "s2", name: "已发布" },
    { id: "s3", name: "未发布" },
    { id: "s4", name: "审核中" },
    { id: "s5", name: "审核未通过" },
    { id: "s6", name: "仅主页可见" },
  ]);
  const resourceStateValue = ref("s1");
  
  // 资源状态表格数据
  const resourceList = ref([]);
  onMounted(() => {
    // console.log(route.meta.title)
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
        color: rgb(17, 17, 17);
        font-size: 14px;
      }
    }
    .content {
      width: 100%;
      height: 700px;
      .search {
        :deep(.el-input__wrapper) {
          vertical-align: middle;
          width: 220px;
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
      .resSelected {
        :deep(.el-input__wrapper) {
          width: 189px;
          height: 32px;
          border-radius: 4px;
          border: 1px solid #dcdfe6;
          box-shadow: none;
          // font-size: inherit;
          font-size: 14px;
          // background-color: pink;
        }
  
        :deep(.el-select .el-input__wrapper.is-focus) {
          box-shadow: 0 0 0 1px #f93684 inset !important;
        }
        :deep(.el-select) {
          --el-select-input-focus-border-color: #f93684;
        }
  
        :deep(.el-form-item__label) {
          font-weight: normal;
          font-size: 16px;
          color: #000;
        }
  
        :deep(.el-input__inner) {
          font-size: 13px;
        }
      }
      .centerTable {
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
  
  .el-select-dropdown__item.selected {
    color: #f93684;
    font-weight: 700;
  }
  </style>
  
  <style></style>
  
=======
        <h2>dynamics</h2>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'dynamics'
})
</script>

<script lang = "ts" setup>

</script>

<style scoped>

</style>
>>>>>>> 857d9d6b9c906b5a357dd74d2d2680d45a800d8a

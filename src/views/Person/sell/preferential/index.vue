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
              ><div class="text">优惠管理 ：</div></el-menu-item
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
  
            <!-- 下拉框 -->
            <el-form-item label="商品类型：" class="resSelected">
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
          </el-form>
  
          <div class="addGoods">
            <span>添加优惠商品 <i>0</i> 件</span>
            <el-button text @click="dialogVisible = true"
              >+ 添加优惠价商品</el-button
            >
          </div>
  
          <!-- 表格 -->
          <div class="centerTable">
            <el-table style="width: 100%">
              <el-table-column label="内容" width="250" />
              <el-table-column label="发布时间" width="140" />
              <el-table-column label="开课日期" />
              <el-table-column label="优惠时间" />
              <el-table-column label="原价" />
              <el-table-column label="优惠价" />
              <el-table-column label="平台服务费" />
              <el-table-column label="操作" />
            </el-table>
          </div>
        </el-card>
        <!-- 弹框 -->
        <el-dialog
          v-model="dialogVisible"
          title="添加优惠价"
          width="50%"
          
          class="dialog"
        >
          <div>
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
  
            <!-- 下拉框 -->
            <el-form-item label="商品类型：" class="resSelected">
              <el-select
                v-model="resourceTypeValue"
                :popper-append-to-body="false"
                width="150"
              >
                <el-option
                  v-for="resItem in resourceType"
                  :key="resItem.id"
                  :label="resItem.name"
                  :value="resItem.id"
                />
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 表格 -->
          <div class="centerTable">
            <el-table style="width: 100%">
              <el-table-column label="内容" width="200" />
              <el-table-column label="发布时间" width="100" />
              <el-table-column label="开课日期" />
              <el-table-column label="价格" />
              <el-table-column label="取消全选" />
            </el-table>
          </div>
          </div>
          <template #footer>
            <span class="dialog-footer">
              <el-button  @click="dialogVisible = false" color="#f93684"  plain="true" >取消</el-button>
              <el-button color="#f93684"  @click="dialogVisible = false"  disabled>
                加入优惠
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "preferential",
  });
  </script>
  
  <script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import { Search } from "@element-plus/icons-vue";
  
  const route = useRoute();
  
  // 商品类型
  const resourceType = ref([
    { id: "t1", name: "全部" },
    { id: "t2", name: "视频课" },
    { id: "t3", name: "线下课" },
    { id: "t4", name: "直播课" },
  ]);
  const resourceTypeValue = ref("t1");
  
  //弹框
  const dialogVisible = ref(false)
  
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
      padding: 21px 33px 26px 26px;
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
      .addGoods {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
        margin: 10px 0 20px;
        i {
          color: #f93684;
          font-weight: 400;
          font-style: normal;
        }
        button {
          padding: 7px 15px;
          font-size: 12px;
          border-radius: 3px;
          color: #fff;
          background-color: #f93684;
          border: 1px solid #f93684;
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
    }
  
    .dialog{
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
  
      .centerTable {
        height: 300px;
        :deep(.el-table th.el-table__cell) {
          background-color: #f5f7f9;
          text-align: center;
          color: #393939;
          font-size: 14px;
          padding: 10px 0;
          font-weight: 400;
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
    }
  }
  
  .el-select-dropdown__item.selected {
    color: #f93684;
    font-weight: 700;
  }
  </style>

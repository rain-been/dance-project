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
            ><div class="text">全部商品</div></el-menu-item
          >
          <el-menu-item index="2"><div class="text">线下课</div></el-menu-item>
          <el-menu-item index="3"><div class="text">视频课</div></el-menu-item>
          <el-menu-item index="4"><div class="text">直播课</div></el-menu-item>
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

          <el-form-item label="发布状态：" class="resSelected">
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
          <el-form-item label="发布时间：">
            <!-- 日历 -->
            <el-date-picker
              v-model="data1"
              style="width: 249px; height: 30px"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-form>

        <!-- 表格 -->
        <div class="centerTable">
          <el-table style="width: 100%">
            <el-table-column label="内容" width="330" />
            <el-table-column label="发布时间" width="150" />
            <el-table-column label="价格" />
            <el-table-column label="数据" />
            <el-table-column label="销售/销售额" />
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
  name: "goods",
});
</script>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Search } from "@element-plus/icons-vue";

onMounted(() => {
  // console.log(route.meta.title);
});
const data1 = ref("");

// 资源类型
const resourceType = ref([
  { id: "t1", name: "全部" },
  { id: "t2", name: "已发布" },
  { id: "t3", name: "未发布" },
  { id: "t4", name: "审核中" },
  { id: "t5", name: "审核未通过" },
  { id: "t6", name: "已下架" },
  { id: "t7", name: "仅主页可见" },
]);
const resourceTypeValue = ref("t1");
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
    padding: 11px 14px;
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
        width: 129px;
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

<style>
.el-date-table td.today .el-date-table-cell__text {
 color: #f93684;
 font-weight: 700;
}
.el-date-table td.available:hover {
 color: #f93684;
}
.el-date-table td.current:not(.disabled) .el-date-table-cell__text {
 color: #fff;
 background-color: #f93684;
}
.el-picker-panel__icon-btn:hover {
 color: #f93684;
}
.el-date-picker__header-label:hover {
 color: #f93684;
}
.el-year-table td.today .cell {
 color: #f93684;
 font-weight: 700;
}
.el-year-table td .cell:hover {
 color: #f93684;
}
.el-date-table td.end-date .el-date-table-cell__text, .el-date-table td.start-date .el-date-table-cell__text{
  background-color: #f93684;
}
.el-range-editor.is-active{
  box-shadow: 0 0 0 1px #f93684 inset
}
.el-range-editor.is-active:hover{
  box-shadow: 0 0 0 1px #f93684 inset
}
</style>

<template>
  <div class="course">
    <el-card shadow="always">
      <!-- nav 导航 -->
      <div class="nav">
        <div class="nav-item">
          <router-link
            to="/vip"
            class="text"
            :class="changeNum == -1 ? 'active' : ''"
            @click="toRoute(-1)"
            >会员专区</router-link
          >
          <router-link
            to="/videolesson"
            class="text"
            :class="changeNum == 1 ? 'active' : ''"
            @click="toRoute(1)"
            >视频课</router-link
          >
          <router-link
            to="/online"
            class="text"
            :class="changeNum == 2 ? 'active' : ''"
            @click="toRoute(2)"
            >直播课</router-link
          >
          <a
            to="/offline"
            class="text"
            :class="changeNum == 3 ? 'active' : ''"
            @click="toRoute(3)"
            >线下课</a
          >
          <router-link
            to="/theme"
            class="text"
            :class="changeNum == 4 ? 'active' : ''"
            @click="toRoute(4)"
            >主题</router-link
          >
        </div>
      </div>
    </el-card>
    <el-card class="content">
      <router-view></router-view>
    </el-card>
      
  </div>
  
</template>

<script lang = "ts" setup>
import { ref } from "vue";

const changeNum = ref(-1);
const toRoute = (num: number) => {
  if (changeNum.value != num) {
    changeNum.value = num;
  }
};
</script>

<style lang="less" scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-card {
  --el-card-padding: 0px;
}

.course {
  width: 100%;
  height: 100%;
}
.category {
  width: 1045px;
  margin-bottom: 10px;
  margin-left: 15px;

  .context {
    display: flex;
    padding: 7px 13px;
    flex-wrap: wrap;
    .selected {
      margin-bottom: 20px;
      margin-right: 24px;
    }
  }
}
.nav {
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  display: block;
  .nav-item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      padding: 20px 4px;
      margin: 0 20px;
    }
    .active {
      border-bottom: 1px solid red;
    }
  }
}
.content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
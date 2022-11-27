<template>
  <div class="media">
    <div class="top   containRight">
      <span @click="num = 0" :class="{ active:  num == 0 }" >资源</span>
      <span @click="num = 1" :class="{ active: num == 1 }">视频课</span>
      <span @click="num = 2" :class="{ active: num == 2 }">直播课</span>
    </div>
    <div class="center  containRight">
      <div class='search'>
        <el-input :prefix-icon="Search" size="normal" class="input"></el-input>
        <el-button class="btn">搜索</el-button>
      </div>
      <div class="wrapper">
        <div class="more">
          <span>无更多内容</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
//定义响应式数据
let num = ref(0)
</script>

<style scoped>
.media {
  width: 1020px;
}

.top {
  height: 72px;
  margin-bottom: 10px;
  display: flex;
  position: relative;
}

.containRight {
  background-color: #fff;
  border-radius: 4px;
}

.top span {
  font-size: 14px;
  display: block;
  padding: 28px 30px
}

.top .active{
  border-bottom: #f93684 5px solid;
}

.center {
  height: 776px;
  margin-bottom: 20px;
}

.center .search {
  height: 40px;
  padding: 14px 40px 10px 31px;
  line-height: 40px;
}

.center .input {
  color: #7d8090;
  width: 270px;
  height: 40px;
}

.center .btn {
  width: 62px;
  height: 40px;
  background: #f5f7f9;
  border-radius: 4px;
  color: #7d8090;
  font-size: 14px;
  display: inline-block;
  padding: 12px 17px;
  margin-left: 10px;
}

.center .wrapper {
  height: 700px;
  padding: 0 35px 0 22px;
  margin-bottom: 20px;
}

.center .more {
  width: 963px;
  height: 60px;
  border-bottom: 1px solid #ebeef5;
  font-size: 12px;
  color: #909399;
  text-align: center;
  line-height: 60px;
}

.wrapper {
  padding: 0 35px 0 22px;

}
</style>
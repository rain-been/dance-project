<template>
  <div class="media">
    <div class="options containRight" ref="optionsRef" @click="clickHandler">
      <div class="item active">资源</div>
      <div class="item">视频课</div>
      <div class="item">直播课</div>
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
import { onMounted, ref } from 'vue';
//定义响应式数据
let num = ref(0)
onMounted(() => {
        clickHandler();
    })
const optionsRef = ref();
const clickHandler = () => {
  const optionsList = optionsRef.value.children;
  for (let i = 0; i < optionsList.length; i++) {
    if (optionsList[i].classList.contains('item')) {
      optionsList[i].onclick = function () {
        for (let j = 0; j < optionsList.length; j++) {
          optionsList[j].classList.remove('active');
        };
        optionsList[i].classList.add('active');
      };
    };
  };
};
</script>

<style scoped>
.media {
  width: 1020px;
}

.options {
  height: 72px;
  display: flex;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
}

.containRight {
  background-color: #fff;
  border-radius: 4px;
}

.options .item {
  padding: 28px 30px;
}

.options .item:nth-child(1) {
  width: 37px;
}

.options .active::after {
  content: "";
  display: block;
  margin: 21px auto 0;
  width: 37px;
  border-bottom: 5px solid #f93684;
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
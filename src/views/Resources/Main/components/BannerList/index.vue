<template>
  <div class="block text-center">
    <el-carousel trigger="click" height="466px">
      <el-carousel-item v-for="(item ,index) in banner" :key="index">
        <a style="width: 100%; height: 100%">
          <img
            :src="item.imgUrl"
            style="width: 100%; height: 100%"
          />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reqBanner } from "@/api/resources/index";
// 存储轮播图数据
let banner = ref([]);
onMounted(async () => {
  let result: any = await reqBanner();
  banner.value = result.map((item) => {
    return {
      imgUrl: item.appAdvertiseUrl,
    };
  });
});
</script>

<style lang="less">
.text-center {
  overflow: hidden;
}

.el-carousel {
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;

  .el-carousel-item {
    background-color: aqua;
  }
}

.el-carousel__indicator--horizontal .el-carousel__button {
  width: 14px;
  height: 14px;
  // background: transparent;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 0.5;
}

.el-carousel__indicator--horizontal.is-active .el-carousel__button {
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}
</style>

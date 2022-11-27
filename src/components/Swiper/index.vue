<template>
  <div class="contain">
    <div class="swiper">
      <div class="block text-center" m="t-4">
        <el-carousel trigger="click" height="500px" style="margin-top: 20px;">
          <el-carousel-item v-for="item in picList" :key="item">
            <img class="width" :src="item.pcAdvertiseUrl">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "swiper",
});
</script>

<script setup lang="ts">
const props = defineProps(['picList'])
</script>
<style scoped>
.width {
  width: 100%;
  height: 500px
}

img {
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

::v-deep .swiper {
  width: 1200px;
  height: 500px;
  margin: 0 auto;

}

.contain {
  margin-top: 20px;
  margin: 0 150px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
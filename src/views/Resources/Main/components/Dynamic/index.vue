<template>
  <div class="cards">
    <Card></Card>
    <el-button size="large" v-loading="loading" style="padding: 0 40px">
        <div :style="{ visibility: loading ? 'hidden' : 'visible' }">
          加载更多
        </div>
      </el-button>
  </div>
</template>

<script setup lang='ts'>
import Card from '@/views/Resources/VideoPlay/Card/index.vue';
import{ref} from 'vue';
const loading = ref(false);

</script>

<style lang="less" scoped>
  .cards {
  overflow: hidden;
  position: relative;
  .btn {
    position: absolute;
    left: 600px;
    bottom: 0;
  }
    .card:nth-child(5n) {
      margin-right: 0;
    }
  }
</style>
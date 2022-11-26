<template>
  <div>
    <div class="cards">
      <!-- 卡片列表 -->
      <Card></Card>
      <el-button size="large" style="padding: 0 40px">
        <div :style="{ visibility: loading ? 'hidden' : 'visible' }">
          加载更多
        </div>
      </el-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Card from '@/views/Resources/VideoPlay/Card/index.vue';

</script>

<style lang="less" scoped>
  .cards {
  overflow: hidden;
  position: relative;
  
    .card:nth-child(5n) {
      margin-right: 0;
    }
  }
</style>
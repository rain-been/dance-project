<template>
 
    <!-- 主要页面 -->
    <Main v-if="isShowMain"></Main>


    <!-- 视频播放页 -->
    <!-- <VideoPlay v-else></VideoPlay> -->
  <!-- </div> -->
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Main from './Main/index.vue';
import VideoPlay from './VideoPlay/index.vue';


const isShowMain = ref(true);
</script>

<style scoped>
</style>
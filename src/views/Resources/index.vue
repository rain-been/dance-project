<template>
 
    <!-- 主要页面 -->
    <Main v-if="isShowMain"></Main>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Main from './Main/index.vue';


const isShowMain = ref(true);
</script>

<style scoped>
</style>
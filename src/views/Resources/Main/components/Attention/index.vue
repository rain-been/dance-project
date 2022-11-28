<template>
  <div class="attention-container">
    <div v-if="username">{{ username }}</div>
    <div v-else class="no-login">未登录无法访问</div>
  </div>
</template>

<script setup lang='ts'>


import { computed } from 'vue';

const username = computed(() => {
  return localStorage.getItem('name');
})

</script>

<style lang="less" scoped>
.attention-container {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 26px;
  }
}
</style> {
  min-height: 100vh;
}
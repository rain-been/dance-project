<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">综合排序</el-menu-item>
    <el-menu-item index="2" >销量</el-menu-item>
    <el-menu-item index="3">浏览量</el-menu-item>
    <el-sub-menu index="4" >
      <template #title>价格</template>
      <el-menu-item index="4-1" >价格由高到低</el-menu-item>
      <el-menu-item index="4-2">价格由低到高</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="5">发布时间</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

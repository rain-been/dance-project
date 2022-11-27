<template>
  <TopNav></TopNav>
  <div class="content">
    <div>
      <router-view></router-view>
    </div>
  </div>
  <Footer v-show="$route.meta.isShow"></Footer>
</template>

<script>
import TopNav from "@/components/TopNav/index.vue";
import Footer from "@/components/Footer/index.vue";
import { defineComponent } from "vue";
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
export default defineComponent({
  name: "App",
});
</script>


<script setup>



</script>

<script setup></script>


<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  background-color: #f5f7f9;
}
</style>

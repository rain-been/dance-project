<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  }
})
</script>

<script lang = "ts" setup>

</script>

<style scoped>

</style>
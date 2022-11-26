<template>
   <div class="loading-mask">
      <div class="loading-spinner">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
        <p class="loading-text" v-if="showText">加载中...</p>
      </div>
    </div>
</template>

<script >
import { defineComponent } from "vue";

export default defineComponent({
   name: "Loading",
});
</script>

<script setup >
defineProps({
   showText:{
      default:true,
      type:Boolean
   }
});
   
</script>

<style lang="scss" scoped>
@keyframes loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: transparent;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .loading-spinner {
    top: 50%;
    margin-top: 0;
    width: 100%;
    text-align: center;
    position: absolute;
    .circular {
      height: 42px;
      width: 42px;
      transform: rotate(180deg);
      animation: loading-rotate 1s linear infinite;
      .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #f93684;
        stroke-linecap: round;
      }
    }
    p {
      color: #f93684;
      margin: 3px 0;
      font-size: 14px;
    }
  }
}
</style>
<template>
    <div class="loading-wrapper">
        <div class="loading">
            <el-icon class="icon" :size="42">
                <Loading />
            </el-icon>
            <p class="text">加载中...</p>
        </div>
    </div>
</template>
  
<script  setup>
import { nextTick, ref } from 'vue'
import { Loading } from "@element-plus/icons-vue"


const laoding = ref(true)

// const loadingInstance = ElLoading.service({
//     target: test.value,
//     text: '加载中...',//显示在加载图标下方的加载文案
//     spinner: 'el-icon-loading',//自定义加载图标类名
//     fullscreen: false,
//     // background: 'rgba(0, 0, 0, 0.7)',//遮罩层颜色
// })
nextTick(() => {
    setTimeout(() => {
        loading.value = false
    }, 3000);
})

</script>
  
<style lang="scss" scoped>
.example-showcase .el-loading-mask {
    z-index: 9;
}

.loading-wrapper {
    display: flex;
    padding: 100px 0;
}

.loading {
    margin: auto;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .icon {
        animation: rotate 2s infinite linear;
    }

    .text {
        font-size: 12px;
        color: #555;
    }
}

@keyframes rotate {
    to {
        transform: rotate(365deg);
    }
}
</style>
  
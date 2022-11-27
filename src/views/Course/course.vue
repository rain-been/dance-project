<template>
    <div>
        <vip :total="total"></vip>
        <zone :zoneInfo="zoneInfo" @pageInit="pageInit"></zone>
        <order @pageInit="pageInit"></order>
        <detail :pageInfo="pageInfo"></detail>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import zone from './zone/zone.vue'
import vip from './vip/vip.vue'
import  moment  from "moment"
import {onMounted,ref} from "vue";
import {useRouter} from 'vue-router'
import courseApi from '@/api/course/course'
import type {zoneList,pageList} from '@/api/course/course'
import Zone from "@/views/course/zone/zone.vue";
import order from './order/order.vue'
import detail from './detail/detail.vue'
import '@/mock/course/course'
const zoneInfo=ref<zoneList[]>([])
const pageInfo=ref<pageList[]>([])
const router=useRouter()
const init=async ()=>{
    try {
        let result = await courseApi.getInit(currentPath.value)
        // @ts-ignore
        zoneInfo.value=result.data
    }catch (e){

    }
}
const currentPath=ref('')
const total=ref(0)
const pageSize=ref(20)
const limit=ref(0)
const pageInit=async ({data={},sort='integrated'})=>{
    try {
        let result = await courseApi.getPage({path:currentPath.value,pageSize:pageSize.value,pageNum:limit.value,data,sort})
        total.value=result.totalElements
        pageInfo.value=result.content as any
    }catch (e){

    }
}

const routePath=()=>{
    currentPath.value=router.currentRoute.value.path
}
onMounted(()=>{
    routePath()
    init()
    pageInit({})
})

</script>

<style lang="less" scoped>

</style>

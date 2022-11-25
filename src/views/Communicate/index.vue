<template>
    <div style="width:100%;height: 100%;background-color:whitesmoke">

        <div class="contain">
            <div class="left-contain">
                <div class="left-box " :class="{ 'active': flag }">
                    <div class="line"></div>
                    <div class="box-top" @click="changeHandler">
                        <div class="top-left">消息</div>
                        <div class="top-right" style="width:20px;height:20px;"> > </div>
                    </div>
                    <div class="box-bottom">
                        <router-link to="/communicate/systemNote" class="box-item" :class="{ 'active':  toRouteName === 'systemNote' }"
                            @click="toRouteName = 'systemNote'">系统通知</router-link>
                        <router-link to="/communicate/interactNote" class="box-item" :class="{ 'active': toRouteName === 'interactNote' }"
                            @click="toRouteName = 'interactNote'">互动通知</router-link>
                        <router-link to="/communicate/orderNote" class="box-item" :class="{ 'active': toRouteName === 'orderNote' }"
                            @click="toRouteName = 'orderNote'">订单通知</router-link>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>

    </div>

</template>

<script lang="ts">
import interactNote from './components/interactNote.vue';
import orderNote from './components/orderNote.vue';
import systemNote from './components/systemNote.vue';
import { watch } from 'fs';
export default defineComponent({
    name: 'Communicate',
    components: {
        interactNote,
        orderNote,
        systemNote,
    }
})
</script>

<script lang = "ts" setup>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router';
import { onMounted } from 'vue'


const route = useRoute()


let flag = ref(false);
let toRouteName = ref('')

const changeHandler = () => {
    flag.value = !flag.value
}


onMounted(() => {
    toRouteName.value = (route.meta.name as any)
})


</script>

<style scoped lang="less">
.contain {
    width: 1200px;
    height: 900px;
    background-color: whitesmoke;
    margin-left: auto;
    margin-right: auto;
}

.contain .left-contain {
    margin-top: 10px;
    float: left;
    width: 170px;
    box-sizing: border-box;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
}

.contain .right-contain {
    float: right;
    width: 1020px;
    margin-top: 10px;
}

.contain .left-contain .left-box {
    height: 200px;
    transition: all .2s linear;
    position: relative;
}

.contain .left-contain .left-box .line {
    width: 5px;
    position: absolute;
    height: 40px;
    top: 4px;
    background-color: #F93684;
}

.contain .left-contain .left-box.active {
    height: 50px;
    overflow: hidden;
}


.contain .left-contain .left-box .box-top {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    padding: 17px 21px;
}

.contain .left-contain .left-box .box-bottom {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;

}

.contain .left-contain .left-box .box-bottom .box-item {
    font-size: 14px;
    padding: 12px 0 12px 12px;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    color: black;
}

.contain .left-contain .left-box .box-bottom .box-item.active {
    color: #F93684;
}
</style>

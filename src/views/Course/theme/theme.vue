<template>
    <div class="themePage">
        <div class="themeContainer">
            <div class="themeImg" v-for="(imgs,index) in getThemeData.themepagedata" :key="index">
                <a :href="imgs.webUrl"><img :src="imgs.cover" class="themes" alt=""/></a>   
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import useStore from '../../../store/course/course';
let getThemeData = useStore();

onMounted(()=>{
    getThemeData.getTheme();
})
</script>

<style scoped>
.themeContainer{
    width:1200px;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px; 
}
.themeImg{
    width:25%;
    height:190px;
    padding:0px 7px;
    margin-bottom:18px;
    box-sizing: border-box;
}
.themePage{
    width:100%;
    height:100%;
}
.themes{
    width:100%;
    height:100%;
    border-radius: 4px;
}
</style>
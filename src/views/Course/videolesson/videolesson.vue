<template>
  <div class="video">
    <div  class="top">
        <div class="videotheme">
            <div class="videoitem">兴趣技能:</div>
            <div class="item">
                <a>中国舞</a>
                <a>古典舞</a>
                <a>原创舞蹈</a>
                <a>舞蹈教学</a>
                <a>成人舞蹈</a>
                <a>民族舞</a>
                <a>爵士舞</a>
                <a>少儿舞蹈</a>
                <a>热门舞蹈</a>
                <a>流行热舞</a>
                <a>中国风</a>
                <a>民族民间舞</a>
                <a>舞蹈</a>
                <a>基本功</a>
                <a>街舞</a>
                <a>拉丁舞</a>
            </div>
        </div>
        <div class="videotheme">
            <div class="videoitem">价格区间:</div>
            <div class="item">
                <a>会员免费</a>
                <a>2元一下</a>
                <a>2-100元</a>
                <a>101-400元</a>
                <a>400元以上</a>
            </div>
      </div>
    </div>
    <div class="center" @click="unfold" v-if="flag">展开全部</div>
    <div v-show="!flag" class="bottom">
        <div class="videotheme">
            <div class="videoitem">课程类型:</div>
            <div class="item">
                <a>舞蹈教学</a>
                <a>成品舞</a>
                <a>教学视频</a>
                <a>古典舞</a>
                <a>中国舞</a>
                <a>舞蹈教学</a>
                <a>成品舞</a>
                <a>教学视频</a>
                <a>古典舞</a>
                <a>中国舞</a>
                <a>舞蹈教学</a>
                <a>成品舞</a>
                <a>教学视频</a>
                <a>古典舞</a>
                <a>中国舞</a>
                <a>舞蹈教学</a>
                <a>成品舞</a>
            </div>
        </div>
        <div class="videotheme">
            <div class="videoitem">学习目标:</div>
            <div class="item">
                <a>舞蹈教学</a>
                <a>成品舞</a>
                <a>教学视频</a>
                <a>古典舞</a>
                <a>中国舞</a>
                <a>舞蹈教学</a>
                <a>成品舞</a>
                <a>教学视频</a>
                <a>古典舞</a>
                <a>中国舞</a>
                <a>舞蹈教学</a>
                <a>成品舞</a>
                <a>教学视频</a>
                <a>古典舞</a>
                <a>中国舞</a>
                <a>舞蹈教学</a>
                <a>成品舞</a>
            </div>
        </div>
        <div class="videotheme">
            <div class="videoitem">难易度:</div>
            <div class="item">
                <a>零基础</a>
                <a>业余初级</a>
                <a>业余中级</a>
                <a>业余高级</a>
                <a>专业初级</a>
                <a>专业中级</a>
                <a>专业高级</a>
            </div>
        </div>
       <div class="center" v-if="!flag" @click="unfold">返回</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// 点击展开隐藏的内容
const flag = ref(true);
const unfold=()=>{
    flag.value=!flag.value;
}
</script>


<style lang="less" scoped>
.video{
    width: 80%;
    min-height: 100px;
    margin: auto;
}
.top{
    min-height: 100px;
}
.videotheme{
    height:60px;
    margin-top: 10px;
}
.videoitem{
    width:100px;
    height: 60px;
    float:left;
}
.item{
    height:60px;
}
.item a {
    float: left;
    width:120px;
    line-height: 24px;
}
.center{
    display: flex;
    color: red;
    justify-content: center;
    height:30px;
}
</style>
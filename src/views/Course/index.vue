<template>
  <!-- 菜单部分 -->
  <el-card class="meunCard">
      <el-backtop :bottom="270">
          
      </el-backtop>
      <div class="area">
          <div class="scroll">
              <a @click="num = 0" :class="{'active': num === 0 }">
                  <router-link class="a" to="/vip">会员中心</router-link>
              </a>
              <a @click="num = 1" :class="{'active': num === 1 }">
                  <router-link class="a" to="videolesson">视频课</router-link>
              </a>
              <a @click="num = 2" :class="{'active': num === 2 }">
                  <router-link class="a" to="online">直播课</router-link>
              </a>
              <a @click="num = 3" :class="{'active': num === 3 }">
                  <router-link class="a" to="offline">线下课</router-link>
              </a>
              <a @click="num = 4" :class="{'active': num === 4 }">
                  <router-link class="a" to="theme">主题</router-link>
              </a>
          </div>
      </div>
  </el-card>
  <div class="main">
      <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const num = ref<number>(0)
</script>

<style scoped>
.a {
  text-decoration: none;
  color: #000
}
.menu-container {
  background: #f5f7f9;
}
.menu-text {
  display: flex;
  justify-content: center;
}
.menu-p {
  line-height: 64px;
  margin: 0 20px;
}
.active {
  border-bottom: 3px solid black;
}
.top-menu {
  width: 100%;
  height: 80px;
  margin: 5px auto;
  background: #fff;
}
.price-item {
  color: #111;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
}
.price-content {
  display: none;
}
.price-content {
  display: block;
  width: 120px;
  height: 80px;
  position: absolute;
  top: -20px;
  left: -45px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 4px rgb(220, 215, 215);
}
.videos {
  width: 224px;
  height: 126px;
}
.videoOne {
  width: 224px;
  height: 280px;
  font-size: 14px;
  background-color: white;
  border-radius: 4px;
}
.videoList {
  display: flex;
}
.videoContainer {
  width: 1200px;
  margin: 10px auto 0;
  padding-top: 20px;
}
.bs {
  width: 12px;
  height: 12px;
}
.avt {
  width: 24px;
  height: 24px;
}
.videoContainer {
  width: 1200px;
  margin: 0 auto;
  margin-top: 5px;
}
.videos {
  width: 224px;
  height: 380px;
  background: #f93684;
}
.synthesis {
  padding-left: 5px;
  font-size: 14px;
}
.time:hover {
  color: #f93684;
}
.price:hover {
  color: #f93684;
}
.views:hover {
  color: #f93684;
}
.synthesis:hover {
  color: #f93684;
}
.sales:hover {
  color: #f93684;
}
.time {
  margin-left: 60px;
  font-size: 14px;
}
.price {
  display: inline-block;
  font-size: 14px;
}
.views {
  margin-left: 60px;
  font-size: 14px;
}
.sales {
  margin-left: 60px;
  font-size: 14px;
}
.screenContainer {
  display: flex;
}
.screen {
  width: 1200px;
  margin: 0 auto;
  margin-top: 5px;
}
.selectContainer {
  position: relative;
}
.pack-up {
  margin: 15px 0;
  padding-bottom: 20px;
  text-align: center;
  color: #f93684;
  font-size: 14px;
}
.reset {
  position: absolute;
  top: 7px;
  right: 33px;
  cursor: pointer;
  font-size: 14px;
  color: #f93684;
}
.actives {
  color: #fff;
  background: #f93684;
}
.select-item {
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  padding: 7px 13px;
  margin: 0 24px 10px 0;
}
.selectMatter {
  width: 1045px;
  box-sizing: border-box;
}
.selectType {
  float: left;
  padding: 7px 0px;
  color: gray;
}
.selectList {
  width: 1140px;
  font-size: 14px;
}
.meunCard {
  margin: -10px 0;
  overflow: hidden;
}
.main {
  background: #f5f5f5;
}
.tagCard {
  width: 1200px;
  margin: 0 auto;
  margin-top: 5px;
}
.memberCard {
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
}
:v-deep .el-check-tag {
  background: #f93684;
  color: white;
  margin-left: 10px;
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  user-select: none;
  margin-right: 24px;
  margin-bottom: 10px;
}
.area {
  height: 80px;
  width: 1200px;
  margin: 0 auto;
}
.scroll {
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.scroll>a {
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  padding: 20px 4px;
  margin: 0 20px;
  font-size: 18px;
  color: #111;
}
.active {
  display: block;
  border-bottom: 2px solid #111;
}
.top {
  font-size: 18px;
  margin: 0 0 16px;
  font-weight: 400;
}
.via>img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
  margin-top: 6px;
}
.videoImg>img {
  width: 58px;
  height: 58px;
  margin-right: 20px;
}
.discountsImg>img {
  width: 58px;
  height: 58px;
  margin-right: 20px;
}
.bottom {
  display: flex;
}
.intro {
  display: flex;
}
.userInfo {
  display: flex;
  padding-right: 200px;
}
.discounts {
  display: flex;
}
.video {
  display: flex;
  padding-right: 200px;
}
.members {
  width: 1200px;
  margin: 0 auto;
}
.viaInfo {
  margin-top: 12px;
  line-height: 20px;
}
.viaInfo>span {
  color: #000;
  cursor: pointer;
}
.viaInfo>p {
  margin-top: 8px;
  font-size: 12px;
  color: #f93684;
}
.videoInfo>p {
  text-align: center;
  cursor: pointer;
}
.videoInfo>p>i {
  color: #f93684;
}
.videoInfo {
  margin-top: 17px;
}
.discountInfo {
  margin-top: 15px;
}
.discountInfos {
  margin-left: 7px;
}
.card_content_wrapper {
  margin-top: 5px;
  padding-bottom: 20px;
  width: 1200px;
  margin: 0 auto;
}
.card_content_wrapper .loadMoreList {
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
}
.content_card_item {
  /* border: solid 1px red; */
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 4px;
}
.card_item {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 224px;
  height: 280px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 4px;
}
.card-top {
  width: 100%;
  height: 126px;
  position: relative;
  /* border-radius: 4px; */
}
.card-top .cover {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
/* 鼠标滑过视频图片 */
.card-top .cover:hover {
  opacity: .6;
}
.play {
  position: absolute;
  top: 80px;
  left: 15px;
  display: inline-block;
  width: 30px;
  height: 30px;
}
.card-top span {
  position: absolute;
  color: #fff;
  top: 82px;
  right: 10px;
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  padding: 0 10px;
  border-radius: 12px;
  background: rgba(0, 0, 0, .6);
}
.card-bottom {
  width: 100%;
}
.card-bottom-top {
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: space-between;
  padding: 0px 6px;
  box-sizing: border-box;
  flex-direction: column;
  border-bottom: 1px solid #b1b5c1;
}
.video-text {
  font-size: 14px;
  color: #111;
  padding-top: 10px;
  /* padding-bottom: 0; */
  line-height: 18px;
  height: 45px;
  box-sizing: border-box;
}
.price-zan {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 8px 6px; */
  box-sizing: border-box;
}
.price-zan span {
  display: inline-block;
}
.price-zan .price {
  color: #f93684;
  font-size: 16px;
}
.price-zan .zan {
  font-size: 12px;
  color: #b1b5c1;
}
.vip-video img {
  display: inline-block;
  width: 38px;
  height: 14px;
}
.card-bottom-don {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-bottom-don .botton-text span {
  display: inline-block;
  line-height: 50px;
  font-size: 12px;
  margin-left: 8px;
}
.botton-text {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 6px;
  box-sizing: border-box;
}
.botton-text .userAva {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.date {
  font-size: 12px;
  color: #b1b5c1;
  padding-right: 5px;
  box-sizing: border-box;
}
.myZan {
  display: flex;
  font-size: 12px;
  align-items: center;
  height: 28px;
  margin-bottom: 20px;
}
.myZan .icon {
  margin-right: 5px;
}
.myZan span {
  display: inline-block;
  margin-right: 20px;
}
/* 加载更多 */
.load_more_btn {
  display: block;
  width: 140px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #82858e;
  border: 1px solid #eaecf0;
  border-radius: 4px;
  background: #fff;
  text-align: center;
  margin: 20px auto 0;
  cursor: pointer;
}
/* 控制视频 */
:v-deep .is-active {
  background-color: white !important;
  border-bottom: none !important;
}
:v-deep.el-menu-item:hover {
  background-color: white !important;
  color: #f93684 !important;
}
</style>
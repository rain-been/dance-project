<template>
  <div class="contain">
    <el-row>
      <el-col :span="4" :offset="0">
        <div class="left " ref="trainingNavRef">
          <div class="trandRoom   containLeft">
            <div class="trand flag">
              <span>练习室</span>
              <el-icon v-show="arrow == 0" @click="arrowRight">
                <ArrowRight />
              </el-icon>
              <el-icon v-show="arrow == 1" @click="arrowDown">
                <ArrowDown />
              </el-icon>
            </div>
          </div>
          <transition name="train">
            <router-link to="/trainRoom" v-show="arrow == 1" class="mine containLeft">
              <span>我的练习室</span>
            </router-link>
          </transition>
          <!-- 应用选项卡 -->
          <div class="application containLeft">
            <router-link to="/mediaCache" class="text active trandRoom">

              <span @click="arrowDown">缓存</span>
            </router-link>
            <span class="text trandRoom">

              <sapn @click="audio">音频库</sapn>
            </span>
            <router-link to="/collections" class="text active trandRoom">

              <span @click="arrowDown">收藏</span>
            </router-link>
            <router-link to="/view_records" class="text active trandRoom">

              <span @click="arrowDown">历史</span>
            </router-link>
          </div>
        </div>
      </el-col>
      <!-- 右边 -->
      <el-col :span="20" :offset="0">
        <div class="right">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    <!-- 对话框 -->
    <el-dialog v-model="dialogVisible" close-on-click-modal="false" class="dialogVisible"
      title='请打开中舞网APP，点击"练习室"-"音频库"中查看。' align-center="true" width="35%">
      <span slot="footer">
        <el-button type="primary" @click="dialogVisible = false" class="btn">确定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
// 定义箭头的显示与隐藏
let arrow = ref(0)
let num = ref(0)
const trainingNavRef = ref();
let dialogVisible = ref(false)
onMounted(() => {
  clickHandler();
})
//点击箭头的切换
const arrowRight = () => {
  arrow.value = 1
}
const arrowDown = () => {
  arrow.value = 0
}
// 点击音频库弹出对话框
const audio = () => {
  dialogVisible.value = true
}
const clickHandler = () => {
  const navList = trainingNavRef.value.children;
  for (let i = 0; i < navList.length; i++) {
    if (navList[i].classList.contains('text')) {
      navList[i].onclick = function () {
        for (let j = 0; j < navList.length; j++) {
          navList[j].classList.remove('active');
        };
        navList[i].classList.add('active');
      };
    }
  }

}


</script>

<style scoped>
.contain {
  width: 1200px;
  margin: 20px auto 0 auto;
}

.contain .left {
  width: 170px;
  margin-right: 10px;
}

.contain .left .containLeft {
  background-color: #fff;
  border-radius: 4px;
}

.trandRoom .active {
  width: 4px;
  height: 37px;
  background-color: #f93684;
  position: absolute;
  top: -10%;
  left: 0%;
}

.trandRoom .bg {
  width: 4px;
  height: 37px;
  background-color: #fff;
  position: absolute;
  top: -10%;
  left: 0%;
}

.trandRoom {
  width: 170px;
  height: 50px;
  line-height: 32px;
  font-size: 14px;
  position: relative;
}

.trandRoom .active :after {
  content: "";
  width: 4px;
  height: 37px;
  background-color: #f93684;
  position: absolute;
  top: 18%;
  left: 0%;
  opacity: 1;
  transition: all .5s;
}

.contain .left .trandRoom .trand {
  margin-left: 10px;
  line-height: 50px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contain .left .mine {
  display: block;
  font-size: 14px;
  text-decoration: none;
  width: 170px;
  color: #f93684;
  background-color: #fff;
  line-height: 50px;
  text-align: center;
}

.contain .left .application {
  width: 170px;
  height: 200px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contain .left .application .text {
  text-decoration: none;
  color: #111;
  font-size: 14px;
  line-height: 50px;
  padding-left: 20px;
}


.train-enter-from {
  height: 0;
  opacity: 0;
}

.train-enter-active {
  transition: all .5s ease-in-out;
}

.train-enter-to {
  height: 50px;
  opacity: 1;
}

>>>.dialogVisible {
  height: 130px;
}

>>>.dialogVisible .btn {
  color: #fff;
  background-color: #f93684;
  border-color: #f93684;
  float: right;
}
</style>
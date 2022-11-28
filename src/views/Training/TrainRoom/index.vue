<template>
  <div class="top containRight">
    <div class="box">
      <span @click="num = 0" :class="{active:num==0}">全部</span>
      <span @click="num = 1" :class="{ active: num == 1 }">我创建的</span>
      <span @click="num = 2" :class="{ active: num == 2 }">我加入的</span>
      <span @click="num = 3" :class="{ active: num == 3 }">我课程的</span>
    </div>
    <el-button type="primary" size="larg" color="#f93684" round="true" class="btn" @click="dialogVisible = true">创建
    </el-button>
  </div>
  <div class="center containRight">
    <img src="https://rs.dance365.com/img/no_content@3x.0fd78ad2.png" class="img">
    <!-- 点击创建弹出对话框 -->
    <el-dialog class="dialog" v-model="dialogVisible" title="请打开 中舞网APP 扫码,使用此功能" width="25%" 
      >
      <span>
        <img src="https://rs.dance365.com/dace365_contact_qrcode_410.png">
        <p>扫描此二维码，同样可下载</p>
        <p>“中舞网APP”</p>
      </span>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const dialogVisible = ref(false)
//定义响应式数据
let num = ref(0)
</script>

<style scoped>
.top {
  width: 1020px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.containRight {
  background-color: #fff;
  border-radius: 4px;
  padding: 5px 0;
}

.top .box {
  width: 388px;
  height: 44px;
  padding: 24px 30px;
  line-height: 44px
}

.top .box span {
  font-size: 14px;
  border-radius: 4px;
  color: #7d8090;
  padding: 6px 12px;
  margin-right: 24px;
  margin-bottom: 10px;
}

.top .box .active {
  background-color: #f93684;
  color: #fff;
}

.top .btn {
  width: 84px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 16px;
  margin-right: 30px;
}

.center {
  width: 1020px;
  height: 730px;
  margin: 20px 0;
}

.center .img {
  display: block;
  position: absolute;
  left: 50%;
  top: 40%
}

>>> .dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

>>> .dialog span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

>>> .dialog span img {
  width: 130px;
  height: 130px;

}
</style>
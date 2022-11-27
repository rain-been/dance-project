<template>
    <div class="header">
    <div class="wrap">
      <div class="nav-left">
        <div class="img">
          <RouterLink to="/resources"><img src="https://rs.dance365.com/logo@3xrenew3.png" alt="" /></RouterLink>
        </div>
        <RouterLink to="/resources" class="item"  active-class="active" 
          >资源</RouterLink
        >
        <RouterLink to="/course" class="item" active-class="active" >课程</RouterLink>
        <RouterLink to="/training" class="item" active-class="active" >练习室</RouterLink>
        <RouterLink to="/communicate" class="item" active-class="active" 
          >交流</RouterLink
        >
        <RouterLink to="/person" class="item" active-class="active" >我的</RouterLink>
      </div>
      <div class="nav-right">
        <div class="down"><span></span>下载APP</div>
        <button class="btn">+ 发布</button>
        <div class="avatar">
          <span>登录</span>
          |
          <span>注册</span>
          <!-- <img src="../../assets/default_avatar.png" alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Header'
})
</script>

<script lang = "ts" setup>

</script>

<style scoped lang='less'>
.header {
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px 2px #ddd;
  .wrap {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-left {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        cursor: pointer;
        width: 128px;
        height: 30px;
        line-height: 60px;
      }
      .item {
        cursor: pointer;
        width: 56px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-left: 40px;
        font-size: 18px;
        text-decoration: none;
        color: black;
        &.active {
          color: #f93684;
        }
        
      }
      .item:hover{
          color: #f93684;
        }
    }
    .nav-right {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .down {
        cursor: pointer;
      }
      .btn {
        width: 75px;
        height: 30px;
        background-color: #f93684;
        border-radius: 15px;
        color: #fff;
        font-size: 16px;
        padding: 0;
        margin: 0 28px 0 30px;
        border: none;
        cursor: pointer;
      }
      .avatar {
        width: 80px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        .avat {
          width: 30px;
          height: 30px;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
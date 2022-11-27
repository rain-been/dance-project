<template>
  <div class="shadow-box">
    <div class="container">
      <div class="topNav">
        <div class="topNav_left">
          <div class="img">
            <img src="../../assets/images/resource/logo picture.png" />
          </div>
          <div class="nav_list">
            <router-link
              active-class="active"
              class="div"
              to="/resource"
            >
              资源
            </router-link>
            <router-link
              active-class="active"
              class="div"
              to="/course"
              >课程
            </router-link>
            <router-link
              active-class="active"
              class="div"
              to="/trainingRoom"
              >练习室
            </router-link>
            <router-link
              active-class="active"
              class="div"
              to="/exchange"
              >交流
            </router-link>
            <router-link
              active-class="active"
              class="div"
              to="/personal"
              >我的
            </router-link>
          </div>
        </div>
        <div class="topNav_left_right">
          <div class="dobwLoad">
            <i class="iconfont icon-shouji"></i>
            <span>下载APP</span>
          </div>
          <div class="button">
            <i>+</i>
            <div>发布</div>
          </div>
          <div class="avter">
            <img src="../../assets/images/resource/1.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopNav',
});
</script>

<script setup>

</script>

<style lang="scss" scoped>
.shadow-box{
   position: relative;
  z-index: 999;
  box-shadow: 4px 0 9px #c1c1c1;
}
.container {
  height: 60px;
  // display: flex;
  margin: 0 165px;
  height: 60px;
  line-height: 60px;
  
  .topNav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .topNav_left {
      display: flex;
      height: 60px;
      align-items: center;

      .img {
        display: flex;
        align-items: center;

        img {
          width: 128px;
          height: 30px;
        }
      }

      .nav_list {
        display: flex;
        margin-left: 40px;
        font-size: 18px;

        .div {
          margin-right: 30px;

          &.active {
            color: #f93684;
          }
        }
      }
    }

    .topNav_left_right {
      display: flex;
      align-items: center;

      .dobwLoad {
        margin-right: 20px;

        .icon-shouji {
          font-size: 20px;
        }

        span {
          font-size: 17px;
        }
      }

      .button {
        border-radius: 15px;
        width: 75px;
        height: 30px;
        padding: 0;
        background-color: #f93684;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        padding: 0 15px;
        box-sizing: border-box;
      }

      .avter {
        margin-left: 20px;

        img {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          width: 30px;
          height: 30px;
          cursor: pointer;
          background: #ccc;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

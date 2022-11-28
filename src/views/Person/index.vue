<template>
   <div class="container">
    <!-- 左侧 -->
    <div class="left">
      <el-card class="my">
        <div class="avatar">
          <img v-if="true" src="../../assets/images/personal/1.png" alt="" />
          <img v-else src="../../assets/images/personal/1.png" alt="" />
        </div>
        <div class="myinfo">
          <span class="name">忠武王用户</span>
          <span class="level"> Lv.3</span>
        </div>
        <div class="myfollow">
          <div>
            <p>999w</p>
            <p>关注</p>
          </div>
          <div>
            <p>999w</p>
            <p>粉丝</p>
          </div>
        </div>
      </el-card>
      <el-card class="source" body-style="padding:0;">
        <el-menu
         
          class="el-menu-vertical-demo"
          active-text-color="#f93684"
        >
          <el-menu-item index="dynamics">
            <!-- <el-icon><icon-menu /></el-icon> -->
            <router-link to="/dynamics">资源动态</router-link>
          </el-menu-item>
        </el-menu>
      </el-card>
      <el-card class="muHeader" body-style="padding:0;">
        <el-menu
          class="el-menu-vertical-demo"
        
          active-text-color="#f93684"
        >
          <el-menu-item index="myMember">
            <router-link to="/myMember">我的会员</router-link>
          </el-menu-item>
          <el-menu-item index="wallet">
            <router-link to="/wallet">我的钱包</router-link>
          </el-menu-item>
          <el-menu-item index="coupons">
            <router-link to="/coupons">我的优惠劵</router-link>
          </el-menu-item>
          <el-menu-item index="buyOrder">
            <router-link to="/buyOrder">我买的订单</router-link>
          </el-menu-item>
          <el-menu
            class="el-menu-vertical-demo"
           
            active-text-color="#f93684"
          >
            <el-sub-menu index="sell">
              <template #title>
                <span>我卖的</span>
              </template>
              <el-menu-item index="orders">
                <router-link to="/orders">订单管理</router-link>
              </el-menu-item>
              <el-menu-item index="goods">
                <router-link to="/goods">商品管理</router-link>
              </el-menu-item>
              <el-menu-item index="customers">
                <router-link to="/customers"
                  >客户管理</router-link
                >
              </el-menu-item>
              <el-menu-item index="payments">
                <router-link to="/payments">待收款</router-link>
              </el-menu-item>
              <el-menu-item index="preferential">
                <router-link to="/preferential"
                  >优惠管理</router-link
                >
              </el-menu-item>
              <el-menu-item index="evaluate">
                <router-link to="/evaluate">评价管理</router-link>
              </el-menu-item>
              <el-menu-item index="deposit">
                <router-link to="/deposit">保证金</router-link>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-menu>
      </el-card>

      <el-card class="myInfo" body-style="padding:0;">
        <el-menu
          class="el-menu-vertical-demo"
          active-text-color="#f93684"
        >
          <el-menu-item index="editInfo">
            <router-link to="/editInfo">我的资料</router-link>
          </el-menu-item>
        </el-menu>
      </el-card>
    </div>
    <!-- 右侧 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Person'
})
</script>

<script lang="ts">

</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 20px auto 0;
  display: flex;
  .left {
    width: 170px;
    // padding: 21px 0;
    margin: 0 10px 0 0;
    .my {
      margin: 0 0 10px;
      :deep(.el-card__body) {
        padding: 21px 0;
      }
      .avatar {
        text-align: center;
        img {
          border-radius: 50%;
          width: 100px;
          height: 100px;
        }
      }
      .myinfo {
        margin: 0 auto;
        padding: 6px 0;
        text-align: center;
        width: 120px;
        height: 54px;
        line-height: 22px;
        span.name {
          // font-size: 14px;
          color: #111;
        }
        span.level {
          white-space: nowrap;
          // display: inline-block;
          margin-left: 4px;
          //   padding: 0 8px;
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 14px;
          color: #fff;
<<<<<<< HEAD:src/views/personal/index.vue
          background:yellowgreen;
=======
          background: linear-gradient(#7328ff, #43e0ff);
>>>>>>> dev:src/views/Person/index.vue
          font-style: italic;
        }
      }
      .myfollow {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 85px;
          padding-top: 18px;
          text-align: center;
          p:nth-of-type(1) {
            margin-bottom: 7px;
          }
          p:nth-of-type(2) {
            font-size: 14px;
            color: #7d8090;
          }
        }
      }
    }
    // a.left-nav-item {
    //   font-size: 14px;
    //   color: #111;
    //   padding: 17px 21px;
    //   cursor: pointer;
    //   position: relative;
    //   display: block;
    //   text-decoration: none;
    // }
    .el-menu {
      border-right: none;
      position: relative;
      .el-menu-item.is-active::before {
        content: "";
        position: absolute;
        left: 0;
        height: 37px;
        border-left: 4px solid #f93684;
      }
    }
    .source {
      margin: 0 0 10px;
      padding: 5px 0;
      :deep(.el-menu-item:hover) {
        --el-menu-hover-bg-color: #fff;
      }
      :deep(.el-menu-item:hover::before) {
        content: "";
        position: absolute;
        left: 0;
        height: 37px;
        border-left: 4px solid #f93684;
      }
    }
    .muHeader {
      margin: 0 0 10px;
      padding: 5px 0;
      :deep(.el-menu-item:hover) {
        --el-menu-hover-bg-color: #fff;
      }
      :deep(.el-menu-item:hover::before) {
        content: "";
        position: absolute;
        left: 0;
        height: 37px;
        border-left: 4px solid #f93684;
      }
      :deep(.el-sub-menu:hover) {
        --el-menu-hover-bg-color: #fff;
      }
    }
    .myInfo {
      margin: 0 0 10px;
      padding: 5px 0;
      :deep(.el-menu-item:hover) {
        --el-menu-hover-bg-color: #fff;
      }
      :deep(.el-menu-item:hover::before) {
        content: "";
        position: absolute;
        left: 0;
        height: 37px;
        border-left: 4px solid #f93684;
      }
    }
  }
}
</style>

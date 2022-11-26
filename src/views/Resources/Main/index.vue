<template>
  <div clsas="main-container">
    <div class="banner-and-menu">
      <!-- 轮播图 -->
      <BannerList style="width: 1200px; margin: 0 auto"> </BannerList>
    </div>
    <!-- 菜单栏 -->
    <div ref="menuRef" class="menu-container">
      <div class="menu-list">
        <ul class="menu">
          <li :class="$route.path === '/resources/recommend' ? 'active' : ''">
            <RouterLink to="/resources/recommend">推荐</RouterLink>
          </li>

          <li :class="$route.path === '/resources/production' ? 'active' : ''">
            <RouterLink to="/resources/production">作品</RouterLink>
          </li>

          <li :class="$route.path === '/resources/tutorial' ? 'active' : ''">
            <RouterLink to="/resources/tutorial">教程</RouterLink>
          </li>

          <li :class="$route.path === '/resources/subject' ? 'active' : ''">
            <RouterLink to="/resources/subject">专题</RouterLink>
          </li>

          <li :class="$route.path === '/resources/dynamic' ? 'active' : ''">
            <RouterLink to="/resources/dynamic">动态</RouterLink>
          </li>

          <li :class="$route.path === '/resources/attention' ? 'active' : ''">
            <RouterLink to="/resources/attention">关注</RouterLink>
          </li>
        </ul>
        <div class="hobby">
          <i class="iconfont icon-yingyong" style="font-size: 24px"></i>
          <a href="javascript:;" @click="showDialog"
            ><el-icon><Grid /></el-icon>选择兴趣爱好</a
          >
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div class="subPage">
      <RouterView></RouterView>

      <div class="back-top-icon" @click="smoothBackTop">
        <el-icon><ArrowUpBold /></el-icon>
      </div>
    </div>

    <!-- 选择兴趣爱好对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="
        searchData.length
          ? '搜索结果'
          : `选择我的兴趣技能 ${hobbyArr.length} / 7`
      "
      width="1040px"
    >
      <!-- <div>111222</div> -->
      <!-- 搜索输入框区域 -->
      <el-form :inline="true">
        <el-form-item>
          <el-input
            style="width: 300px"
            placeholder="搜索兴趣技能"
            size="large"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 80px">搜索</el-button>
        </el-form-item>
      </el-form>

      <div>
        <!-- 如果hobbyArr有值，那么就渲染，如果没有就不渲染 -->
        <ul class="hobby-arr">
          <li class="hobby-item">
            <span class="close-icon">✖</span>
          </li>
        </ul>
        <!-- 推荐兴趣技能列表 -->
        <div class="mb-10">推荐兴趣技能</div>
        <div class="hobby-list-containr">
          <ul class="recommend-hobby-list mt-20">
            <li class="hobby-item">
              <span class="select-icon">✔</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 搜索结果展示的对话框 -->
      <div>
        <div class="mb-20">搜索结果</div>
        <ul class="search-reuslt">
          <li>
            <h4>name</h4>
            <p>description</p>
          </li>
        </ul>
      </div>

      <!-- 取消和确定按钮 -->
      <template #footer>
        <span class="dialog-footer" v-if="!searchData.length">
          <el-button plain class="dialog-btn" @click="onCancel">取消</el-button>
          <el-button color="#F93684" type="primary" @click="onSave"
            >确定</el-button
          >
        </span>
        <span v-else>
          <el-button type="success" @click="goBack">返回</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import BannerList from "@/views/Resources/Main/components/BannerList/index.vue";
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { nextTick, onMounted, ref } from "vue";
import { reqUserSkill,reqBanner } from "@/api/resources/index";
//定义一个获取视频列表数据
let viedoList=ref([])
onMounted(async () => {
  
  getVideoList()

});
//获取视频列表
const getVideoList =async()=>{
// let result = await reqUserSkill();
  // console.log(result.content);
}
// 用来选中的渲染兴趣列表的数组
const hobbyArr = ref<any[]>([]);
// 用于中间传递已选中兴趣列表的数组的数据
const passHobbyArr = ref<any[]>([]);
// 用来渲染全部兴趣列表的数组
const allHobbyArr = ref<any[]>([]);
// 保存搜索的数据
const searchData = ref<any[]>([]);
// 是否显示对话框的布尔值
const dialogVisible = ref(false);
// 显示对话框的回调
const showDialog = async () => {
  dialogVisible.value = true;
  hobbyArr.value = [...passHobbyArr.value];
  // 双层遍历找到当前已选择兴趣标签数组中对应的数据,把数据的选中状态改变
  hobbyArr.value.forEach((item: any, index: number) => {
    allHobbyArr.value.forEach((item2: any, index: number) => {
      if (item.name === item2.name) {
        item2.isSelect = true;
      }
    });
  });
};
// 取消按钮的回调
const onCancel = () => {
  // 清除对话框全部兴趣列表内容
  allHobbyArr.value = [];
  hobbyArr.value = [];
  // 关闭对话框
  dialogVisible.value = false;
};
// 确定按钮的回调
const onSave = () => {
  // 清除全部兴趣标签数组 和关闭对话框
  allHobbyArr.value = [];
  // 点击保存按钮的时候另存一份
  passHobbyArr.value = hobbyArr.value;
  hobbyArr.value = [];
  // 关闭对话框
  dialogVisible.value = false;
};
// 点击回到顶部按钮平滑回到顶部
const smoothBackTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="less" scoped>
// .main-container {
//   position: relative;
// }
body {
  height: 2000px;
}
#btn {
  position: fixed;
  right: 100px;
  bottom: 100px;
}

.banner-and-menu {
  width: 1200px;
  margin: 0 auto;
}

.menu-container {
  position: sticky;
  top: 0;
  background-color: #fff;

  .menu-list {
    position: relative;
    display: flex;
    justify-content: center;
    height: 70px;
    width: 1200px;
    margin: 0 auto;

    .menu {
      display: flex;
      align-items: center;
      list-style: none;

      li {
        line-height: 50px;
        margin: 0 20px;

        a {
          text-decoration: none;
          color: #000;
        }
      }

      li.active {
        border-bottom: 3px solid #000;
      }
    }

    .hobby {
      position: absolute;
      right: 0;
      line-height: 70px;
      display: flex;
      align-items: center;

      .icon {
        width: 26px;
        height: 30px;
      }

      a {
        text-decoration: none;
        color: #000;
        margin-left: 10px;
      }
    }
  }
}

// 二级页面的背景颜色和居中显示
.subPage {
  background-color: #f5f7f9;
  padding: 20px 0;

  div,
  ul {
    width: 1200px;
    margin: 0 auto;
  }

  // 回到顶部的图标
  .back-top-icon {
    position: sticky;
    bottom: 40px;
    width: 40px;
    height: 40px;
    margin-right: 100px;
    font-size: 40px;
    cursor: pointer;
  }
}

// 对话框样式
.el-button {
  width: 130px;
  padding: 20px 0;
}

.el-button.dialog-btn:hover {
  width: 130px;
  padding: 20px 0;
  color: #f93684;
  border: 1px solid #fb66a2;
  background-color: #feebf3;
}

.hobby-list-containr {
  width: 100%;
  height: 340px;
  // border: 1px solid red;
  overflow: auto;
}

.hobby-arr,
.recommend-hobby-list {
  display: flex;
  // padding: 10px 0;
  flex-wrap: wrap;
  list-style: none;

  // 叉号样式
  .close-icon {
    position: absolute;
    top: -8px;
    right: -8px;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }

  // 对号样式
  .select-icon {
    position: absolute;
    top: -8px;
    right: -8px;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f93684;
    color: #fff;
    cursor: pointer;
  }
}

.hobby-item {
  position: relative;
  width: 70px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 33px 20px 0;
  font-size: 12px;
  color: #000;
  cursor: pointer;
}

.hobby-item:nth-child(7n) {
  margin-right: 0;
}

.search-reuslt {
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  li {
    width: 280px;
    min-height: 48px;
    padding: 10px;
    background-color: #f5f7f9;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    h4 {
      font-size: 18px;
      color: #999;
      margin-bottom: 4px;
    }

    p {
      font-size: 16px;
    }
  }

  li:nth-child(3n) {
    margin-right: 0;
  }
}
</style>

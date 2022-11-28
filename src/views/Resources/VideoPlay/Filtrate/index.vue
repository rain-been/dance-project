<template>
  <div class="filtrate">
    <ul class="type-list" ref="bangUlRef" @click="toggleBang">
      <li>
        <a href="javascript:;" class="bang-active" data-bang="integrated">综合榜</a>
      </li>
      <li>
        <a href="javascript:;" class="not-bang-active" data-bang="popTraining">热练榜</a>
      </li>
      <li>
        <a href="javascript:;" class="not-bang-active" data-bang="newcomer">新锐榜</a>
      </li>
      <li>
        <a href="javascript:;" class="not-bang-active" data-bang="lastest">最新</a>
      </li>
    </ul>

    <el-button round @click="showFilterList">
      筛选
      <el-icon :style="`${isShowArrowDown ? 'visibility:visible':'visibility:hidden'}`"><ArrowDown /></el-icon>
    </el-button>
  </div>

  <div v-show="!isShowArrowDown" class="filter-list mb-20">
    <dl>
      <dt>兴趣技能：</dt>
      <div class="list-main">
        <dd>111</dd>
        <dd>222</dd>
        <dd>333</dd>
        <dd>333</dd>
        <dd>333</dd>
        <dd>333</dd>
        <dd>333</dd>
        <dd>333</dd>
        <dd>333</dd>
        <dd>333</dd>
        <dd>333</dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

// 是否显示筛选按钮图标的布尔值
const isShowArrowDown = ref(true);
const arrowDown = ref();

const showFilterList = () => {
  isShowArrowDown.value = !isShowArrowDown.value;
}
const bangUlRef = ref();
// 切换榜单的回调
const toggleBang = (e: any) => {
  if (e.target.nodeName === 'UL' || e.target.nodeName === 'LI') {
    return;
  }
  // 把所有的a的颜色改为未激活颜色，把当前的改为激活颜色
  const AllLiNode = document.querySelectorAll('.type-list li');
  AllLiNode.forEach((li: any) => {
    li.firstChild.className = 'not-bang-active';
  })
  e.target.className = 'bang-active';
}

</script>

<style lang="less" scoped>
.filtrate {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .type-list {
    display: flex;
    list-style: none;
    li {
      margin-right: 60px;

      .not-bang-active {
        text-decoration: none;
        color: #aaa;
      }

      .bang-active {
        text-decoration: none;
        color: #F93684;
      }

      a:hover {
        color: #F93684;
      }
    }
  }

  .el-button {
    padding: 20px 30px;
    background-color: #E9ECEC;
    border: none;
  }
}

// 过滤列表
.filter-list {
  width: 100%;

  dl {
    display: flex;

    dt {
      width: 100px;
      color: #aaa;
      line-height: 40px;
    }

    .list-main {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      line-height: 30px;

      dd {
        margin: 10px;
        padding: 0 20px;
        color: #A480AB;
        font-size: 14px;
        // border: 1px solid #ccc;
        border-radius: 10px;
        cursor: pointer;
      }

      .filter-active {
        background-color: #F93684;
        color: #eee;
      }
    }
  }


}
</style>
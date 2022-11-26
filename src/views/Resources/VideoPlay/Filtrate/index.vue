<template>
  <div class="filtrate">
    <!-- 筛选菜单 -->
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

    <!-- 筛选按钮 -->
    <el-button round @click="showFilterList">
      筛选
      <i ref="arrowDown" class="iconfont icon-arrow-down"><el-icon><ArrowDown /></el-icon></i>
    </el-button>
  </div>

  <!-- 筛选列表 -->
  <div v-show="!isShowArrowDown" class="filter-list mb-20">
    <dl v-for="data in filterListData" :key="data.name">
      <dt>兴趣技能：</dt>
      <div class="list-main">
        <dd v-for="choise in data.choises" :class="choise.isSelect ? 'filter-active' : ''" :key="choise.id"
          @click="filtrateData(data, choise)">{{choise.name}}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
// import { getProductionListInfo } from '@/api/home.ts';
const props = defineProps(['filterListData', 'getProductionListInfo', 'filterInfoObj', 'changeFilterInfoObj', 'getRecommendInfo']);


const bangUlRef = ref();
// 切换榜单的回调
const toggleBang = (e: any) => {
  if (e.target.nodeName === 'UL' || e.target.nodeName === 'LI') {
    return;
  }
  // 调用函数发送请求重新渲染
  props.getRecommendInfo(0, true, e.target.dataset.bang);
  // 把所有的a的颜色改为未激活颜色，把当前的改为激活颜色
  const AllLiNode = document.querySelectorAll('.type-list li');
  AllLiNode.forEach((li: any) => {
    li.firstChild.className = 'not-bang-active';
  })
  e.target.className = 'bang-active';
}


// 是否显示筛选按钮图标的布尔值
const isShowArrowDown = ref(true);
const arrowDown = ref();

// 反复点击筛选按钮时，隐藏和显示下拉箭头
const showFilterList = () => {
  isShowArrowDown.value = !isShowArrowDown.value;
  if (isShowArrowDown.value) {
    arrowDown.value.style.visibility = 'visible'
  } else {
    arrowDown.value.style.visibility = 'hidden'
  }
}

const filterData = ref({
  filterInfo: [] as any
});

// 点击筛选类别，组装数据、发送请求、渲染筛选后的数据
const filtrateData = async (data: any, choise: any) => {
  // 如果是在添加，同时达到筛选最大值，此时往后不在执行
  if (!choise.isSelect && data.maxFilterNum === 3) {
    alert('每个类别只能筛选3个哦');
    return;
  }

  // 判断是在取消此筛选条件，还是在添加此筛选条件
  if (choise.isSelect) {
    // 执行取消筛选条件
    choise.isSelect = false;
    data.maxFilterNum--;
    // console.log('123', data.maxFilterNum);

    // 去除筛选，先找到对应点击的对象
    const delFilterObj = props.filterInfoObj.filterInfo.find((item: any) => {
      return item.filterCode === data.name;
    })
    // 去除点击的id
    delFilterObj.filterValue.forEach((item: string, index: number) => {
      if (item === choise.id) {
        delFilterObj.filterValue.splice(index, 1);
      }
    })
    // 去除点击的name
    delFilterObj.avocationNames.forEach((item: string, index: number) => {
      if (item === choise.name) {
        delFilterObj.avocationNames.splice(index, 1);
      }
    })

    // 清除为空的id列表或name列表
    props.filterInfoObj.filterInfo.forEach((item: any, index: number) => {
      if (item.filterValue.length === 0) {
        props.filterInfoObj.filterInfo.splice(index, 1);
      }
    })

  } else {
    // 执行添加筛选条件
    choise.isSelect = true;
    data.maxFilterNum++;

    // const { filterCode, filterValue, avocationNames } = filterData.value.filterInfo;

    // 添加筛选
    if (!filterData.value.filterInfo.length) {

      filterData.value.filterInfo.push({
        filterCode: data.name,
        filterValue: [choise.id],
        avocationNames: [choise.name]
      });
    } else {
      const findObj = filterData.value.filterInfo.find((item: any, index: number) => {
        return item.filterCode === data.name;
      })

      if (findObj) {
        findObj.filterValue.push(choise.id);
        findObj.avocationNames.push(choise.name);
      } else {
        filterData.value.filterInfo.push({
          filterCode: data.name,
          filterValue: [choise.id],
          avocationNames: [choise.name]
        });
      }
    }
  }
  props.changeFilterInfoObj(filterData.value);
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
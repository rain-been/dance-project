<template>
  <div>
    <div class="right">
      <el-card class="topHeader">
        <div class="title">{{ route.meta.title }}</div>
      </el-card>
      <el-card class="content">
        <div class="contentTop">
          <div class="nameAvatar">
            <div class="memberAvatar">
              <img v-if="userInfo.avatar" :src="userInfo.avatar" alt="" />
              <img v-else src="../../../assets/images/personal/1.png" alt="" />
            </div>
            <div class="memberName">
              <div v-if="userInfo.account">{{ userInfo.account }}</div>
              <div v-else="">admin</div>
              <div>您还不是会员</div>
            </div>
          </div>
          <div class="lessen">开通会员平均每年可省：￥9500</div>
          <div class="priceCenter">
            <div class="priceList">
              <div
                v-for="memberItem in memberPriceList"
                :key="memberItem.id"
                class="priceItem"
                :class="{ activePrice: checkedMember === memberItem.id }"
                @click="checkedMember = memberItem.id"
              >
                <span v-show="memberItem.id === 'VIP3'" class="recommend"
                  >推荐</span
                >
                <p>{{ memberItem.subGroupName }}</p>
                <p><span>￥</span>{{ memberItem.data.total_price }}</p>
                <p v-if="memberItem.data.reduced">
                  折合￥{{ memberItem.data.reduced }}
                </p>
                <p v-else></p>
                <div
                  v-if="
                    memberItem.id === 'VIPMonth1' ||
                    memberItem.id === 'VIPMonth3'
                  "
                  class="teenager"
                >
                  青少年专属
                </div>
              </div>
            </div>
          </div>
          <div class="openMember">
            <button>立即以{{ endMemberPrice }}元开通</button>
          </div>
          <div class="agree">
            <div>开通即视为同意 <span>《会员服务协议》</span></div>
          </div>
        </div>
        <div class="contentBottom">
          <div>会员专属权益</div>
          <div class="equityList">
            <el-popover
              v-for="equityItem in equityInfoList"
              :key="equityItem.id"
              trigger="hover"
              placement="top"
              width="260"
              popper-class="popoverBox"
            >
              <template #reference>
                <div class="equity">
                  <div class="equityImg">
                    <img :src="equityItem.equityImg" alt="" />
                  </div>
                  <div class="equityText">
                    <p>
                      <span v-if="equityItem.equityText1 === '个会员专区'"
                        >742</span
                      >{{ equityItem.equityText1 }}
                    </p>
                    <p>{{ equityItem.equityText2 }}</p>
                  </div>
                </div>
              </template>
              <template #default>
                <div
                  class="demo-rich-conent popoverBoxInfo"
                  style="display: flex; gap: 16px; flex-direction: column"
                >
                  <div class="hoverImg">
                    <img
                      src="../../../assets/images/personal/teach_video_free.png"
                      alt=""
                    />
                  </div>

                  <p class="hoverText">
                    会员专区的<span>742</span>个课程，会员全都可以免费观看学习！课程总价若干万元，而且每月更新、持续增加。
                  </p>
                  <p class="hoverText">
                    也许学会某一课程，单独购买的单价就已远超会员费，绝对超值！
                  </p>
                  <div class="hoverBtn">立即前往内容专区</div>
                </div>
              </template>
            </el-popover>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "myMember",
});
</script>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { reqMemberInfo } from "../../../api/personal";
import { reqEditInfo } from "@/api/personal";


const route = useRoute();

// 开通会员价格列表
const memberPriceList = ref([]);

// 选择会员
const checkedMember = ref("VIP3");
// 最终价格
const endMemberPrice = computed(() => {
  const info = memberPriceList.value.find(
    (item) => item.id === checkedMember.value
  );
  return info?.data.total_price;
});

// 获取会员信息
const getMemberInfo = async () => {
  try {
    const result = await reqMemberInfo();
    memberPriceList.value = result;
  } catch (error) {
    ElMessage.error("获取会员信息失败");
  }
};

// 会员权益
const equityInfoList = ref([
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/teach_video_free.png",
    equityText1: "个会员专区",
    equityText2: "课程免费学习",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_preferential.png",
    equityText1: "非会员专区课程",
    equityText2: "可获会员立减优惠",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_screen_2x.png",
    equityText1: "同屏对比",
    equityText2: "功能",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/update_music_3x.png",
    equityText1: "音频提取",
    equityText2: "功能",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/music_clip_3x.png",
    equityText1: "音频剪辑",
    equityText2: "功能",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_beat.png",
    equityText1: "节拍口令",
    equityText2: "功能",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_photo_download1_3x.png",
    equityText1: "保存视频到",
    equityText2: "手机本地相册",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_create_2x.png",
    equityText1: "练习室创建",
    equityText2: "数量特权",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_copy_2x.png",
    equityText1: "练习室复制",
    equityText2: "数量特权",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_add_2x.png",
    equityText1: "练习室内容",
    equityText2: "数量特权",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_upload_2x.png",
    equityText1: "练习室上传",
    equityText2: "特权",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_resume_2x.png",
    equityText1: "练习室恢复",
    equityText2: "特权",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_only_2x.png",
    equityText1: "仅主页可见",
    equityText2: "数量特权",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_icon_only_2x.png",
    equityText1: "免广告特权",
    equityText2: "",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/lv_accelerate.png",
    equityText1: "成长等级",
    equityText2: "加速特权",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/course_equity.png",
    equityText1: "会员学习",
    equityText2: "成长优先帮扶",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/member_logo.png",
    equityText1: "会员专享",
    equityText2: "身份标识",
  },
  {
    id: Math.random().toString(36).slice(2),
    equityImg: "/public/images/update_equity.png",
    equityText1: "享受新增",
    equityText2: "权益和功能",
  },
]);

const userInfo = ref({})

// 获取用户个人信息
const getUserInfo = async () => {
  try {
    const result = await reqEditInfo();
    userInfo.value = result;
  } catch (error) {
    ElMessage.error("获取用户信息失败");
  }
};

onMounted(() => {
  getMemberInfo();
  getUserInfo()
});
</script>
<style scoped lang="scss">
.right {
  width: 1020px;
  margin: 0 0 20px;
  .topHeader {
    margin: 0 0 10px;
    .title {
      padding: 6px 10px;
      color: #111;
      font-size: 14px;
    }
  }
  .content {
    width: 100%;
    .contentTop {
      padding-bottom: 37px;
      border-bottom: 1px solid #e3e3e3;
      .nameAvatar {
        display: flex;
        justify-content: center;
        align-items: center;
        .memberAvatar {
          width: 100px;
          height: 100px;
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        .memberName {
          margin-left: 21px;
          text-align: left;
          width: 84px;
          div:nth-of-type(1) {
            font-size: 20px;
            color: #000;
            white-space: nowrap;
          }
          div:nth-of-type(2) {
            margin-top: 14px;
            font-size: 14px;
            color: #f93684;
          }
        }
      }
      .lessen {
        text-align: center;
        margin-top: 19px;
      }
      .priceCenter {
        margin: 21px 120px 0 120px;
        .priceList {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-content: space-between;
          .priceItem {
            position: relative;
            margin-top: 30px;
            box-sizing: border-box;
            width: 220px;
            height: 150px;
            border: 1px solid #b1b5c1;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            .recommend {
              position: absolute;
              top: -10%;
              right: -10%;
              display: block;
              width: 76px;
              height: 36px;
              line-height: 34px;
              font-size: 14px;
              border-radius: 16px;
              border: 2px solid #fff;
              text-align: center;
              color: #fff;
              background: linear-gradient(-56deg, #ff638f, #ff4683);
            }
            p:nth-of-type(1) {
              margin-top: 15px;
            }
            p:nth-of-type(2) {
              margin-top: 10px;
              font-size: 30px;
              span {
                font-size: 16px;
              }
            }
            p:nth-of-type(3) {
              margin-top: 9px;
              height: 20px;
              font-size: 16px;
              color: #7d8090;
            }
            &.activePrice {
              margin-top: 30px;
              box-sizing: border-box;
              width: 220px;
              height: 150px;
              border: 2px solid #f93684;
              background-color: #f9ebf1;
              color: #f93684;
              p:nth-of-type(3) {
                color: #f93684;
              }
            }
            .teenager {
              background: linear-gradient(-56deg, #ff4683, #ff638f);
              height: 24px;
              line-height: 24px;
              border-radius: 12px;
              padding: 0 20px;
              color: #fff;
              font-size: 14px;
              display: inline-block;
              margin-top: 5px;
            }
          }
        }
      }
      .openMember {
        width: 330px;
        height: 98px;
        margin: 0 315px;
        button {
          margin: 30px auto 12px;
          padding: 9px 15px;
          width: 330px;
          height: 56px;
          font-size: 16px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(-56deg, #ff4683, #ff638f);
          color: #fff;
          cursor: pointer;
        }
      }
      .agree {
        text-align: center;
        font-size: 14px;
        span {
          color: #f93684;
        }
      }
    }
    .contentBottom {
      padding-bottom: 15px;
      border-bottom: 1px solid #e3e3e3;
      div:nth-of-type(1) {
        color: #111;
        font-weight: 700;
        font-size: 20px;
        margin-top: 32px;
      }
      .equityList {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        margin: 20px 0 5px 0;
        padding-left: 19px;
        .equity {
          position: relative;
          // box-sizing: border-box;
          width: 127px;
          // height: 113px;
          line-height: 20px;
          margin: 0 30px 30px 0;
          padding-top: 14px;
          border: 1px solid #e3e3e3;
          border-radius: 8px;
          text-align: center;
          .equityImg {
            margin: 0;
            height: 42px;
            text-align: center;
            img {
              width: 46px;
              height: 42px;
            }
          }
          .equityText {
            margin: 14px 0;
            p {
              font-size: 14px;
              font-weight: normal;
              span {
                color: rgb(249, 54, 132);
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-popover.popoverBox {
  padding: 18px 20px;
  border: 2px solid rgba(249, 83, 138, 0.5);
  border-radius: 15px;
  .el-popper__arrow::before {
    border: 2px solid rgba(249, 83, 138, 0.5);
  }
  .popoverBoxInfo {
    gap: 0 !important;
    .hoverImg {
      margin: 0 auto 10px;
      width: 52px;
      height: 52px;
      border: 1px solid #ffc6d3;
      border-radius: 26px;
      img {
        width: 50px;
        height: 50px;
        padding: 5px;
        text-align: center;
        margin: 0 auto 10px;
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
    p.hoverText {
      margin: 5px auto 0;
      padding: 0;
      text-align: left;
      font-size: 14px;
      color: #333;
      line-height: 24px;
      span {
        color: #f93684;
      }
    }
    .hoverBtn {
      margin: 25px auto 20px;
      line-height: 36px;
      border-radius: 6px;
      color: #fff;
      font-size: 16px;
      height: 36px;
      width: 80%;
      background: #f9538a;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>

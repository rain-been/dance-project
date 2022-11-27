<template>
  <div class="card-content-item">
    <div class="card-item">
      <div class="cover_wrap" @click="toVip_courseDetails(courseItem.router)">
        <div class="cover">
          <span style="display: none"
            ><span class="promotion">推荐</span><span class="origin_icon"></span
          ></span>
          <img class="img" :src="courseItem.cover[0]" />
          <img
            src="../../assets/images/course/here is play btn icon.png"
            alt="here is play btn icon"
            class="play_icon"
          />
          <div class="subject_card">视频课</div>
          <!----><!---->
        </div>
      </div>
      <div class="moment_detail">
        <div class="card_detail">
          <div class="title" @click="toVip_courseDetails(courseItem.router)">
            <div class="example" data-ellipsis-id="5983">
              <!----><a
                :href="'https://www.dance365.com' + courseItem.router"
                target="_blank"
                class="differ-viewed ellipsis-content"
                >{{ courseItem.title }}</a
              >
            </div>
          </div>
          <div class="viewCount isVipFreeCustom">
            <div class="price">
              <div>
                <span style="font-size: 14px">￥</span>
                {{ courseItem.commodityBackup.price }}
              </div>
            </div>
            <!----><span class="num">
              {{ courseItem.statisticsBackup.viewCount }}人浏览 </span
            ><!---->
          </div>
          <!----><!---->
          <div class="interrelated_info vip_free">
            <div class="vip_free_icon"></div>
            <span class="praiseCount"></span>
            <span
              class="iconfont icon-dianzan"
              style="margin-right: 5px"
            ></span>
            <span class="num_info">{{
              courseItem.statisticsBackup.praiseCount
            }}</span
            ><span class="commentCount">
              <span
                class="iconfont icon-pinglun"
                style="margin-right: 5px"
              ></span>
              <span class="num_info">{{
                courseItem.statisticsBackup.commentCount
              }}</span></span
            ><span class="favoriteCount">
              <span
                class="iconfont icon-shoucang"
                style="margin-right: 5px"
              ></span>
              <span class="num_info">{{
                courseItem.statisticsBackup.favoriteCount
              }}</span></span
            >
          </div>
        </div>
        <div class="creator_info">
          <div class="left">
            <div class="creator">
              <el-image
                :src="courseItem.creatorBackup.avatar"
                class="avatar avatarClass notshowname"
                :lazy="true"
              />
              <!-- <img
                class="avatar avatarClass notshowname"
                :style="`background-image:url(${courseItem.creatorBackup.avatar});`"
              /> -->
              <div class="text_area">
                <div class="first_line"><!----><!----><!----></div>
              </div>
            </div>
            <span class="creator_name" style="max-width: 88px">{{
              courseItem.creatorBackup.name
            }}</span
            ><img
              class="certified_icon overflow_title"
              src="../../assets/images/course/authenticate_personal_3x.png"
            />
          </div>
          <span class="uploadTime"
            ><time datetime="1666876054375" class="uploadTime">{{
              timestampToTime(courseItem.updateTime)
            }}</time></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardItem',
});
</script>

<script setup>
// 接收属性
defineProps(['courseItem']);
const toVip_courseDetails = (url) => {
  // console.log(url);
  window.open('https://www.dance365.com' + url);
};

// 转换时间戳
const timestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  var Y =
    date.getFullYear() === 2022
      ? ''
      : date.getFullYear().toString().slice(-2) + '-';
  var M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-';
  var D = (date.getDate() + '').padStart(2, '0');
  return Y + M + D;
};
</script>

<style lang="scss" scoped>
.card-content-item {
  display: inline-block;
  .card-item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 224px;
    height: auto;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 4px;
    .cover_wrap {
      height: 125.87611px;
      .cover {
        position: relative;
        width: 100%;
        height: 100%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        overflow: hidden;
        display: flex;
        align-items: center;
        cursor: pointer;
        .promotion {
          position: absolute;
          right: -29px;
          top: -20px;
          font-size: 10px;
          width: 70px;
          height: 40px;
          line-height: 65px;
          display: inline-block;
          background: #ff5e37;
          color: #fff;
          text-align: center;
          box-shadow: 0 0 1px #662010;
          transform: rotate(35deg);
        }
        .origin_icon {
          position: absolute;
          left: 5px;
          top: 5px;
          font-size: 10px;
          width: 40px;
          height: 22px;
          line-height: 22px;
          display: inline-block;
          text-align: center;
          //  background: url(https://rs.dance365.com/home_img_ycpc.png) no-repeat;
          background-size: cover;
        }
        .img {
          width: 100%;
          height: 100%;
          background-position: 50%;
          background-size: cover;
        }
        .play_icon {
          position: absolute;
          bottom: 6px;
          left: 10px;
          display: inline-block;
          width: 30px;
          height: 30px;
        }
        .subject_card {
          position: absolute;
          color: #fff;
          right: 10px;
          bottom: 10px;
          font-size: 12px;
          height: 24px;
          line-height: 24px;
          padding: 0 10px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .moment_detail {
      width: 100%;
      color: #b1b5c1;
      height: 155px;
      .card_detail {
        box-sizing: border-box;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 13px;
        border-bottom: 1px solid #ebeced;
        height: 104px;
        .title {
          box-sizing: border-box;
          font-size: 14px;
          color: #111;
          padding-top: 10px;
          padding-bottom: 0;
          line-height: 18px;
          height: 45px;
          width: 100%;
          cursor: pointer;
          .differ-viewed {
            color: inherit;
            text-decoration: none;
            word-break: break-all;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }
        .viewCount {
          box-sizing: border-box;
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price {
            color: #f93684;
            font-size: 16px;
            -webkit-transform: translateY(-2px);
            transform: translateY(-2px);
            line-height: 14px;
          }
          .num {
            word-break: keep-all;
          }
          &.isVipFreeCustom {
            height: 32px;
            line-height: 22px;
            padding-bottom: 7px;
          }
        }
        .interrelated_info {
          box-sizing: border-box;
          position: relative;
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 28px;
          line-height: 12px;
          padding-bottom: 12px;
          .vip_free_icon {
            position: absolute;
            left: 0;
            top: -12px;
            display: inline-block;
            width: 38px;
            height: 14px;
            background: url(https://rs.dance365.com/vip_free@3x.png);
            background-size: cover;
          }
          .num_info {
            box-sizing: border-box;
            max-width: 36px;
            margin-right: 18px;
          }
          &.vip_free {
            padding-bottom: 6px;
          }
        }
      }
      .creator_info {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        padding-left: 16px;
        position: relative;
        font-size: 12px;
        .left {
          display: flex;
          align-items: center;
          max-width: 128px;
          .creator {
            display: flex;
            align-items: center;
            text-decoration: none;
            cursor: pointer;
            transform: translateY(1px);
            .avatar {
              width: 24px;
              height: 24px px;
              margin-right: 0;
              position: relative;
              flex-shrink: 0;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              margin-right: 9px;
              background-size: cover;
              background-position: 50%;
            }
          }
          .creator_name {
            color: #111;
            cursor: pointer;
            margin-left: 8px;
            max-width: 68px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .certified_icon {
            transform: translateX(2px);
            margin-left: 0;
            width: 12px;
            height: 12px;
            border-style: none;
          }
        }
        .uploadTime {
          transform: translateY(1px);
          padding-right: 8px;
        }
      }
    }
  }
  &:not(:nth-of-type(5n)) {
    margin-right: 20px;
  }
}
</style>

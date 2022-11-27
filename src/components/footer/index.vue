<template>
  <div class="footer">
    <div class="content-width">
      <ul class="business_info">
        <li class="item_info">
          <RouterLink class="item" to="/resources">关于我们</RouterLink>
        </li>
        <li class="item_info">
          <RouterLink class="item" to="/resources"
            >用户隐私权政策</RouterLink
          >
        </li>
        <li class="item_info">
          <RouterLink class="item" to="/resources">用户服务协议</RouterLink>
        </li>
        <li class="item_info">
          <RouterLink class="item" to="/resources">联系我们</RouterLink>
        </li>
      </ul>
      <address class="contact_info">
        <div
          class="wechat icon_box el-tooltip"
          aria-describedby="el-tooltip-4992"
          tabindex="0"
        ></div>
        <div class="blog icon_box" style="display: none"></div>
        <div
          class="phone icon_box el-tooltip"
          aria-describedby="el-tooltip-8357"
          tabindex="0"
        ></div>
      </address>
      <!---->
      <div class="copy_right">
        <p class="info">
          Copyright © 2010-2022 南京爱一格网络科技有限公司 版权所有
        </p>
        <p class="info">
          经营性许可证编号：
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener"
            class="info"
            >苏B2-20180515</a
          >&nbsp;&nbsp;
          <a
            href="http://ccm.mct.gov.cn/ccnt/sczr/service/business/emark/toDetail/b324ae6cb184469691bb4a8e75a93b41"
            target="_blank"
            rel="noopener"
            class="info"
            ><img
              src="https://rs.dance365.com/jinying.png"
              style="width: 20px; height: 20px; position: relative; top: 5px"
            />苏网文〔2021〕4647-106号</a
          >
        </p>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener"
          class="info"
          >苏ICP备20036081号</a
        >
        <p class="info" style="margin-top: 8px">
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010602010735"
            class="info"
            ><div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <img src="https://rs.dance365.com/pc/gongan.png" />苏公网安备
              32010602010735号
            </div></a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
});
</script>

<script lang = "ts" setup>
</script>

<style scoped lang='less'>
.footer {
  text-align: center;
  background-color: #221f23;
  color: #b1b5c1;
  font-size: 14px;
  .content-width {
    box-sizing: border-box;
    padding: 24px 40px 18px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    .business_info {
      margin: 0 auto;
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: space-around;
      .item {
        text-decoration: none;
        color: #b1b5c1;
      }
      :hover {
        color: #f93684;
      }
    }
  }
  a {
    text-decoration: none;
    color: #b1b5c1;
  }
}
</style>
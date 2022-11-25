<template>
    <footer data-v-168a7137="" class="footer_wrapper content-width-min">
        <div data-v-168a7137="" class="content-width footer-content-container">
            <ul data-v-168a7137="" class="business_info">
                <li data-v-168a7137="" class="item_info"><a data-v-168a7137="" target="_blank" href="/aboutUs">关于我们</a>
                </li>
                <li data-v-168a7137="" class="item_info"><a data-v-168a7137="" target="_blank"
                        href="/privacyStatement">用户隐私权政策</a></li>
                <li data-v-168a7137="" class="item_info"><a data-v-168a7137="" target="_blank"
                        href="/userAgreement">用户服务协议</a></li>
                <li data-v-168a7137="" class="item_info"><a data-v-168a7137="" target="_blank"
                        href="/contactUs">联系我们</a></li>
            </ul>
            <address data-v-168a7137="" class="contact_info">
                <div data-v-168a7137="" class="wechat icon_box el-tooltip" aria-describedby="el-tooltip-2451"
                    tabindex="0"></div>
                <div data-v-168a7137="" class="blog icon_box" style="display: none;"></div>
                <div data-v-168a7137="" class="phone icon_box el-tooltip" aria-describedby="el-tooltip-7915"
                    tabindex="0"></div>
            </address>
            <!---->
            <div data-v-168a7137="" class="copy_right">
                <p data-v-168a7137="" class="info">Copyright © 2010-2022 南京爱一格网络科技有限公司 版权所有</p>
                <p data-v-168a7137="" class="info">
                    经营性许可证编号：
                    <a data-v-168a7137="" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener"
                        class="info">苏B2-20180515</a>&nbsp;&nbsp;
                    <a data-v-168a7137=""
                        href="http://ccm.mct.gov.cn/ccnt/sczr/service/business/emark/toDetail/b324ae6cb184469691bb4a8e75a93b41"
                        target="_blank" rel="noopener" class="info"><img data-v-168a7137=""
                            src="https://rs.dance365.com/jinying.png"
                            style="width: 20px; height: 20px; position: relative; top: 5px;">苏网文〔2021〕4647-106号</a>
                </p><a data-v-168a7137="" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener"
                    class="info">苏ICP备20036081号</a>
                <p data-v-168a7137="" class="info" style="margin-top: 8px;"><a data-v-168a7137="" target="_blank"
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010602010735" class="info">
                        <div data-v-168a7137="" style="display: flex; justify-content: center; align-items: center;">
                            <img data-v-168a7137="" src="https://rs.dance365.com/pc/gongan.png">苏公网安备 32010602010735号
                        </div>
                    </a></p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Footer'
})
</script>

<script lang = "ts" setup>

</script>
<style lang="less" scoped>
.footer_wrapper{
    text-align: center;
    background-color: #221f23;
    color: #b1b5c1;
    font-size: 14px;
    .footer-content-container{
      box-sizing: border-box;
      padding: 24px 40px 18px;
    }
    .content-width{
      width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
    .business_info{
      margin: 0 auto;
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: space-around;
      .item_info{
        width: calc(25% - 4px);
        list-style: none;
        a{
          color: inherit;
          text-decoration: none;
        }
      }
      .item_info:not(:last-child){
        border-right: 1px solid #eaecf0;
      }
    }
    .contact_info{
      display: flex;
      justify-content: space-between;
      width: 130px;
      margin: 28px auto 30px;
      .icon_box.wechat{
        width: 26px;
        height: 24px;
        background: url("https://rs.dance365.com/img/weChat_normal.a1769059.svg") no-repeat;
        background-size: 100% 100%;
      }
      .icon_box.phone{
        width: 24px;
        height: 22px;
        background: url("	https://rs.dance365.com/img/phone_normal.86835eeb.svg") no-repeat;
        background-size: 100% 100%;
      }
    }
    .copy_right .info{
      line-height: 12px;
      color: #b1b5c1;
      text-decoration: none;
      margin-bottom: 14px;
      img{
        border-style: none;
      }
    }
}
</style>
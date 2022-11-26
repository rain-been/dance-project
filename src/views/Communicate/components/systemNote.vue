<!--  -->
<template>
  <div class="right-contain">
            <div class="header-right">
                <div class="title">系统通知</div>
            </div>
            <div class="footer-right">
                <div class="top-footer">
                    <span class="left">致新用户</span>
                    <span class="right">昨天<i>17:00</i></span>
                </div>
                <div class="middle-footer">
                    <span>你好，亲爱的用户： 在这里，有视频就可成为免费教程？是的！ 3种学习方式，因人而异，你可任选：免费、付费、开通会员。 如何在线学舞练舞？创建练习室，任何视频都能学！
                        点按下方按钮，立即去查看~</span>
                </div>
                <div class="bottom-footer">
                    <a href="https://m.dance365.com/detail/article?momentId=30366575a62b44dea5c130b4c095e0c0&source=user_register" class="item" >如何在线学舞</a>
                    <a href="https://m.dance365.com/detail/article?momentId=e91702b52ecf421c833cb94a90474bab&source=message" class="item">常见问题解答</a>
                </div>
            </div>
        </div>
   
</template>


<script lang="ts">
    export default {
        name:'systemNote',
    }
</script>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
.contain .right-contain .header-right {
    height: 72px;
    width: 1020px;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 4px;
    position: relative;
}

.contain .right-contain .header-right .title {
    position: absolute;
    top: 24px;
    left: 30px;
    font-size: 14px;
}

.contain .right-contain .footer-right {
    width: 1020px;
    height: 740px;
    background-color: white;
    padding: 50px 30px 0 30px;
    box-sizing: border-box;
}

.contain .right-contain .footer-right .top-footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.contain .right-contain .footer-right .middle-footer {
    margin: 20px 0;
    font-size: 14px;
}

.contain .right-contain .footer-right .bottom-footer {
    font-size: 14px;
}

.contain .right-contain .footer-right .bottom-footer .item {
    padding: 10px 20px;
    background-color: #f93684;
    border: none;
    margin-right: 30px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
}
</style>
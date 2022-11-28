<!--  -->
<template>
  <div class="right-contain">
            <div class="header-right">
                <div class="title">订单通知</div>
            </div>
            <div class="footer-right">
                <div class="image">
                    <img src="../../../assets/no_content@3x.0fd78ad2.png" alt="无更多结果">
                </div>
                <div class="dsc">无更多结果</div>
            </div>
        </div>
   
</template>
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
    // overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #bbb;
    font-size: 20px;
}

.contain .right-contain .footer-right .image {
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    margin-bottom: 30px;
    vertical-align: center;
    background-color: gold;
}
</style>
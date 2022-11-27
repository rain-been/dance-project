<template>
    <div class="card">
        <div class="card-top">
            <img :src="videoItem.cover[0]">
            <!-- <el-image :src="videoItem.cover[0]" :lazy="true" /> -->
        </div>
        <div class="card-middle">
            <div class="middle-top">
                <i class="iconfont icon-canjiabisaizuopin-"></i>
                <span>{{ videoItem.title }}</span>
            </div>
            <div class="middle-middle">
                <span>{{ videoItem.num }}人浏览</span>
            </div>
            <div class="middle-bottm">
                <div class="bottom_icon">
                    <i class="iconfont icon-dianzan"></i>
                    <span>{{ videoItem.algorithmSortValue }}</span>
                </div>
                <div class="bottom_icon">
                    <i class="iconfont icon-pinglun"></i>
                    <span>{{ videoItem.vipPromotion }}</span>
                </div>
                <div class="bottom_icon">
                    <i class="iconfont icon-shoucang"></i>
                    <span>10</span>
                </div>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-bottom-left">
                <img src="../assets/images/resource/1 (3).png">
                <span>{{ videoItem.cityName }}</span>
                <!-- <i class="iconfont icon-zhuanshi"></i> -->
            </div>
            <div class="card-bottom-right">
                10-06
            </div>
        </div>
    </div>
</template>

<script >
import { defineComponent, defineProps } from "vue";

export default defineComponent({
    name: "ListItemVideo",
});
</script>

<script setup>
const props = defineProps(["videoItem"]);
</script>

<style lang="scss" scoped>
.card {
    width: 224px;
    display: flex;
    flex-direction: column;

    .card-top {
        width: 224px;
        height: 125px;
        background-color: #fff;

        img {
            width: 100%;
            height: 126px
        }
    }

    .card-middle {

        background: #fff;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;

        .middle-top {
            display: flex;
            height: 45px;

            span {
                font-size: 12px;
            }

        }

        .middle-middle {
            margin: 10px 0;
            font-size: 10px;
            color: #b1b5c1;
        }

        .middle-bottm {
            display: flex;

            .bottom_icon {
                margin-right: 10px;
                display: flex;
                align-items: center;

                i {
                    color: #ccc;
                    font-size: 10px;
                    margin-right: 7px;
                }

                span {
                    color: #b1b5c1;
                    font-size: 11px;
                }
            }
        }
    }

    .card-bottom {
        background: #fff;
        border-top: 1px solid #b1b5c1;
        height: 50px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;

        .card-bottom-left {
            display: flex;
            height: 50px;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 10px;
            }

            span {
                font-size: 10px;
                margin-right: 4px;
            }

            i {
                color: red
            }

        }

        .card-bottom-right {
            font-size: 12px;
            color: #b1b5c1;
        }

    }
}
</style>
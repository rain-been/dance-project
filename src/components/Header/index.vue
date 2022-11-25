<template>
    <el-card>
        <div class="header">
            <div class="logo">
                <img class="img" src="https://rs.dance365.com/logo@3xrenew3.png">
            </div>
            <div class="main">
                <router-link to="/resources" :class="current == '资源' ? 'active' : ''" class="item">资源</router-link>
                <router-link to="/course" :class="current == '课程' ? 'active' : ''" class="item">课程</router-link>
                <router-link to="/training" :class="current == '练习室' ? 'active' : ''" class="item">练习室</router-link>
                <router-link to="/communicate" :class="current == '交流' ? 'active' : ''" class="item">交流</router-link>
                <router-link to="/person" :class="current == '用户' ? 'active' : ''" class="item">我的</router-link>
            </div>
            <div class="right">
                <span class="text"><i class="iconfont icon-shouji"></i>下载APP</span>
                <div class="text" style="background-color:#f93684; color: white; border-radius: 10px;height: 30px;">+发布</div>
                <p v-if="false">
                    <el-button @click="logout">
                        退出登录
                    </el-button>
                </p>
                <p style="height: 30px;margin-top: -1px;">
                    <el-button class='text' @click="centerDialogVisible = true">
                        登录
                    </el-button>
                </p>
                <el-dialog v-model="centerDialogVisible" title="扫码登录" width="30%" align-center>
                    <img src="./image/erweima.png" class="image" style="margin-left:100px;"  alt="">
                    <p class="text1"> 打开“中舞网APP”,扫描二维码登录</p>
                    <p class="text1">如未安装APP,点击下方登录注册</p>
                    <template #footer>

                        <span class="dialog-footer">
                            <el-button @click="toRegister">注册</el-button>
                            <el-button type="primary" @click="toLogin">
                                登录
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>
        </div>
    </el-card>
</template>
<script lang="ts">
export default {
    name: 'headBar'
}
</script>
<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
const router = useRouter()
const centerDialogVisible = ref(false)
const toRegister = () => {
    centerDialogVisible.value = false
    router.push('/register')
}
const toLogin = () => {
    centerDialogVisible.value = false
    router.push('/login')
}
const route = useRoute()

const current = ref(route.meta.title)
// const logout = async () => {
//     try {
//         await userInfoStore.logout()
//         router.push('/home')
//     } catch (error) {
//         console.log(error);

//     }
// }
watch(route, (nvl, ovl) => {
    current.value = route.meta.name
}, { immediate: true, deep: true })


onMounted(() => {
    current.value = route.meta.name
})
</script>

<style lang="less" scoped>
.el-card {
    --el-card-border-color: var(--el-border-color-light);
    --el-card-border-radius: 4px;
    --el-card-padding: 0px;
    --el-card-bg-color: var(--el-fill-color-blank);
}

.header {
    width: 1200px;
    height: 60px;
    display: flex;
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    .logo {
        width: 128px;
        height: 30px;
        line-height: 50px;

        .img {
            width: 128px;
            height: 30px;
            margin-top: 15px;
        }
    }

    .main {
        width: 458px;
        height: 44px;
        margin-top: 18px;

        .item {
            margin-left: 50px;
            font-size: 18px;
            text-decoration: none;
        }

        .main .item :hover {
            color: #fa5e9d;
        }

        .active {
            color: #fa5e9d;
        }

    }

    .right {
        position: absolute;
        right: 0;
        display: flex;
        padding-top: 15px;

        .text {
            width: 105px;
            font-size: 16px;
            text-align: center;
            margin-right: 40px;
            line-height: 30px;
        }

        .text:last-child {
            margin-right: 0;
        }
    }

    .dialog-footer {
        display: flex;
        justify-content: center;
    }

    .text1 {
        text-align: center;
    }

    .dialog-footer button:first-child {

        margin-right: 10px;

    }
}
</style>

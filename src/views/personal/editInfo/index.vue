<template>
  <div>
    <div class="right">
      <el-card class="topHeader">
        <div class="title">{{ route.meta.title }}</div>
      </el-card>
      <el-card class="content">
        <div class="userInfoBox">
          <div class="avaterImg">
            <el-upload
              class="avatar-uploader"
              action="http://39.98.123.211:8510/admin/product/fileUpload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="updateUserInfo.avatar"
                :src="updateUserInfo.avatar"
                class="avatar"
              />
              <img
                class="oldAvatar"
                v-else
                src="../../../assets/images/personal/1.png"
                alt=""
              />
              <!-- <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
            </el-upload>
          </div>
          <p class="changeImgText">点击更换</p>
          <div class="infoDetail"></div>
        </div>
        <div class="infoForm">
          <el-form
            :inline="true"
            label-width="100"
            label-position="left"
            size="default"
          >
            <el-form-item label="用户名:">
              <el-input v-model="updateUserInfo.account" />
            </el-form-item>
            <el-form-item label="生日:">
              <el-col :span="11">
                <el-date-picker
                  v-model="updateUserInfo.birthday"
                  type="date"
                  label="选择日期"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item label="性别:">
              <el-radio-group
                class="genderBox"
                v-model="updateUserInfo.sex"
                text-color="#fff"
                fill="#f93684"
              >
                <el-radio-button label="男" />
                <el-radio-button label="女" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="城市:">
              <el-select placeholder="请选择" v-model="updateUserInfo.city">
                <el-option label="武汉" value="c1" />
                <el-option label="北京" value="c2" />
                <el-option label="上海" value="c3" />
                <el-option label="河南" value="c4" />
              </el-select>
            </el-form-item>
            <el-form-item label="成长等级:">
              <div class="level">
                <i> Lv.{{ updateUserInfo.level }}</i>
              </div>
            </el-form-item>

            <el-form-item label="技能水平:">
              <el-select
                placeholder="请选择"
                v-model="updateUserInfo.skillLevelName"
              >
                <el-option label="零基础" value="l1" />
                <el-option label="业余" value="l2" />
                <el-option label="专业" value="l3" />
              </el-select>
            </el-form-item>
            <el-form-item label="兴趣技能:" class="skills">
              <div
                class="checkedSkill"
                v-for="skillsItem in updateUserInfo.avocation"
                :key="skillsItem.id"
              >
                <span>{{ skillsItem.name }}</span>
                <i class="iconfont icon-guanbi2fill"></i>
              </div>
              <div class="skillsBtn">请选择</div>
            </el-form-item>
          </el-form>
          <div class="submitInfo">
            <button>保存</button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "editInfo",
});
</script>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { reqEditInfo } from "@/api/personal";

const route = useRoute();

// 收集用户信息
const updateUserInfo = ref({
  avatar: "",
  account: "",
  birthDate: "",
  sex: "男",
  cityName: "",
  // 成长等级
  level: "2",
  // 技能水平
  skillLevelName: "",
  // 兴趣技能
  avocation: [],
});

// 获取用户个人信息
const getUserInfo = async () => {
  try {
    const result = await reqEditInfo();
    updateUserInfo.value.account = result.account;
    updateUserInfo.value.avatar = result.avatar;
    updateUserInfo.value.birthDate = result.moreBackup.birthDate;
    updateUserInfo.value.sex = result.moreBackup.sex;
    updateUserInfo.value.cityName = result.moreBackup.cityName;
    updateUserInfo.value.level = result.level;
    updateUserInfo.value.skillLevelName = result.moreBackup.skillLevelName;
    updateUserInfo.value.avocation = result.avocation;
  } catch (error) {
    ElMessage.error("获取用户信息失败");
  }
};
onMounted(() => {
  getUserInfo();
});

// 上传头像
const handleAvatarSuccess = (response, uploadFile) => {
  // imageUrl.value = URL.createObjectURL(uploadFile.raw!);
  updateUserInfo.value.avatar = response.data;
};

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};
onMounted(() => {
  // console.log(route.meta.title);
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
    .userInfoBox {
      text-align: center;
      .avaterImg {
        text-align: center;
        .avatar-uploader .avatar {
          box-shadow: 0 0 5px 1px #f93684;
          border-radius: 100%;
          width: 120px;
          height: 120px;
          display: block;
        }
        .oldAvatar {
          border-radius: 100%;
          width: 120px;
          height: 120px;
        }
        .oldAvatar:hover {
          box-shadow: 0 0 5px 1px #f93684;
          border-radius: 100%;
          width: 120px;
          height: 120px;
        }
      }
      .changeImgText {
        color: #7d8090;
        font-size: 14px;
        text-align: center;
        padding: 12px;
        margin: 0;
      }
    }
    .infoForm {
      font-size: 14px;
      padding: 30px 140px;
      color: #7d8090;
      .genderBox {
        display: flex;
        justify-content: space-between;
        width: 150px;
        :deep(span.el-radio-button__inner) {
          border: none;
          width: 70px;
          border-radius: 5px;
          background-color: #f5f7f9;
          border-color: #f5f7f9;
          color: #7d8090;
        }
      }
      :deep(.el-input__wrapper) {
        flex-grow: 0;
        // padding: 0 44px 0 15px;
        background-color: #f5f7f9;
        border-color: #eaecf0 !important;
        width: 160px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #dcdfe6;
        box-shadow: none;
        box-sizing: border-box;
      }
      :deep(.el-form-item__label) {
        padding: 0 12px 0 20px;
        font-weight: normal;
        font-size: 13px;
        color: #111;
        height: 40px;
        line-height: 40px;
      }
      :deep(.el-form-item__content) {
        width: 214px;
        height: 40px;
      }
      :deep(.el-select .el-input__wrapper.is-focus) {
        box-shadow: 0 0 0 1px #f93684 inset !important;
      }
      :deep(.el-select) {
        --el-select-input-focus-border-color: #f93684;
      }
      .level {
        padding: 6px 0;
        text-align: center;
        height: 34px;
        line-height: 22px;
        i {
          margin-left: 4px;
          //   padding: 0 8px;
          padding: 1.5px 7px;
          border-radius: 4px;
          font-size: 14px;
          color: #fff;
          background: linear-gradient(#ff289b, #ff43d0);
        }
      }
      .skills {
        width: 100%;
        .checkedSkill {
          position: relative;
          text-align: center;
          padding: 0 15px;
          color: #333;
          // width: 63px;
          height: 38px;
          // line-height: 40px;
          border: 1px solid #eaecf0;
          cursor: pointer;
          vertical-align: middle;
          margin: 0 15px 5px 0;
          border-radius: 4px;
          span {
            vertical-align: middle;
          }
          .icon-guanbi2fill {
            position: absolute;
            top: -15px;
            right: -5px;
          }
        }
        .skillsBtn {
          text-align: center;
          width: 100px;
          height: 30px;
          line-height: 30px;
          background-color: #f5f7f9;
          color: #bbbfc9;
          border: none;
          border-radius: 4px;
          vertical-align: middle;
          cursor: pointer;
        }
      }
    }
    .submitInfo {
      margin-top: 15px;
      text-align: center;
      button {
        width: 140px;
        height: 46px;
        font-size: 12px;
        margin: 0 auto;
        display: block;
        background-color: #f93684;
        color: #fff;
        border: 1px solid #f93684;
        border-radius: 4px;
      }
    }
  }
}
.el-select-dropdown__item.selected {
  color: #f93684;
  font-weight: 700;
}
</style>

<style>
.el-date-table td.today .el-date-table-cell__text {
  color: #f93684;
  font-weight: 700;
}
.el-date-table td.available:hover {
  color: #f93684;
}
.el-date-table td.current:not(.disabled) .el-date-table-cell__text {
  color: #fff;
  background-color: #f93684;
}
.el-picker-panel__icon-btn:hover {
  color: #f93684;
}
.el-date-picker__header-label:hover {
  color: #f93684;
}
.el-year-table td.today .cell {
  color: #f93684;
  font-weight: 700;
}
.el-year-table td .cell:hover {
  color: #f93684;
}
</style>

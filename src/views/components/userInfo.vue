<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 14:50:45
-->
<template>
  <div class="bg">
    <tooltipTitle title="用户信息" info="用户信息"></tooltipTitle>
    <div class="info-detail">
      <div class="left-part">
        <div class="detail-row">
          <div class="row-key">账号:</div>
          <div class="row-value">{{ userInfo.username }}</div>
        </div>
        <div class="detail-row">
          <div class="row-key">性别:</div>
          <div class="row-value">
            <el-select
              size="mini"
              v-model="userInfo.gender"
              :disabled="disabled.gender"
            >
              <el-option label="男" :value="0"> </el-option>
              <el-option label="女" :value="1"> </el-option
            ></el-select>
          </div>
        </div>
        <div class="detail-row">
          <div class="row-key">邮箱:</div>
          <div class="row-value">
            <el-input
              size="mini"
              v-model="userInfo.email"
              :disabled="disabled.email"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="right-part">头像</div>
    </div>
    <div class="btngroup">
      <el-button size="small" v-if="pageType === 'View'" @click="clickEdit"
        >编辑</el-button
      >
      <el-button
        type="primary"
        size="small"
        v-if="pageType === 'Edit'"
        @click="clickConfirm"
        >确定</el-button
      >
      <el-button size="small" v-if="pageType === 'Edit'" @click="clickCancel"
        >取消</el-button
      >
    </div>
  </div>
</template>

<script>
import { apiGetUserInfo, updateUserInfo } from "@/api/user";
import tooltipTitle from "@/components/tooltipTitle.vue";
export default {
  name: "userInfo",
  components: { tooltipTitle },
  data() {
    return {
      userInfo: {},
      disabled: {
        email: true,
        gender: true,
      },
      pageType: "View",
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const { data: userInfo } = await apiGetUserInfo();
      this.userInfo = userInfo;
    },
    clickEdit() {
      this.enableAll();
      this.pageType = "Edit";
    },
    async clickConfirm() {
      const { email, gender } = this.userInfo;
      await updateUserInfo({ email, gender });
      this.disableAll();
      this.pageType = "View";
      this.getUserInfo();
    },
    clickCancel() {
      this.disableAll();
      this.pageType = "View";
      this.getUserInfo();
    },
    disableAll() {
      let { disabled } = this;
      for (let item in disabled) {
        disabled[item] = true;
      }
    },
    enableAll() {
      let { disabled } = this;
      for (let item in disabled) {
        disabled[item] = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  padding: 15px 20px 0 20px;
  color: #646669;
  font-size: 14px;
  .info-detail {
    margin-top: 30px;
    display: flex;
    .left-part {
      width: 60%;
      .detail-row {
        display: flex;
        align-items: center;
        height: 28px;
        margin-top: 10px;
        .row-key {
          width: 20%;
          position: relative;
          left: 40px;
        }
        .row-value {
          width: 80%;
        }
      }
    }
    .right-part {
      flex: 1;
      margin-left: 30px;
    }
  }
  .btngroup {
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }
}
</style>
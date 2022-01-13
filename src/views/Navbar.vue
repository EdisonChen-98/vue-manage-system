<!--
 * @Author: Edison Chen
 * @Date: 2022-01-12 14:24:45
-->
<template>
  <div class="navbar">
    <img src="@//assets/js.svg" />
    <span class="title">商户后台管理平台</span>
    <div class="navbar-btn">
      <el-tooltip
        class="item"
        effect="light"
        content="商户信息"
        placement="bottom"
        ><i class="el-icon-user user" @click="clickUserInfo"></i
      ></el-tooltip>
      <el-tooltip
        class="item"
        effect="light"
        content="退出登录"
        placement="bottom"
        ><i class="iconfont icon-logout logout" @click="clickLogout"></i
      ></el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    clickUserInfo() {
      this.$router.push({ name: "userInfo" });
    },
    clickLogout() {
      this.$confirm("你确定要登出吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            message: "成功登出",
            type: "success",
          });
          this.$router.push({ name: "Login" });
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang='scss' scoped>
.navbar {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  height: 45px;
  img {
    height: 55px;
  }
  .title {
    font-size: 24px;
    padding-left: 5px;
  }
  .navbar-btn {
    margin-left: auto;
    .user {
      font-size: 24px;
      cursor: pointer;
      margin-right: 15px;
    }
    .logout {
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
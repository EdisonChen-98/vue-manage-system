<!--
 * @Author: Edison Chen
 * @Date: 2022-01-06 13:22:48
-->
<template>
  <div class="bg">
    <div class="row">
      <div class="label">账号</div>
      <el-input size></el-input>
    </div>
    <div class="row">
      <div class="label">密码</div>
      <el-input></el-input>
    </div>
    <el-button>Login</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {},
};
</script>

<style lang="scss" scoped>
.bg {
  .row {
    display: flex;
    width: 40%;
    .label {
      width: 10%;
    }
  }
}
</style>
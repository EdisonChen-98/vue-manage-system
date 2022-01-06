<!--
 * @Author: Edison Chen
 * @Date: 2022-01-06 13:22:48
-->
<template>
  <div class="bg">
    <div class="row">
      <div class="label">账号</div>
      <el-input size="small" v-model="form.account"></el-input>
    </div>
    <div class="row">
      <div class="label">密码</div>
      <el-input size="small" v-model="form.password"></el-input>
    </div>
    <div class="btngroup">
      <el-button @click="handleLogin">Login</el-button>
    </div>
  </div>
</template>

<script>
import { handleLogin } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      let { account, password } = this.form;
      await handleLogin({
        account,
        password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  padding: 20px 30px;
  .row {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 40%;
    .label {
      width: 10%;
    }
  }
  .btngroup {
    width: 40%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
}
</style>
<!--
 * @Author: Edison Chen
 * @Date: 2022-01-06 13:22:48
-->
<template>
  <div class="bg">
    <div class="header-pic"><img src="../../public/node.jpg" /></div>
    <div class="row">
      <div class="label">账号</div>
      <el-input size="medium" v-model="form.account"></el-input>
    </div>
    <div class="row">
      <div class="label">密码</div>
      <el-input size="medium" v-model="form.password"></el-input>
    </div>
    <div class="btngroup">
      <el-button @click="handleLogin">登录</el-button>
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
  width: 40%;
  margin: 0 auto;
  .header-pic {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    img {
      width: 30%;
      height: 30%;
    }
  }
  .row {
    margin-top: 20px;
    display: flex;
    align-items: center;
    .label {
      width: 10%;
    }
  }
  .btngroup {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
}
</style>
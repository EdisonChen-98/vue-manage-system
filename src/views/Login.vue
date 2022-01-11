<!--
 * @Author: Edison Chen
 * @Date: 2022-01-06 13:22:48
-->
<template>
  <div class="bg">
    <div class="header-pic"><img src="../../public/js.svg" /></div>
    <div class="row">
      <div class="label">账号</div>
      <el-input size="medium" v-model="form.username"></el-input>
    </div>
    <div class="row">
      <div class="label">密码</div>
      <el-input size="medium" v-model="form.password"></el-input>
    </div>
    <div class="btngroup">
      <el-button @click="handleLogin">登录</el-button>
      <el-button @click="handleRegister">注册</el-button>
    </div>
  </div>
</template>

<script>
import { apiLogin } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    window.localStorage.clear();
  },
  methods: {
    async handleLogin() {
      let { username, password } = this.form;
      const { token } = await apiLogin({
        username,
        password,
      });
      window.localStorage.setItem("token", token);
      this.$router.push({
        name: "System",
      });
    },
    handleRegister() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-button {
  font-size: 18px;
}
.bg {
  width: 40%;
  height: 100%;
  margin: 0 auto;
  .header-pic {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    img {
      width: 35%;
      height: 30%;
    }
  }
  .row {
    margin-top: 20px;
    display: flex;
    align-items: center;
    .label {
      width: 10%;
      font-size: 18px;
    }
  }
  .btngroup {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
}
</style>
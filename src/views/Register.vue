<template>
  <div class="bg">
    <div class="content">
      <div class="row">
        <div class="label">用户名</div>
        <el-input v-model="form.username"></el-input>
      </div>
      <div class="row">
        <div class="label">密码</div>
        <el-input v-model="form.password"></el-input>
      </div>
      <div class="row">
        <div class="label">确认密码</div>
        <el-input v-model="form.confirmPassword"></el-input>
      </div>
      <div class="btngroup">
        <el-button @click="handleConfirm" type="primary">确认</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { apiRegister } from "@/api/login";
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async handleConfirm() {
      const { username, password, confirmPassword } = this.form;
      if (password != confirmPassword) {
        return this.$message({
          message: "两次输入密码不一致",
          type: "warning",
        });
      }
      await apiRegister({ username, password, confirmPassword });
      this.$router.push({ name: "Login" });
    },
    handleCancel() {
      this.$router.go(-1);
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
  .content {
    padding-top: 100px;
    .row {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .label {
        width: 30%;
        font-size: 18px;
      }
    }
  }
  .btngroup {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>
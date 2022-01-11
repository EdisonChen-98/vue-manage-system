<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 14:50:45
-->
<template>
  <div class="bg">用户信息</div>
</template>

<script>
import { apiGetUserInfo } from "@/api/user";
export default {
  name: "userInfo",
  data() {
    return {};
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const { data: userInfo } = await apiGetUserInfo();
      console.log("+++", userInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  padding: 15px 20px 0 20px;
}
</style>
<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 14:50:45
-->
<template>
  <div>用户信息</div>
</template>

<script>
import { apiGetUserInfo } from "@/api/user";
export default {
  name: "userInfo",
  data() {
    return {};
  },
  mounted() {
    apiGetUserInfo();
  },
};
</script>

<style lang="scss" scoped>
</style>
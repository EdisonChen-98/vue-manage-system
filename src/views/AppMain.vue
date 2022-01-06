<!--
 * @Author: Edison Chen
 * @Date: 2022-01-06 13:34:35
-->
<template>
  <div class="appmain"><router-view /></div>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  mounted() {
    console.log(window.innerHeight);
  },
};
</script>

<style lang="scss" scoped>
.appmain {
  width: 100vw;
  height: calc(100vh-20px);
}
</style>
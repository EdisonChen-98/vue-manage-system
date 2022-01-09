<!--
 * @Author: Edison Chen
 * @Date: 2022-01-06 10:02:39
-->
<template>
  <div class="root-background"><router-view /></div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.root-background {
  width: 100vw;
  height: calc(100vh - 10px);
}
</style>

<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 14:50:11
-->
<template>
  <div class="bg">
    <div class="block"><shopDistribution /></div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
  </div>
</template>

<script>
import shopDistribution from "./components/shopDistribution.vue";
export default {
  name: "Home",
  components: { shopDistribution },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bg {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  .block {
    width: 50%;
    height: 50%;
  }
}
</style>
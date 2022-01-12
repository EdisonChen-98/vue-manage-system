<!--
 * @Author: Edison Chen
 * @Date: 2022-01-11 13:15:47
-->
<template>
  <div class="component">
    <div class="bg">
      <div class="text">{{ title }}</div>
      <el-tooltip :content="info" placement="bottom" effect="light">
        <i class="iconfont icon-info icon"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "tooltipTitle",
  props: ["title", "info"],
};
</script>

<style lang="scss" scoped>
.component {
  .bg {
    display: flex;
    align-items: center;
    font-size: 16px;
    .text {
      color: #646669;
      border-left: 2px solid #7b7e81;
      padding-left: 15px;
    }
    .icon {
      font-size: 20px;
      margin-left: 5px;
    }
  }
}
</style>
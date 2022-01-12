<!--
 * @Author: Edison Chen
 * @Date: 2022-01-12 14:31:43
-->
<template>
  <div class="menu">
    <el-menu
      class="el-menu-vertical-demo"
      @select="handleMenuSelect"
      :default-active="$route.name"
    >
      <el-menu-item index="Home">
        <template slot="title">
          <i class="iconfont icon-shouye icon" style="font-size: 22px"></i>
          <span slot="title">首页</span></template
        >
      </el-menu-item>
      <el-submenu index="shop">
        <template slot="title">
          <i class="iconfont icon-shangjia icon" style="font-size: 20px"></i>
          <span slot="title">商铺</span></template
        >
        <el-menu-item-group>
          <el-menu-item index="shopOverview">商铺总览</el-menu-item>
          <el-menu-item index="myShop">我的商铺</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="Auth">
        <template>
          <i class="iconfont icon-quanxian icon" style="font-size: 21px"></i>
          <span slot="title">权限</span></template
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      avtiveMenu: "Home",
    };
  },
  methods: {
    handleMenuSelect(index) {
      this.$router.push({ name: index });
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu-item {
  font-size: 16px;
}
::v-deep .el-submenu__title {
  font-size: 16px;
}
.menu {
  width: 15%;
  height: 100%;
  text-align: center;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  .icon {
    padding-right: 10px;
  }
}
</style>
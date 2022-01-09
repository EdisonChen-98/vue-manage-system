<template>
  <div class="whole">
    <div class="content">
      <div class="navbar">
        <el-button type="text" class="logout">退出登录</el-button>
      </div>
      <el-col :span="6" class="menu">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">模块二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">模块三</span>
          </el-menu-item>
        </el-menu></el-col
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  font-size: 18px;
}
.whole {
  width: 100%;
  height: 100%;
  .content {
    padding: 20px 30px;
    .navbar {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 10px;
      overflow: hidden;
      .logout {
        float: right;
        font-size: 15px;
      }
    }
    .menu {
      text-align: center;
    }
  }
}
</style>
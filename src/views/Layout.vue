<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 09:22:41
-->
<template>
  <div class="whole">
    <div class="content">
      <div class="navbar">
        <img src="../../public/node.jpg" />
        <span class="title">疫情数据管理平台</span>
        <el-tooltip
          class="item"
          effect="dark"
          content="退出登录"
          placement="bottom"
          ><span class="iconfont icon-logout logout"></span
        ></el-tooltip>
      </div>
      <div class="downpart">
        <div class="menu">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <i class="el-icon-user"></i>
              <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-tickets"></i>
              <span slot="title">疫情数据总览</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="router-content">
          <router-view />
        </div>
      </div>
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
.el-menu {
  border-right: none;
}
.el-menu-item {
  font-size: 14px;
}
.whole {
  width: 100%;
  height: 100%;
  .content {
    padding: 20px 30px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .navbar {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 10px;
      padding-bottom: 5px;
      display: flex;
      align-items: center;
      height: 45px;
      img {
        width: 35px;
        height: 35px;
      }
      .title {
        font-size: 22px;
        padding-left: 10px;
      }
      .logout {
        font-size: 20px;
        margin-left: auto;
        cursor: pointer;
      }
    }
    .downpart {
      flex: 1;
      display: flex;
      height: 100%;
      .menu {
        width: 15%;
        height: 100%;
        text-align: center;
        height: 100%;
        border-right: 1px solid #e6e6e6;
      }
      .router-content {
        width: 80%;
        height: 100%;
      }
    }
  }
}
</style>
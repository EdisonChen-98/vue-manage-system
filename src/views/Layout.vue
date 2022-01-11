<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 09:22:41
-->
<template>
  <div class="whole">
    <div class="content">
      <div class="navbar">
        <img src="../../public/js.svg" />
        <span class="title">商户后台管理平台</span>
        <div class="navbar-btn">
          <el-tooltip
            class="item"
            effect="dark"
            content="用户信息"
            placement="bottom"
            ><i class="el-icon-user user" @click="clickUserInfo"></i
          ></el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="退出登录"
            placement="bottom"
            ><i class="iconfont icon-logout logout" @click="clickLogout"></i
          ></el-tooltip>
        </div>
      </div>
      <div class="downpart">
        <div class="menu">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleMenuSelect"
          >
            <el-menu-item index="1">
              <template slot="title">
                <i
                  class="iconfont icon-shouye icon"
                  style="font-size: 22px"
                ></i>
                <span slot="title">首页</span></template
              >
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i
                  class="iconfont icon-shangjia icon"
                  style="font-size: 20px"
                ></i>
                <span slot="title">商铺</span></template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">商铺总览</el-menu-item>
                <el-menu-item index="2-2">我的商铺</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="3">
              <i
                class="iconfont icon-quanxian icon"
                style="font-size: 21px"
              ></i>
              <span slot="title">权限</span>
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
  methods: {
    handleMenuSelect(index, indexPath) {
      console.log("+++", index, indexPath);
    },
    clickUserInfo() {
      this.$router.push({ name: "userInfo" });
    },
    clickLogout() {
      this.$confirm("你确定要登出吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            message: "成功登出",
            type: "success",
          });
          this.$router.push({ name: "Login" });
        })
        .catch(() => {});
    },
  },
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
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      height: 45px;
      img {
        width: 60px;
        height: 55px;
      }
      .title {
        font-size: 26px;
        padding-left: 10px;
      }
      .navbar-btn {
        margin-left: auto;
        .user {
          font-size: 24px;
          cursor: pointer;
          margin-right: 15px;
        }
        .logout {
          font-size: 24px;
          cursor: pointer;
        }
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
        .icon {
          padding-right: 10px;
        }
      }
      .router-content {
        flex: 1;
        height: 100%;
      }
    }
  }
}
</style>
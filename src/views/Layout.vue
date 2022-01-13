<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 09:22:41
-->
<template>
  <div class="whole">
    <div class="content">
      <Navbar />
      <div class="downpart">
        <Sidebar />
        <div class="router-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Layout",
  components: { Navbar, Sidebar },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.whole {
  width: 100%;
  height: 100%;
  .content {
    padding: 20px 30px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .downpart {
      flex: 1;
      display: flex;
      height: 100%;
      .router-content {
        flex: 1;
        height: 100%;
      }
    }
  }
}
</style>
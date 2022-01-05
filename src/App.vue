<template>
  <div id="app">你好</div>
</template>

<script>
import http from "./util/http";
export default {
  name: "App",
  components: {},
  mounted() {
    http.get("test", "");
  },
};
</script>

<style>
</style>

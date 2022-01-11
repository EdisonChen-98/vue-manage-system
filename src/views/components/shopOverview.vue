<template>
  <div>商铺总览</div>
</template>

<script>
import { getAllShop } from "@/api/shop.js";
export default {
  name: "shopOverview",
  data() {
    return {};
  },
  mounted() {
    this.getShopList();
  },
  methods: {
    async getShopList() {
      await getAllShop();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
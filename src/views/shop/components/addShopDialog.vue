<!--
 * @Author: Edison Chen
 * @Date: 2022-01-13 11:29:45
-->
<template>
  <div>
    <el-dialog
      title="添加商铺"
      :visible.sync="visible"
      width="40%"
      :show-close="false"
    >
      <div class="form-content">
        <div class="content-row">
          <div class="row-name required">店铺名</div>
          <div class="row-value">
            <el-input size="small" v-model="shopName" />
          </div>
        </div>
        <div class="content-row">
          <div class="row-name required">店铺种类</div>
          <div class="row-value">
            <el-select v-model="category" size="small">
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clickCancel" size="small">取 消</el-button>
        <el-button type="primary" @click="clickConfirm" size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addMyShop } from "@/api/shop";
export default {
  name: "addShopDialog",
  props: ["visible"],
  data() {
    return {
      shopName: "",
      category: "",
      options: [
        { label: "中餐", value: "中餐" },
        { label: "西餐", value: "西餐" },
        { label: "甜品", value: "甜品" },
        { label: "韩料", value: "韩料" },
        { label: "日料", value: "日料" },
      ],
    };
  },
  methods: {
    clickCancel() {
      this.$emit("closeDialog");
      [this.shopName, this.category] = ["", ""];
    },
    async clickConfirm() {
      const { shopName, category } = this;
      await addMyShop({ shopName, category });
      this.$emit("closeDialogAndRefresh");
      [this.shopName, this.category] = ["", ""];
    },
  },
};
</script>

<style lang="scss" scoped>
.required:before {
  content: "*";
  color: red;
  position: absolute;
  left: 10px;
  top: 10px;
}
.form-content {
  .content-row {
    display: flex;
    align-items: center;
    margin-top: 10px;
    position: relative;
    .row-name {
      margin-left: 20px;
      width: 20%;
    }
    .row-value {
      width: 50%;
    }
  }
}
</style>
<!--
 * @Author: Edison Chen
 * @Date: 2022-01-13 11:29:45
-->
<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="visible"
      width="40%"
      :show-close="false"
    >
      <div class="form-content">
        <div class="content-row">
          <div class="row-name required">店铺名</div>
          <div class="row-value">
            <el-input size="small" v-model="shopName" :disabled="domDisabled" />
          </div>
        </div>
        <div class="content-row">
          <div class="row-name required">店铺种类</div>
          <div class="row-value">
            <el-select v-model="category" size="small" :disabled="domDisabled">
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="content-row" v-if="type != 'add'">
          <div class="row-name">店长ID</div>
          <div class="row-value" style="margin-left: 15px">
            {{ userId }}
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clickCancel" size="small">取 消</el-button>
        <el-button
          v-if="type === 'add'"
          type="primary"
          @click="clickAdd"
          size="small"
          >添 加</el-button
        >
        <el-button
          v-if="type === 'edit'"
          type="primary"
          @click="clickEdit"
          size="small"
          >确 认</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addMyShop, editMyShop, getMyShopDetail } from "@/api/shop";
import eventbus from "@/util/event-bus";
export default {
  name: "myShopDialog",
  props: ["visible", "type"],
  mounted() {
    eventbus.$on("dialogFetchData", async (shopId) => {
      this.shopId = shopId;
      const {
        data: { category, shopName, userId },
      } = await getMyShopDetail({ id: shopId });
      this.category = category;
      this.shopName = shopName;
      this.userId = userId;
    });
  },
  data() {
    return {
      shopName: "",
      category: "",
      userId: "",
      shopId: "",
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
      [this.shopName, this.category, this.userId] = ["", "", ""];
    },
    async clickAdd() {
      const { shopName, category } = this;
      await addMyShop({ shopName, category });
      this.$emit("closeDialogAndRefresh");
      [this.shopName, this.category, this.userId] = ["", "", ""];
    },
    async clickEdit() {
      const { shopName, category, shopId } = this;
      await editMyShop({ shopName, category, shopId });
      this.$emit("closeDialogAndRefresh");
      [this.shopName, this.category, this.userId] = ["", "", ""];
    },
  },
  computed: {
    title() {
      const { type } = this;
      if (type === "add") {
        return "添加商铺";
      }
      if (type === "edit") {
        return "编辑商铺";
      }
      if (type === "view") {
        return "查看商铺";
      }
      return "";
    },
    domDisabled() {
      const { type } = this;
      if (type === "add") {
        return false;
      }
      if (type === "edit") {
        return false;
      }
      if (type === "view") {
        return true;
      }
      return true;
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
<!--
 * @Author: Edison Chen
 * @Date: 2022-01-12 10:39:39
-->
<template>
  <div class="bg">
    <tooltipTitle title="商铺总览" info="商铺总览"></tooltipTitle>
    <div class="table-content">
      <el-input size="small">
        <el-button slot="append" icon="el-icon-search"></el-button
      ></el-input>
      <div class="table">
        <el-table
          :data="tableData"
          stripe
          :header-cell-style="tableHeaderColor"
        >
          <el-table-column
            label="No"
            type="index"
            :index="count"
            align="center"
          ></el-table-column>
          <el-table-column
            v-for="(item, index) in columns"
            :key="index"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
          />
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          align="center"
          :page-sizes="[5, 20]"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-size="pageSize"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllShopList } from "@/api/shop.js";
import tooltipTitle from "@/components/tooltipTitle.vue";

export default {
  name: "shopOverview",
  components: { tooltipTitle },
  data() {
    return {
      columns: [
        { label: "ID", prop: "id" },
        { label: "店铺名", prop: "shopName" },
        { label: "种类", prop: "category" },
        { label: "评分", prop: "score" },
      ],
      tableData: [],
      total: 0,
      pageSize: 5,
      pageNum: 1,
    };
  },
  mounted() {
    this.getTableListFromServer();
  },
  methods: {
    async getTableListFromServer() {
      const { pageSize, pageNum } = this;
      const {
        data: { list, total },
      } = await getAllShopList({ pageSize, pageNum });
      this.tableData = list;
      this.total = total;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTableListFromServer();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getTableListFromServer();
    },
    count(index) {
      const { pageSize, pageNum } = this;
      return pageSize * (pageNum - 1) + index + 1;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.bg {
  padding: 20px;
  .table-content {
    margin: 30px 10px 10px 10px;
    .el-input {
      width: 30%;
    }
    .table {
      margin-top: 5px;
    }
    .pagination {
      margin-top: 10px;
    }
  }
}
</style>
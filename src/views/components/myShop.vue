<template>
  <div class="bg">
    <tooltipTitle title="我的商铺" info="我的商铺"></tooltipTitle>
    <div class="table-content">
      <div class="search-row">
        <el-input size="small">
          <el-button slot="append" icon="el-icon-search"></el-button
        ></el-input>
        <div class="search-row-btn">
          <el-tooltip content="添加商铺" placement="bottom" effect="light"
            ><el-button icon="el-icon-plus"></el-button
          ></el-tooltip>
        </div>
      </div>
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
          :page-sizes="[3, 5]"
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
import tooltipTitle from "@/components/tooltipTitle.vue";
import { getMyShop } from "@/api/shop.js";
export default {
  name: "myShop",
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
      pageSize: 3,
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
        data: { total, list },
      } = await getMyShop({ pageSize, pageNum });
      this.total = total;
      this.tableData = list;
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
};
</script>

<style lang="scss" scoped>
.bg {
  padding: 20px;
  .table-content {
    margin: 30px 10px 10px 10px;
    .search-row {
      display: flex;
      align-items: center;
      .search-row-btn {
        margin-left: auto;
        .el-button {
          padding: 4px;
          color: #7b7878;
        }
      }
    }
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
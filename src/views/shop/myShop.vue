<template>
  <div class="bg">
    <myShopDialog
      :visible="dialogVisible"
      :type="dialogType"
      @closeDialog="closeDialog"
      @closeDialogAndRefresh="closeDialogAndRefresh"
    ></myShopDialog>
    <tooltipTitle title="我的商铺" info="我的商铺"></tooltipTitle>
    <div class="table-content">
      <div class="search-row">
        <el-input size="small" v-model="keyword" placeholder="商铺名">
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="clickSearch"
          ></el-button
        ></el-input>
        <div class="search-row-btn">
          <el-tooltip content="刷新" placement="bottom" effect="light"
            ><el-button
              icon="el-icon-refresh-left"
              @click="clickRefresh"
            ></el-button
          ></el-tooltip>
          <el-tooltip content="添加商铺" placement="bottom" effect="light"
            ><el-button icon="el-icon-plus" @click="clickAdd"></el-button
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
            :formatter="item.formatter"
            :align="item.align"
          />
          <el-table-column
            fixed="right"
            align="center"
            label="操作"
            width="200"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="clickView(scope.row)"
                >查看</el-button
              >
              <el-button type="text" size="small" @click="clickEdit(scope.row)"
                >编辑</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="clickDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
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
import tooltipTitle from "@/components/tooltipTitle.vue";
import myShopDialog from "./components/myShopDialog.vue";
import { getMyShopList, deleteMyShop } from "@/api/shop.js";
import eventbus from "@/util/event-bus";
export default {
  name: "myShop",
  components: { tooltipTitle, myShopDialog },
  data() {
    return {
      columns: [
        { label: "ID", prop: "id" },
        { label: "店铺名", prop: "shopName" },
        { label: "种类", prop: "category" },
        {
          label: "评分",
          prop: "score",
          align: "center",
        },
      ],
      tableData: [],
      total: 0,
      pageSize: 5,
      pageNum: 1,
      keyword: "",
      dialogVisible: false,
      dialogType: "",
    };
  },
  mounted() {
    this.getTableListFromServer();
  },
  methods: {
    async getTableListFromServer() {
      const { pageSize, keyword, pageNum } = this;
      const {
        data: { total, list },
      } = await getMyShopList({ pageSize, keyword, pageNum });
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
    clickSearch() {
      this.getTableListFromServer();
    },
    clickRefresh() {
      [this.pageSize, this.pageNum, this.keyword] = [5, 1, ""];
      this.getTableListFromServer();
    },
    clickAdd() {
      this.dialogType = "add";
      this.dialogVisible = true;
    },
    clickDelete(row) {
      this.$confirm("你确定要删除该商铺吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const { id } = row;
          await deleteMyShop({ id });
          this.getTableListFromServer();
        })
        .catch(() => {});
    },
    clickView(row) {
      eventbus.$emit("dialogFetchData", row.id);
      this.dialogType = "view";
      this.dialogVisible = true;
    },
    clickEdit(row) {
      eventbus.$emit("dialogFetchData", row.id);
      this.dialogType = "edit";
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false; //弹窗点击取消
    },
    closeDialogAndRefresh() {
      this.dialogVisible = false; //弹窗点击确认
      this.getTableListFromServer();
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
          padding: 5px;
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
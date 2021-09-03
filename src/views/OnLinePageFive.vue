<template>
  <div class="onLinePageFive">
    <el-container>
      <el-header style="height: 0;"></el-header>
      <el-main>
        <el-table :data="test.tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column label="性别">
            <template #default="scope">{{ test.sex(scope.row.sex) }}</template>
          </el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="site" label="地址"></el-table-column>
        </el-table>
      </el-main>
      <el-affix position="bottom" :offset="20">
        <div class="footer">
          <div class="export">
            <el-button type="primary" @click="test.add" plain>
              新增
              <i class="el-icon-plus el-icon--right"></i>
            </el-button>
            <el-button type="primary" plain>
              修改
              <i class="el-icon-edit-outline el-icon--right"></i>
            </el-button>
            <el-button type="primary" plain>
              删除
              <i class="el-icon-delete el-icon--right"></i>
            </el-button>
          </div>
          <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="test.tableData.length"></el-pagination>
          </div>
        </div>
      </el-affix>
    </el-container>
    <Patient></Patient>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { onLineHotTel, main } from "@/js/tableData.js";
import Patient from "../components/AddDialong/Patient.vue";
import globalState from "../js/state";

let test = reactive({
  searchInput: "", //搜索框
  value1: "", //筛选选中值
  currentPage4: 1, //当前页
  //   表格数据
  tableData: onLineHotTel.tableData,
  //   性别转换
  sex: main.sex,
  //   pageSize改变时
  handleSizeChange: (val) => {
    console.log(`每页 ${val} 条`);
  },
  //   currentPage 改变时会触发
  handleCurrentChange: (val) => {
    console.log(`当前页: ${val}`);
  },
  // 导出按钮
  getPdf: () => { },
  add: () => {
    globalState.dialogFormVisible = !globalState.dialogFormVisible
  }
});
onMounted(() => { });
watch([() => test.value1, () => test.value2], (count, prevCount) => {
  console.log("监听对象现在为:", count);
  console.log("监听对象之前为:", prevCount);
  console.log("test.value1");
});


</script>


<style lang="scss" scoped>
.onLinePageFive {
  height: 100%;
  .el-container {
    height: 100%;
    .footer {
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
    }

    .search {
      width: 400px;
      height: 40px;
      border: 1px solid rgba($color: #0c50b8, $alpha: 0.5);
      button {
        margin: 0;
        width: 200px;
        border: none;
        height: 40px;
        background: rgba($color: #0c50b8, $alpha: 0.5);
        color: #fff;
        font-size: 20px;
        font-weight: bold;
      }
      button:last-child {
        background: rgba($color: #e3e5e7, $alpha: 0.5);
        color: #000;
      }
      .onButton {
        background: rgba($color: #ced4dd, $alpha: 0.5);
        color: #000;
      }
    }
    .select {
      width: 600px;
      display: flex;
      justify-content: space-between;

      button {
        height: 40px;
        width: 80px;
        border: 2px solid rgba($color: #0c50b8, $alpha: 0.5);
        border-radius: 10px;
        color: rgba($color: #0c50b8, $alpha: 0.5);
        font-weight: bold;
      }
    }
    .el-main {
      // background-color: #153b6123;
      color: #333;
      text-align: center;
      height: 750px;
      padding: 25px 0;
      .more {
        height: 40px;
        width: 100px;
        border: none;
        transition: all 0.3s;
        border-radius: 4px;
      }
      .more:hover {
        background: #0c50b8;
        color: #fff;
      }
    }
  }
}
</style>
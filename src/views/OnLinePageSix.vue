<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-25 16:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TestPageOne.vue
-->
<template>
  <div class="testPageFour">
    <el-container>
      <el-header>
        <div class="search">
          <el-input placeholder="请输入姓名,编号,或量表名称" v-model="searchInput">
            <template #append>
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </div>
        <div class="select"></div>
      </el-header>
      <el-main>
        <el-table
          :cell-class-name="cellClassName"
          :header-cell-class-name="headerCellClassName"
          :data="tableData"
          :row-class-name="tableRowClassName"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>

          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="consultingRoom" label="预约咨询室"></el-table-column>
          <el-table-column label="性别">
            <template #default="scope">{{ sexType(scope.row.sex) }}</template>
          </el-table-column>

          <el-table-column prop="consultingTime" label="预约时间"></el-table-column>
          <el-table-column label="状态">
            <template #default="scope">{{ stateType(scope.row.state) }}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <!-- <button class="more">更多操作</button> -->

              <el-dropdown>
                <button class="more el-dropdown-link">更多操作</button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-plus">立即处理</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">修改时间</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">修改咨询室</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <div class="footer">
          <div class="export"></div>
          <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="tableData.length"></el-pagination>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { main, testData, onLineHotTel } from "@/js/tableData.js";
export default {
  setup() {
    let test = reactive({
      option1: [
        {
          value: "1",
          label: "亲子关系",
        },
        {
          value: "2",
          label: "心理健康",
        },
        {
          value: "3",
          label: "能力",
        },
        {
          value: "4",
          label: "性格",
        },
      ],
      searchInput: "", //搜索框
      value1: "", //筛选选中值
      currentPage4: 1, //当前页
      //   表格数据
      tableData: onLineHotTel.consulting,
      // 性别转换
      sexType: main.sex,
      // 状态转换
      stateType: onLineHotTel.state,
      //   单元格样式
      cellClassName: main.cellClassName,
      //   表头样式
      headerCellClassName: main.headerCellClassName,
      //   各状态单独样式
      tableRowClassName: onLineHotTel.tableRowClassName,
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
    });
    onMounted(() => { });
    watch([() => test.value1, () => test.value2], (count, prevCount) => {
      console.log("监听对象现在为:", count);
      console.log("监听对象之前为:", prevCount);
      console.log("test.value1");
    });

    return { ...toRefs(test) };
  },
};
</script>

<style lang="scss">
.testPageFour {
  .el-footer {
    // background-color: #b3c0d1;
    color: #333;
    text-align: center;
    .footer {
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
    }
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    .search {
      width: 400px;
    }
    .select {
      width: 600px;
      display: flex;
      justify-content: flex-end;

      button {
        height: 40px;
        width: 80px;
        border: 2px solid rgba($color: #0c50b8, $alpha: 0.5);
        border-radius: 10px;
        color: rgba($color: #0c50b8, $alpha: 0.5);
        font-weight: bold;
      }
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
  .warning-row {
    background: rgba(255, 0, 0, 0.199) !important;
    color: red;
    button {
      background: red !important;
    }
  }

  .success-row {
    background: rgba(0, 255, 34, 0.171) !important;
    color: rgb(61, 236, 84);
    button {
      background: rgb(61, 236, 84) !important;
    }
  }
}
</style>
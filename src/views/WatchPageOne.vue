<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-31 16:03:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TestPageOne.vue
-->
<template>
  <div class="testPageOne">
    <el-container>
      <el-header>
        <div class="search">
          <el-input placeholder="请输入姓名,编号,或量表名称" v-model="searchInput">
            <template #append>
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </div>
        <div class="select">
          <el-select v-model="value1" placeholder="按处理情况筛选">
            <el-option
              v-for="item in option1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value2" placeholder="按单位,社区筛选">
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <button>更多筛选</button>
        </div>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          style="width: 100%"
          :cell-class-name="cellClassName"
          :header-cell-class-name="headerCellClassName"
          :row-class-name="tableRowClassName"
        >
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column prop="code" label="编号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column label="性别">
            <template #default="scope">{{ sex(scope.row.sex) }}</template>
          </el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="date" label="评估时间"></el-table-column>
          <el-table-column prop="testTime" label="测评耗时"></el-table-column>
          <el-table-column prop="testName" label="量表名称"></el-table-column>
          <el-table-column label="类型">
            <template #default="scope">{{ testFromType(scope.row.testFromType) }}</template>
          </el-table-column>
          <el-table-column prop="score" label="总分"></el-table-column>
          <el-table-column label="程度">
            <template #default="scope">{{ level(scope.row.level) }}</template>
          </el-table-column>
          <el-table-column label="是否有效">
            <template #default="scope">{{ isInUse(scope.row.isInUse) }}</template>
          </el-table-column>
          <el-table-column label="是否处理">
            <template #default="scope">{{ isChecked(scope.row.isChecked) }}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <button class="more">更多操作</button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer></el-footer>
      <el-affix position="bottom" :offset="20">
        <div class="footer">
          <div class="export">
            <el-button type="primary" plain>
              下载
              <i class="el-icon-download el-icon--right"></i>
            </el-button>
          </div>
          <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="tableData.length"></el-pagination>
          </div>
        </div>
      </el-affix>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { main } from "@/js/tableData.js";
export default {
  setup() {
    let test = reactive({
      searchInput: "", //搜索框
      value1: "", //筛选选中值
      currentPage4: 1, //当前页

      option1: [
        //筛选一
        {
          value: "1",
          label: "已处理",
        },
        {
          value: "0",
          label: "未处理",
        },
      ],
      value2: "", //筛选二选中值
      option2: [
        //筛选二
        {
          value: "1",
          label: "中央门街道",
        },
        {
          value: "0",
          label: "马群街道",
        },
      ],
      //   表格数据
      tableData: main.patientList,
      //   性别转换
      sex: main.sex,
      //   来源类型转换
      testFromType: main.testFromType,
      //   程度转换
      level: main.level,
      //   是否有效
      isInUse: main.isInUse,
      //   是否处理
      isChecked: main.isChecked,
      //   各状态单独样式
      tableRowClassName: main.tableRowClassName,
      //   单元格样式
      cellClassName: main.cellClassName,
      //   表头样式
      headerCellClassName: main.headerCellClassName,
      //   pageSize改变时
      handleSizeChange: (val) => {
        console.log(`每页 ${val} 条`);
      },
      //   currentPage 改变时会触发
      handleCurrentChange: (val) => {
        console.log(`当前页: ${val}`);
      },
      // 导出按钮
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
.testPageOne {
  height: 100%;
  .el-container {
    height: 100%;

    .footer {
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
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
      color: red !important;
      x button {
        background: red !important;
      }
    }

    .success-row {
      background: rgba(0, 255, 34, 0.171) !important;
      color: rgb(61, 236, 84) !important;
      button {
        background: rgb(61, 236, 84) !important;
      }
    }
  }
}
</style>
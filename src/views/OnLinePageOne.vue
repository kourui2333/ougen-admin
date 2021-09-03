<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-31 11:12:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TestPageOne.vue
-->
<template>
  <div class="onLinePageOne">
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
          <el-select v-model="value2" placeholder="按状态筛选">
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-header>
      <el-main>
        <el-table
          :header-cell-class-name="headerCellClassName"
          :cell-class-name="cellClassName"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column label="性别">
            <template #default="scope">{{ sex(scope.row.sex) }}</template>
          </el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="appointmentTime" label="预约时间"></el-table-column>
          <el-table-column prop="appointmentEndTime" label="结束时间"></el-table-column>
          <el-table-column label="预约类型">
            <template #default="scope">{{ appointmentType(scope.row.appointmentType) }}</template>
          </el-table-column>
          <el-table-column prop="appointmentDoctor" label="预约医生"></el-table-column>
          <el-table-column label="医院">
            <template #default="scope">{{ scope.row.hospitalName }}</template>
          </el-table-column>
          <el-table-column label="状态">
            <template #default="scope">{{ appointmentState(scope.row.appointmentState) }}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-dropdown>
                <button class="more el-dropdown-link">更多操作</button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-plus">个人档案</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">治疗确认</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">视频聊天</el-dropdown-item>
                    <!-- <el-dropdown-item icon="el-icon-check">有效设置</el-dropdown-item> -->
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
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
          label: "已预约",
        },
        {
          value: "0",
          label: "未预约",
        },
      ],
      //   表格数据
      tableData: main.patientList,
      //   性别转换
      sex: main.sex,
      //   预约状态转换
      appointmentState: main.appointmentState,
      //   预约类型转换
      appointmentType: main.appointmentType,
      //   表头样式
      headerCellClassName: main.headerCellClassName,
      //   单元格样式
      cellClassName: main.cellClassName,
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
.onLinePageOne {
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
  }
}
</style>
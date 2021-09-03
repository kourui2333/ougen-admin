<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-30 16:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TestPageOne.vue
-->
<template>
  <div class="testPageTwo">
    <el-dialog append-to-body destroy-on-close title="添加" v-model="test.dialogFormVisible">
      <el-form :model="test.form">
        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.sex" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="住址" :label-width="test.formLabelWidth">
          <el-input v-model="test.form.area" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="test.dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="test.dialogFormVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-container>
      <el-header>
        <div class="search">
          <button>录入管理</button>
          <button>数据录入</button>
        </div>
        <div class="select"></div>
      </el-header>
      <el-main>
        <el-table
          :cell-class-name="test.cellClassName"
          :header-cell-class-name="test.headerCellClassName"
          :data="test.tableData"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="inDate" label="录入日期"></el-table-column>
          <el-table-column label="评估时间">
            <template #default="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="code" label="编号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column label="性别">
            <template #default="scope">{{ test.sex(scope.row.sex) }}</template>
          </el-table-column>
          <el-table-column label="人员类别">
            <template #default="scope">{{ test.patientType(scope.row.patientType) }}</template>
          </el-table-column>
          <el-table-column label="评估类型">
            <template #default="scope">{{ test.testType(scope.row.testType) }}</template>
          </el-table-column>
          <el-table-column prop="score" label="总分"></el-table-column>
          <el-table-column label="程度">
            <template #default="scope">{{ test.level(scope.row.level) }}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <button class="more">更多操作</button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-affix position="bottom" :offset="20">
        <div class="footer">
          <div>
            <!-- <el-button @click="test.add" type="primary" plain>
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
            </el-button> -->
          </div>
          <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="test.tableData.length"></el-pagination>
          </div>
        </div>
      </el-affix>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { main } from "@/js/tableData.js"; import { content } from "../js/content";

let test = reactive({
  dialogFormVisible: false,//弹窗开关
  formLabelWidth: "120px",
  searchInput: "", //搜索框
  value1: "", //筛选选中值
  currentPage4: 1, //当前页
  // 表单
  form: content.addForm,
  //   表格数据
  tableData: main.patientList,
  //   性别转换
  sex: main.sex,
  //   类型转换
  testType: main.testType,
  //   程度转换
  level: main.level,
  //   人员类别转换
  patientType: main.patientType,
  //   单元格样式
  cellClassName: main.cellClassName,
  //   表头样式
  headerCellClassName: main.headerCellClassName,
  //   各状态单独样式
  tableRowClassName: main.tableRowClassName,
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
    test.dialogFormVisible = true
  }
});
onMounted(() => { });
watch([() => test.value1, () => test.value2], (count, prevCount) => {
  console.log("监听对象现在为:", count);
  console.log("监听对象之前为:", prevCount);
  console.log("test.value1");
});


</script>

<style lang="scss">
.testPageTwo {
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
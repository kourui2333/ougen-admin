<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-30 16:50:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TestPageOne.vue
-->
<template>
  <div class="testPageThree">
    <el-dialog append-to-body destroy-on-close title="添加" v-model="test.dialogFormVisible">
      <el-form :model="test.form">
        <el-row>
          <el-col :span="8">
            <el-form-item label="普查名称" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="请选择使用场景" :label-width="test.formLabelWidth">
              <!-- <el-input v-model="test.form.useType" autocomplete="off"></el-input> -->
              <el-select v-model="test.form.useType">
                <el-option label="扫码" value="1"></el-option>
                <el-option label="问卷" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="请选择测试范围" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.testScope" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="评测人员类型" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.patientType" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="测试开始时间" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.createTime" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="测试截止时间" :label-width="test.formLabelWidth">
              <el-input v-model="test.form.endTime" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
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
          <button>群体分发</button>
          <button>个体分发</button>
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
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column label="使用场景">
            <template #default="scope">{{ test.organizationListUseType(scope.row.useType) }}</template>
          </el-table-column>
          <el-table-column prop="testScope" label="评测范围"></el-table-column>
          <el-table-column label="人员类型">
            <template #default="scope">{{ test.organizationPatientType(scope.row.patientType) }}</template>
          </el-table-column>
          <el-table-column label="截止时间">
            <template #default="scope">{{ scope.row.endTime }}</template>
          </el-table-column>
          <el-table-column label="创建者">
            <template #default="scope">{{ test.createType(scope.row.create) }}</template>
          </el-table-column>
          <el-table-column label="创建时间">
            <template #default="scope">{{ scope.row.createTime }}</template>
          </el-table-column>

          <el-table-column label="量表详情">
            <template #default="scope">
              <button class="more">查看编辑</button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <button class="more" @click="test.shareCode">二维码</button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-affix position="bottom" :offset="20">
        <div class="footer">
          <div>
            <el-button @click="test.add" type="primary" plain>
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
  </div>
</template>

<script setup>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { ElMessageBox } from "element-plus";
import { main } from "@/js/tableData.js";
import { content } from "../js/content";

let test = reactive({
  dialogFormVisible: false,//弹窗开关
  formLabelWidth: "120px",
  searchInput: "", //搜索框
  value1: "", //筛选选中值
  currentPage4: 1, //当前页
  //   表格数据
  tableData: main.organizationList,
  form: content.addTest,
  //   使用场景转换
  organizationListUseType: main.organizationListUseType,
  //   类型转换
  testType: main.testType,
  //   组织内人员类别转换
  organizationPatientType: main.organizationPatientType,
  //   创建者类型转换
  createType: main.createType,
  // 性别转换
  sex: main.sex,
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
  // 二维码
  shareCode: () => {
    ElMessageBox.alert(
      '<img src="https://qr.api.cli.im/newqr/create?data=%25E6%25AC%25A2%25E8%25BF%258E%25E4%25BD%25BF%25E7%2594%25A8&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=bcb52605fe785fa8dca227e8e5c39fa4" alt="">',
      {
        dangerouslyUseHTMLString: true,
        center: true,
      }
    );
  },
  add: () => test.dialogFormVisible = true
});
console.log(test.form);
watch([() => test.value1, () => test.value2], (count, prevCount) => {
  console.log("监听对象现在为:", count);
  console.log("监听对象之前为:", prevCount);
  console.log("test.value1");
});


</script>

<style lang="scss">
.testPageThree {
  height: 100%;
  .el-container {
    height: 100%;
    .el-footer {
      // background-color: #b3c0d1;
      color: #333;
      text-align: center;
    }
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
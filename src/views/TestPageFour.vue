<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-27 16:21:25
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
        <div class="select">
          <el-select v-model="value1" placeholder="量表类型">
            <el-option
              v-for="item in option1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-header>
      <el-main>
        <el-table
          :cell-class-name="cellClassName"
          :header-cell-class-name="headerCellClassName"
          :data="tableData"
          stripe
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="code" label="编号"></el-table-column>
          <el-table-column width="200" label="量表名称">
            <template #default="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column prop="UKName" label="英文简称"></el-table-column>
          <el-table-column prop="questions" label="题数"></el-table-column>
          <el-table-column label="类型">
            <template #default="scope">{{ testType(scope.row.testType) }}</template>
          </el-table-column>
          <el-table-column label="使用年龄">
            <template #default="scope">{{ scope.row.applicableAge }}</template>
          </el-table-column>
          <el-table-column label="指导价">
            <template #default="scope">{{ scope.row.autoPrice }}</template>
          </el-table-column>
          <el-table-column label="定价">
            <template #default="scope">
              <el-input v-model="scope.row.setPrice" suffix-icon="el-icon-edit" placeholder="请输入内容"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="是否推荐">
            <template #default="scope">{{ isRecommend(scope.row.recommend) }}</template>
          </el-table-column>

          <el-table-column label="操作">
            <template #default="scope">
              <!-- <button class="more">更多操作</button> -->

              <el-dropdown>
                <button class="more el-dropdown-link">更多操作</button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-plus">预览试题</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">模拟测试</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">量表简介</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">有效设置</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">取消推荐</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-affix position="bottom" :offset="20">
        <div class="footer">
          <div>
            <!-- <el-button type="primary" plain>
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
import { main, testData } from "@/js/tableData.js";
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
      tableData: testData.testTable,
      //   是否推荐转换
      isRecommend: testData.isRecommend,
      //   类型转换
      testType: testData.testType,
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

<style lang="scss" scoped>
.testPageFour {
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
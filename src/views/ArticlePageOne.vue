<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-31 15:27:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TestPageOne.vue
-->
<template>
  <div class="onLinePageTwo">
    <el-container>
      <el-header>
        <div class="search">
          <el-input placeholder="请输入姓名,编号,或量表名称" v-model="test.searchInput">
            <template #append>
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </div>
        <div class="select">
          <el-select v-model="test.value1" placeholder="按是否推荐筛选">
            <el-option
              v-for="item in test.option1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-header>
      <el-main>
        <el-table
          :cell-class-name="test.cellClassName"
          :header-cell-class-name="test.headerCellClassName"
          :data="test.tableData"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="封面">
            <template #default="scope">
              <div class="block">
                <el-avatar :size="50" :src="scope.row.surfacePlot"></el-avatar>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="文章标题">
            <template #default="scope">
              <el-tooltip
                class="item"
                effect="dark"
                :content="scope.row.title"
                placement="top-start"
              >
                <span
                  style="display:inline-block;width:150px;overflow: hidden;
text-overflow:ellipsis; white-space: nowrap;line-height: 12px;"
                >{{ scope.row.title }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column label="副标题">
            <template #default="scope">
              <el-tooltip
                class="item"
                effect="dark"
                :content="scope.row.subTitle"
                placement="top-start"
              >
                <span
                  style="display:inline-block;width:150px;overflow: hidden;
text-overflow:ellipsis; white-space: nowrap;line-height: 12px;"
                >{{ scope.row.subTitle }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column label="是否发布">
            <template #default="scope">{{ scope.row.isShow ? "已发布" : "未发布" }}</template>
          </el-table-column>

          <el-table-column label="是否置顶">
            <template #default="scope">{{ scope.row.isUp ? "已置顶" : "未置顶" }}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <button class="more el-dropdown-link">查看详情</button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-affix position="bottom" :offset="20">
        <div class="footer">
          <div>
            <el-button @click="add" type="primary" plain>
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
    <AddMedia></AddMedia>
  </div>
</template>

<script  setup>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { ElMessageBox } from "element-plus";
import { main, testData } from "@/js/tableData.js";
import { content } from "@/js/content.js";
import { globalMethods } from "@/js/until"
import globalState from "../js/state";
import AddMedia from "../components/AddDialong/addMedia.vue";
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
  //   表格数据
  tableData: content.tableData,
  //   是否推荐
  isRecommend: testData.isRecommend,
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

});
const { add } = globalMethods
onMounted(() => { });
watch([() => test.value1, () => test.value2], (count, prevCount) => {
  console.log("监听对象现在为:", count);
  console.log("监听对象之前为:", prevCount);
  console.log("test.value1");
});

</script>

<style lang="scss">
.onLinePageTwo {
  height: 100%;
  .el-container {
    height: 100%;
  }
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
      .onButton {
        background: rgba($color: #ced4dd, $alpha: 0.5);
        color: #000;
      }
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
</style>
<!--
 * @Author: your name
 * @Date: 2021-08-04 09:36:24
 * @LastEditTime: 2021-08-31 15:40:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\SetPageTwo.vue
-->
<template>
  <div class="setPageTwo">
    <el-container>
      <el-aside>
        <div class="aside">
          <div class="header">
            <el-button type="primary" @click="add" plain>
              新增
              <i class="el-icon-plus el-icon--right"></i>
            </el-button>

            <el-button type="primary" plain>
              删除
              <i class="el-icon-delete el-icon--right"></i>
            </el-button>
          </div>
          <div class="search">
            <el-input placeholder="请输入姓名" v-model="setPageTwo.searchInput">
              <template #append>
                <el-button icon="el-icon-search"></el-button>
              </template>
            </el-input>
          </div>
          <div class="body">
            <el-table
              :data="setPageTwo.tableData"
              :cell-class-name="cellClassName"
              :header-cell-class-name="headerCellClassName"
              @cell-click="setPageTwo.cellClick"
            >
              <el-table-column prop="code" label="序号"></el-table-column>
              <el-table-column prop="roleName" label="角色名称"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="main">
          <div class="form">
            <el-form :model="setPageTwo.form" label-width="80px">
              <el-form-item label="角色名称:">
                <div style="width:200px">
                  <el-input v-model="setPageTwo.form.roleName"></el-input>
                </div>
              </el-form-item>
              <el-form-item>
                <div style="width:200px">
                  <el-tree
                    :props="setPageTwo.props"
                    :load="setPageTwo.loadNode"
                    lazy
                    show-checkbox
                    node-key="url"
                    @check-change="setPageTwo.handleCheckChange"
                    @node-click="setPageTwo.handleNodeClick"
                    :default-checked-keys="checkedTree"
                  ></el-tree>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <div class="btn">
            <el-button @click="setPageTwo.get">保存</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
    <AddRole></AddRole>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { content } from "@/js/content.js";
import { globalMethods } from "@/js/until.js";
import { onMounted } from "@vue/runtime-core";
import AddRole from "../components/AddDialong/addRole.vue";
let tree = ref(null);
let setPageTwo = reactive({
  searchInput: "",
  tableData: content.roleList,
  // 表单
  form: {
    roleName: "超级管理员",
  },
  props: {
    label: "name",
    children: "zones",
  },
  // 树 一级数据
  treeData: [
    { name: "数据概览", key: "data", url: "/Home/Data" },
    { name: "测评中心", key: "test", url: "/Home/Test" },
    { name: "危机干预", key: "watch", url: "/Home/Watch" },
    { name: "心理档案", key: "mentality", url: "/Home/Mentality" },
    { name: "咨询中心", key: "onLine", url: "/Home/OnLine" },
    { name: "团体辅导", key: "team", url: "/Home/Team" },
    { name: "认知训练", key: "", url: "" },
    { name: "文章管理", key: "article", url: "/Home/Article" },
    { name: "视频管理", key: "video", url: "/Home/Video" },
    { name: "系统管理", key: "set", url: "/Home/set" },
  ],
  getCheckedKeys: () => { },
  // 当树选中状态变化时
  handleCheckChange: (data, checked, indeterminate) => {
    console.log(data, checked, indeterminate);
  },
  // 点击树节点时
  handleNodeClick: (data) => {
    console.log(data);
  },
  // 加载树数据
  loadNode: (node, resolve) => {
    console.log(node);
    if (node.level === 0) {
      return resolve(setPageTwo.treeData);
    }
    if (node.level > 1) return resolve([]);

    var hasChild;
    if (node.data.url !== "") {
      hasChild = node.data.url;
    } else {
      hasChild = Math.random() > 0.5;
    }

    setTimeout(() => {
      var data;
      if (hasChild == "/Home/Data") {
        data = [
          { name: "数据概览", url: "/home/data/pageOne" },
          { name: "统计报表", url: "/home/data/pageTwo" },
          { name: "综合分析", url: "/home/data/pageThree" },
        ];
      } else if (hasChild == "/Home/Test") {
        data = [
          { name: "测评结果", url: "/home/test/pageOne" },
          { name: "数据录入", url: "/home/test/pageTwo" },
          { name: "量表分发", url: "/home/test/pageThree" },
          { name: "系统量表", url: "/home/test/pageFour" },
          { name: "自有量表", url: "/home/test/pageSix" },
        ];
      } else {
        data = [];
      }

      resolve(data);
    }, 500);
  },
  // 获得当前选中的tree节点
  get: () => {
    console.log(tree.value.getCheckedKeys());
  },
  // 点击列表
  cellClick: (row, column, cell, event) => {
    setPageTwo.form.roleName = row.roleName;
  },
});
// 当前已被选中的节点
let checkedTree = reactive([]);
setPageTwo.treeData.map((item) => {
  checkedTree.push(item.url);
});
let { headerCellClassName, cellClassName, add } = globalMethods;

onMounted(() => {
  // console.log(tree.value.getCheckedKeys());
});
</script>

<style lang="scss" scoped>
.setPageTwo {
  height: 100%;
  .el-container {
    height: 100%;
    overflow: hidden;
    .aside {
      height: 100%;
      background: #fff;
      .header,
      .search,
      .body {
        display: flex;
        justify-content: space-between;
      }
      .body {
        height: calc(100% - 80px);
      }
    }
    .main {
      // border: 1px solid #000;
      padding-top: 120px;
      box-sizing: border-box;
      .form {
        // border: 1px solid #000;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
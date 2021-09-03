<!--
 * @Author: your name
 * @Date: 2021-08-04 09:20:06
 * @LastEditTime: 2021-08-31 15:32:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TestPageOne.vue
-->
<template>
    <div class="testPageOne">
        <el-container>
            <el-header>
                <div class="search">
                    <el-input placeholder="请输入姓名" v-model="setPageOne.searchInput">
                        <template #append>
                            <el-button icon="el-icon-search"></el-button>
                        </template>
                    </el-input>
                </div>
                <div class="select">
                    <el-select v-model="setPageOne.value1" placeholder="按处理情况筛选">
                        <el-option
                            v-for="item in setPageOne.option1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <el-select v-model="setPageOne.value2" placeholder="按单位,社区筛选">
                        <el-option
                            v-for="item in setPageOne.option2"
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
                    :data="setPageOne.tableData"
                    style="width: 100%"
                    :cell-class-name="cellClassName"
                    :header-cell-class-name="headerCellClassName"
                    :row-class-name="tableRowClassName"
                >
                    <el-table-column type="selection" width="30"></el-table-column>
                    <el-table-column prop="code" label="编号"></el-table-column>
                    <el-table-column prop="ID" label="账号"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="role" label="角色"></el-table-column>
                    <el-table-column prop="facilitatingAgency" label="服务机构"></el-table-column>
                    <el-table-column prop="controlLimit" label="管理范围"></el-table-column>
                    <el-table-column prop="scopeBusiness" label="行业范围"></el-table-column>
                    <el-table-column prop="patientType" label="人员类型"></el-table-column>
                    <el-table-column prop="caseHistory" label="病案"></el-table-column>
                    <el-table-column prop="case" label="病例"></el-table-column>
                    <el-table-column label="状态">
                        <template #default="scope">{{ scope.row.state == 1 ? "正常" : "异常" }}</template>
                    </el-table-column>
                </el-table>
            </el-main>

            <el-affix position="bottom" :offset="20">
                <div class="footer">
                    <div>
                        <el-button type="primary" @click="add" plain>
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
                        <el-button type="primary" plain>
                            重置密码
                            <i class="el-icon-brush el-icon--right"></i>
                        </el-button>
                    </div>
                    <div class="pagination">
                        <el-pagination
                            layout="prev, pager, next"
                            :total="setPageOne.tableData.length"
                        ></el-pagination>
                    </div>
                </div>
            </el-affix>
        </el-container>
        <AddAdmin></AddAdmin>
    </div>
</template>
  
  <script setup>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { main } from "@/js/tableData.js";
import { content } from "@/js/content.js";
import { globalMethods } from '@/js/until.js';
import AddAdmin from "../components/AddDialong/addAdmin.vue";
let { headerCellClassName, tableRowClassName, cellClassName } = globalMethods
let setPageOne = reactive({
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
    tableData: content.setPageOne,
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
const { add } = globalMethods
</script>
  
  <style lang="scss">
.testPageOne {
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
}
</style>
<!--
 * @Author: your name
 * @Date: 2021-08-04 09:36:25
 * @LastEditTime: 2021-08-31 15:51:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\SetPageThree.vue
-->
<template>
  <div class="setPageThree">
    <el-container>
      <el-header>
        <div class="header">
          <h1>秀洲区心理服务指导中心</h1>
        </div>
      </el-header>
      <el-main>
        <div class="main">
          <div class="l">
            <div class="btns">
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button @click="add" type="success" icon="el-icon-plus" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </div>
            <div class="lList" v-for="(item,key) in popedomList" @click="clickPopedom(key)">
              <div>{{ item.name }}</div>
              <div>{{ item.num }}</div>
            </div>
          </div>
          <div class="r">
            <el-container>
              <el-header>
                <div class="header">
                  <div class="btns">
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button @click="add" type="success" icon="el-icon-plus" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                  <h1>{{ city }}</h1>
                  <div class="search">
                    <el-input placeholder="按组织名称搜索" v-model="searchInput">
                      <template #append>
                        <el-button icon="el-icon-search"></el-button>
                      </template>
                    </el-input>
                  </div>
                </div>
              </el-header>
              <el-main>
                <el-table
                  :header-cell-class-name="headerCellClassName"
                  :cell-class-name="cellClassName"
                  :data="streetScene"
                >
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column label="组织名称" prop="name"></el-table-column>
                  <el-table-column label="行业范围" prop="scopeBusiness"></el-table-column>
                  <el-table-column label="隶属单位" prop="subordinateUnits"></el-table-column>
                  <el-table-column label="来访人数" prop="visitor"></el-table-column>
                  <el-table-column label="预约咨询" prop="order"></el-table-column>
                  <el-table-column label="潜在风险评估" prop="riskAssessment"></el-table-column>
                </el-table>
              </el-main>
              <el-footer>
                <div class="footer">
                  <div class="pagination">
                    <el-pagination
                      layout="prev, pager, next"
                      :total="streetScene.length"
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                    ></el-pagination>
                  </div>
                </div>
              </el-footer>
            </el-container>
          </div>
        </div>
      </el-main>
    </el-container>
    <AddPopedom></AddPopedom>
    <AddStreet></AddStreet>
  </div>
</template>

<script setup>
import { Edit } from "@element-plus/icons";
import { content } from "@/js/content.js";
import { globalMethods } from "@/js/until.js";
import { ref } from "@vue/reactivity";
import AddPopedom from "../components/AddDialong/addPopedom.vue";
import AddStreet from "../components/AddDialong/addStreet.vue";
let city = ref("秀洲区");
let searchInput = ref("");
let { popedomList, streetScene } = content;
let {
  headerCellClassName,
  cellClassName,
  handleSizeChange,
  handleCurrentChange,
  add
} = globalMethods;
let clickPopedom = (key) => {
  console.log(popedomList[key]);
  city.value = popedomList[key].name;
  streetScene.sort(function () {
    return Math.random() - 0.5;
  })

};
</script>

<style lang="scss" scoped>
.setPageThree {
  height: 100%;
  .el-container {
    height: 100%;
    .header {
      text-align: left;
      h1 {
        background: rgb(10, 136, 214);
        color: #fff;
        width: 350px;
        height: 50px;
        line-height: 50px;
        font-size: 25px;
        text-align: center;
        border-radius: 20px;
      }
    }
    .main {
      background: rgba(13, 137, 209, 0.062);
      overflow: hidden;
      height: 100%;
      display: flex;

      .l {
        width: 350px;
        background: rgba(145, 215, 255, 0.24);
        height: 100%;
        .lList {
          border-bottom: 2px solid rgb(145, 215, 255);
          padding: 0 10px 10px 10px;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          transition: 0.3s all;
          cursor: pointer;
        }
        .btns {
          display: flex;
          margin-bottom: 5px;
          justify-content: flex-end;
          padding: 10px;
          border-bottom: 2px solid rgb(145, 215, 255);
        }
        .lList :first-child {
          font-weight: bold;
          color: rgba($color: #584b4b, $alpha: 1);
        }
        .lList :last-child {
          //   border: 1px solid rgb(145, 215, 255);
          background: rgb(0, 162, 255);
          color: rgba($color: #e7e0e0, $alpha: 1);
          border-radius: 10px;
        }
        .lList:hover {
          border-bottom: 2px solid red;
          font-size: 22px;
        }
        .lListClick {
          border: 2px solid red;
          font-size: 22px;
        }
      }

      .r {
        height: 100%;
        width: calc(100% - 350px);
        .header {
          display: flex;
          justify-content: space-between;
          h1 {
            transition: 0.3s all;
          }
          .btns {
            padding: 10px;
            display: flex;
            justify-content: flex-start;
          }
          .search {
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>
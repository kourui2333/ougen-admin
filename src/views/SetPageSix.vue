<!--
 * @Author: your name
 * @Date: 2021-08-04 09:36:25
 * @LastEditTime: 2021-08-31 16:02:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\SetPageFour.vue
-->
<script setup>
import { ref } from "@vue/reactivity";
import { content } from "@/js/content.js"
import { globalMethods } from "../js/until";
import AddConsu from "../components/AddDialong/addConsu.vue";
const { headerCellClassName, cellClassName, gradeType, isShow, add } = globalMethods
const { consultingList } = content

let searchInput = ref("")
</script>
  <template>
  <div class="setPageFive">
    <AddConsu></AddConsu>
    <el-container>
      <el-header>
        <div class="header">
          <div class="search">
            <el-input placeholder="请输入姓名,编号,或量表名称" v-model="searchInput">
              <template #append>
                <el-button icon="el-icon-search"></el-button>
              </template>
            </el-input>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="main">
          <el-table
            :data="consultingList"
            :cell-class-name="cellClassName"
            :header-cell-class-name="headerCellClassName"
          >
            <el-table-column type="selection" width="30"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="linkman" label="联系人"></el-table-column>
            <el-table-column prop="phone" label="联系电话"></el-table-column>
            <el-table-column prop="linkmanJob" label="联系人职务"></el-table-column>
            <el-table-column prop="area" label="地址"></el-table-column>
            <el-table-column label="是否显示">
              <template #default="scope">{{ isShow(scope.row.isShow) }}</template>
            </el-table-column>
          </el-table>
        </div>
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
            <el-pagination layout="prev, pager, next" :total="consultingList.length"></el-pagination>
          </div>
        </div>
      </el-affix>
    </el-container>
  </div>
</template>
  
  
  
  <style lang="scss" scoped>
.setPageFive {
  height: 100%;
  .el-container {
    height: 100%;
    .header {
      margin-bottom: 30px;
      .search {
        width: 300px;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
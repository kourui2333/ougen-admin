<!--
 * @Author: your name
 * @Date: 2021-08-04 09:30:55
 * @LastEditTime: 2021-08-26 13:42:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\MentalityPageTwo.vue
-->
<template>
  <div class="mentalityPageTwo">
    <el-container>
      <h4>文件导入</h4>
      <el-upload
        class="upload-demo"
        drag
        action="http://192.168.0.106:8081/upload"
        multiple
        :on-progress="onProgress"
        :on-success="onSuccess"
        :on-error="onError"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将小于5MB文件拖到此处，或
          <em>点击上传</em>
        </div>
        <template #tip>
          <!-- <div
            class="el-upload__tip"
            style="width:100%;text-align:cneter"
          >
            只能上传 excel 文件，且不超过 5MB
          </div>-->
        </template>
      </el-upload>
      <h4>操作提示</h4>
      <div style="color:#f00">
        <h1>系统以手机号判断用户唯一性,相同手机号信息覆盖</h1>
      </div>
      <h4>导入记录</h4>

      <el-main>
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="joinTime" label="导入时间"></el-table-column>
          <el-table-column prop="sum" label="总数"></el-table-column>
          <el-table-column prop="ok" label="成功"></el-table-column>
          <el-table-column prop="fail" label="失败"></el-table-column>
          <el-table-column label="详情">
            <template #default="scope">
              <button @click="look" class="more">查看</button>
            </template>
          </el-table-column>
          <el-table-column label="原始文件">
            <template #default="scope">
              <button class="more" @click="look">下载</button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <div class="footer">
          <div class="export"></div>
          <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="tableData.length"></el-pagination>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { ElMessage, ElMessageBox, ElPopconfirm } from "element-plus";
import { joinList } from "@/js/tableData.js";
let tableData = reactive(joinList.data);
let onProgress = (file, fileList) => {
  console.log("文件上传时");
  console.log(file);
  console.log(fileList);
};
let onSuccess = (res, file, fileList) => {
  console.log("文件上传成功");
  console.log(res);
  console.log(file);
  console.log(fileList);
};
let onError = (err, file, fileList) => {
  console.log("文件上传失败");
  console.log(err);
  console.log(file);
  console.log(fileList);
};
let look = () => {
  ElMessage.error("当前网络状况不佳,请稍后再试")
}
</script>

<style lang="scss" scoped>
.mentalityPageTwo {
  height: 100%;
  text-align: left;
  .el-container {
    height: 100%;
    h4 {
      font-size: 20px;
      border-left: 3px solid rgba($color: #1880c5, $alpha: 1);
      margin: 5px 0;
    }
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
    .footer {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
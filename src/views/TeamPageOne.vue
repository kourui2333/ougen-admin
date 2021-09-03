<!--
 * @Author: your name
 * @Date: 2021-08-04 09:21:42
 * @LastEditTime: 2021-08-25 13:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\TeamPageOne.vue
-->
<template>
  <div class="teamPageOne">
    <el-container>
      <el-aside>
        <div class="aside">
          <div class="search">
            <el-input placeholder="请输入课程名称" v-model="searchInput">
              <template #append>
                <el-button icon="el-icon-search"></el-button>
              </template>
            </el-input>
          </div>
          <div class="classList" v-if="isTeam">
            <div
              class="classItem"
              v-for="item in classList"
              :style="item.isActive ? classActiveStyle : null"
            >
              <div class="title">{{ item.className }}</div>
              <div class="time">{{ item.time }}</div>
              <div class="sign">共{{ item.sign }}人已签到</div>
            </div>
          </div>
          <div class="classList" v-if="!isTeam">
            <div
              class="classItem"
              v-for="item in classList"
              :style="item.isActive ? classActiveStyle : null"
            >
              <div class="title">(个人){{ item.className }}</div>
              <div class="time">(个人){{ item.time }}</div>
              <div class="sign">共{{ item.sign }}人已签到</div>
            </div>
          </div>
          <div class="switch">
            <el-switch v-model="isTeam" active-text="团体课程" inactive-text="个人课程"></el-switch>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="main">
          <div class="header">
            <div class="left">
              <div>扫码签到</div>
              <div>
                <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </div>
              <div>
                <button :disabled="!value" @click="teamPageOne.shareCode">签到二维码</button>
              </div>
            </div>
            <div class="right">
              <div>
                <el-input placeholder="按编号,姓名,联系方式搜索" v-model="searchInput">
                  <template #append>
                    <el-button icon="el-icon-search"></el-button>
                  </template>
                </el-input>
              </div>
              <div>
                <el-select v-model="value2" placeholder="按状态筛选">
                  <el-option
                    v-for="item in option"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="body">
            <el-table
              :header-cell-class-name="headerCellClassName"
              :cell-class-name="cellClassName"
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column type="selection" width="30"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="sex" label="性别">
                <template #default="scope">{{ sex(scope.row.sex) }}</template>
              </el-table-column>
              <el-table-column prop="patientCode" label="身份证号"></el-table-column>
              <el-table-column label="联系方式">
                <template #default="scope">{{ scope.row.phone }}</template>
              </el-table-column>
              <el-table-column prop="signTime" label="签到时间"></el-table-column>
              <el-table-column label="单位(社区)">
                <template #default="scope">{{ scope.row.community }}</template>
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
          </div>

          <div class="footer">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              :limit="3"
            >
              <el-button type="primary" plain>
                上传课件/图片
                <i class="el-icon-s-management el-icon--right"></i>
              </el-button>
            </el-upload>
            <el-button type="primary" plain>
              导出签到人员
              <i class="el-icon-upload2 el-icon--right"></i>
            </el-button>
            <el-button type="primary" plain>
              导入签到人员
              <i class="el-icon-download el-icon--right"></i>
            </el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ElMessageBox } from "element-plus";
import { reactive, ref } from "@vue/reactivity";
import { main } from "@/js/tableData.js";
let isTeam = ref(true);
//搜索框输入内容
let searchInput = ref("");
// 是否开启扫码签到
let value = ref(true);
// 选中状态下的menu样式
let menuActiveStyle = {
  fontWeight: "bold",
  fontSize: "20px",
};
//   各状态单独样式
//   单元格样式
//   表头样式
let { sex, tableData, tableRowClassName, cellClassName, headerCellClassName } =
  main;
// 选中状态下的课程样式
let classActiveStyle = {
  boxShadow: "5px 5px 10px 2px #999",
};
// menu列表
let menuList = [
  { isActive: true, menuName: "团体课程", url: "/home/data" },
  { isActive: false, menuName: "个人课程", url: "/home/test" },
];
// 课程列表
let classList = [
  {
    isActive: true,
    className: "做情绪的主人",
    time: "2020-8-27",
    sign: "4",
    url: "/home/data",
  },
  
];
let value2 = ref("");
// 签到状态下拉框
let option = [
  { value: "0", label: "未签到" },
  { value: "1", label: "已签到" },
];
const teamPageOne = reactive({
  // 展示二维码
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
</script>

<style lang="scss" scoped>
.teamPageOne {
  height: 100%;
  .el-container {
    height: 100%;
    .aside {
      .menu {
        height: 50px;
        line-height: 50px;
        font-size: 17px;
        display: flex;
        justify-content: space-around;
        margin: 10px 0;
      }
      .search {
        padding: 10px;
      }
      .classList {
        padding: 10px 10px;
        //   height: cale(100vh);
        .classItem {
          // width: 100px;
          height: 100px;
          padding: 10px 10px;
          box-sizing: border-box;
          border-radius: 6px;
          text-align: left;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          border: 1px solid rgba(153, 153, 153, 0.281);
          margin: 20px 0;
          // box-shadow: 5px 5px 10px 2px #999;
          .title {
            font-size: 15px;
            font-weight: bold;
          }
          .time {
            font-size: 10px;
            font-weight: bold;
          }
          .sign {
            width: 100px;
            height: 20px;
            text-align: center;
            font-size: 10px;
            font-weight: bold;
            line-height: 20px;
            border-radius: 5px;
            color: rgba(247, 93, 3, 0.973);
            background: rgba(235, 113, 14, 0.281);
          }
        }
      }
      .switch {
        position: fixed;
        bottom: 20px;
      }
    }
    .main {
      height: 100%;
      .header {
        display: flex;
        justify-content: space-between;
        .left,
        .right {
          display: flex;
          height: 30px;
          line-height: 30px;
          margin: 0 0 20px 0;
        }
        .left {
          width: 300px;
          justify-content: space-between;
          font-weight: bold;
          button {
            width: 100px;
            height: 30px;
            border: none;
            background: rgba(19, 153, 206, 0.548);
            border-radius: 5px;
          }
        }
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
    }
    .footer {
      display: flex;
      position: fixed;
      bottom: 20px;
      button {
        margin: 10px;
      }
    }
  }
}
</style>
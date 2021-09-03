<!--
 * @Author: your name
 * @Date: 2021-08-02 15:15:22
 * @LastEditTime: 2021-08-31 11:30:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\Data.vue
-->
<template>
  <div class="data">
    <el-container>
      <el-header>
        <div class="dataMenu">
          <div
            class="dataMenuItem"
            v-for="(item,key) in dataMenu.dataMenuList"
            key="key"
            @click="tabGo(item.url, key)"
            :style="item.isActive ? dataMenu.activeStyle : dataMenu.unActiveStyle"
          >{{ item.dataMenuName }}</div>
        </div>
      </el-header>
      <el-main style="overflow: hidden;height: 100%;">
        <div :class="className">
        
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";

let router = useRouter();
let route = useRoute();
let className = ref("main")
let dataMenu = reactive({
  activeStyle: {
    background: "#e9eef3",
    color: "#000",
    fontWeight: "900",
  },
  unActiveStyle: {

  },
  dataMenuList: [
    { isActive: true, dataMenuName: "预约详情", url: "/home/online/pageone" },
    {
      isActive: false,
      dataMenuName: "咨询师管理",
      url: "/home/online/pagetwo",
    },
    {
      isActive: false,
      dataMenuName: "排班管理",
      url: "/home/online/pagethree",
    },
    {
      isActive: false,
      dataMenuName: "排班详情",
      url: "/home/online/pagefour",
    },
    {
      isActive: false,
      dataMenuName: "心理热线",
      url: "/home/online/pagefive",
    },
    {
      isActive: false,
      dataMenuName: "咨询室预约",
      url: "/home/online/pagesix",
    },
  ],
});
function tabGo(url, key) {
  className.value = "mainOut"
  setTimeout(() => {
    router.push(url).then(() => {
      className.value = "main"
      for (let a = 0; a < dataMenu.dataMenuList.length; a++) {
        if (dataMenu.dataMenuList[a] == dataMenu.dataMenuList[key]) {
          dataMenu.dataMenuList[a].isActive = true;
        } else {
          dataMenu.dataMenuList[a].isActive = false;
        }
      }
    })
  }, 90);
}
</script>

<style lang="scss" scoped>
.data {
  height: 100%;
  .el-container {
    height: 100%;
    .dataMenu {
      display: flex;
      height: 100%;
      background: #09468dab;
      align-items: flex-end;
      .dataMenuItem {
        width: 140px;
        height: 40px;
        //  border: 1px solid rgb(214, 157, 169);
        color: #fff;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        line-height: 40px;
        margin: 0 5px 0 0;
      }
    }

    .main {
      padding: 10px;
      box-sizing: border-box;
      animation: coming 0.3s linear;
    }
    .mainOut {
      padding: 10px;
      box-sizing: border-box;
      // animation: out 0.1s linear;
      transform: translateX(80px);
      transition: all 0.3s;
      opacity: 0;
    }
  }
}
</style>
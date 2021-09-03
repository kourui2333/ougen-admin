<!--
 * @Author: your name
 * @Date: 2021-08-02 15:32:59
 * @LastEditTime: 2021-08-30 11:16:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\Home.vue
-->
<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { globalMethods } from "../js/until";

const router = useRouter();
const route = useRoute();
let className = ref("main")
let menu = reactive({
  active: {
    background: "#09468dab",
    color: "#fff",
  },
  unActive: {
  },
  menuList: [
    { isActive: true, img: "data", menuName: "数据概览", url: "/home/data/pageOne" },
    { isActive: false, img: "test", menuName: "测评中心", url: "/home/test" },
    { isActive: false, img: "team", menuName: "团体辅导", url: "/home/team" },
    { isActive: false, img: "watch", menuName: "危机干预", url: "/home/watch" },
    { isActive: false, img: "mentality", menuName: "心理档案", url: "/home/mentality" },
    { isActive: false, img: "online", menuName: "咨询中心", url: "/home/online" },
    { isActive: false, img: "article", menuName: "文章管理", url: "/home/article" },
    { isActive: false, img: "video", menuName: "视频管理", url: "/home/video" },
    { isActive: false, img: "set", menuName: "系统管理", url: "/home/set" },
  ],
});

// 推出
let quit = () => {
  router.push("/login")
}
// menu切换
// let menuChange = globalMethods.menuChange
let menuChange = (value, key, list) => {
  className.value = "mainOut"
  setTimeout(() => {
    router.push(value).then(() => {
      className.value = "main"
      for (let a = 0; a < menu.menuList.length; a++) {
        if (menu.menuList[a] == menu.menuList[key]) {
          menu.menuList[a].isActive = true;
        } else {
          menu.menuList[a].isActive = false;
        }
      }
    })
  }, 200);
}

</script>
<template>
  <div class="home">
    <div style="position: fixed;right: 20px;top: 8px;">
      <el-button @click="quit" icon="el-icon-switch-button" circle></el-button>
    </div>
    <el-container>
      <el-aside width="150px">
        <div class="menu_title">
          <img style="width:50px;" src="@/assets/logo.png" alt />
          <h3>心理服务平台</h3>
        </div>
        <div class="menu">
          <div
            class="menu_item"
            v-for="(item,key) in menu.menuList"
            :key="key"
            @click="menuChange(item.url, key, menu.menuList)"
            :style="item.isActive ? menu.active : menu.unActive"
          >
            <img v-if="!item.isActive" :src="'images/' + item.img + '1.png'" alt />
            <img v-if="item.isActive" :src="'images/' + item.img + '2.png'" alt />

            <h4>{{ item.menuName }}</h4>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-main style="overflow: hidden;height: 100%;">
          <div :class="className">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.home {
  height: 100%;
  .el-container {
    height: 100%;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .menu_title {
      margin: 0 0 10px 0;
      padding: 20px 0 0 0;
      width: 100%;
      height: 100px;
      background: #09468dab;
      color: #fff;
    }
    .menu {
      .menu_item {
        margin: 0;
        width: 80px;
        height: 80px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 2px 2px 2px #09468dab;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        transition: all 0.5s;
        img {
          width: 40px;
        }
      }
    }
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    .main {
      // padding: 10px;
      box-sizing: border-box;
      // transition: all 0.3s;
      animation: coming 0.3s linear;
      // transform: translateX(0px);
    }
    .mainOut {
      // padding: 10px;
      box-sizing: border-box;
      // animation: menuOut 0.3s linear;
      transform: scale(1.01);
      transition: all 0.2s;
      opacity: 0;
    }
  }
}
</style>
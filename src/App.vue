<!--
 * @Author: your name
 * @Date: 2021-08-02 09:37:23
 * @LastEditTime: 2021-08-30 11:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\App.vue
-->
<template>
  <router-view></router-view>
</template>

<script setup>
import { provide, ref } from "@vue/runtime-core";
import * as echarts from "echarts";
// import HelloWorld from "./components/HelloWorld.vue";
provide("ec", echarts);
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

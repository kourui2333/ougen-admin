<!--
 * @Author: your name
 * @Date: 2021-08-04 09:31:50
 * @LastEditTime: 2021-08-13 12:41:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\OnLinePageThree.vue
-->
<template>
  <div class="onlinePageThree">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      type="border-card"
    >
      <el-tab-pane
        label="固定排班"
        name="first"
      >
        <div class="row">
          <div v-for="item in data">
            <h1>{{item.name}}</h1>
            <div class="week">

              <div
                v-for="(a,index) in item.list"
                :key="index"
                :class="oddOrEven(index)?'content':'contentS'"
              >
                <h4>{{a.time}}</h4>
                <h3>{{a.content}}</h3>
              </div>
            </div>

          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="动态排班"
        name="second"
      >动态排班</el-tab-pane>
      <el-tab-pane
        label="停诊计划"
        name="third"
      >停诊计划</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const activeName = ref("first");
let data = [
  {
    name: "周一",
    list: [
      { time: "09:00-09:30", content: "12320视频热线" },
      { time: "10:00-10:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
    ],
  },
  {
    name: "周二",
    list: [
      { time: "09:00-09:30", content: "12320视频热线" },
      { time: "10:00-10:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
    ],
  },
  {
    name: "周三",
    list: [
      { time: "09:00-09:30", content: "12320视频热线" },
      { time: "10:00-10:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
    ],
  },
  {
    name: "周四",
    list: [
      { time: "09:00-09:30", content: "12320视频热线" },
      { time: "10:00-10:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
    ],
  },
  {
    name: "周五",
    list: [
      { time: "09:00-09:30", content: "12320视频热线" },
      { time: "10:00-10:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
    ],
  },
  {
    name: "周六",
    list: [
      { time: "09:00-09:30", content: "12320视频热线" },
      { time: "10:00-10:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
    ],
  },
  {
    name: "周日",
    list: [
      { time: "09:00-09:30", content: "12320视频热线" },
      { time: "10:00-10:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
      { time: "11:00-11:30", content: "12320视频热线" },
    ],
  },
];
// tab点击事件
const handleClick = (tab, event) => {
  console.log(tab, event);
};
// 判断是奇数还是偶数
let oddOrEven = (num) => {
  return num % 2;
};
</script>

<style lang="scss" scoped>
.onlinePageThree {
  h1 {
    border-bottom: 2px solid rgba(202, 34, 34, 0.753);
    font-size: 20px;
    height: 40px;
    line-height: 40px;
  }
  .row {
    display: flex;
    justify-content: space-around;
    div {
      width: calc(100%);
    }
  }
  .week {
    overflow: auto;
    width: 100%;
    height: 800px;
    border: 1px solid rgba(0, 0, 0, 0.048);

    .content {
      text-align: left;
      border-left: 3px solid #f00;
      margin: 4px 0 0 4px;
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.041),
        rgba(0, 0, 0, 0.137)
      );
      h3 {
        color: #f00;
      }
    }
    .contentS {
      text-align: left;
      border-left: 3px solid rgb(47, 0, 255);
      margin: 4px 0 0 4px;
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.041),
        rgba(0, 0, 0, 0.137)
      );
      h3 {
        color: rgb(47, 0, 255);
      }
    }
  }
}
</style>
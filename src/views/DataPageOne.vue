<!--
 * @Author: your name
 * @Date: 2021-08-02 15:15:54
 * @LastEditTime: 2021-09-01 09:30:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\Data\pageOne.vue
-->
<template>
  <div class="dataPageOne">
    <el-container>
      <el-aside>
        <div class="aside" style="padding:20px">
          <h3 style="text-align:left">今日概览</h3>
          <div class="today">
            <div v-for="(item,key) in data.todayData">
              <h3>{{ item.amount }}</h3>
              <p>{{ item.name }}</p>
            </div>
          </div>
          <!-- 进度条 -->
          <div class="all_progress">
            <div v-for="(item,key) in data.progressList" class="progress">
              <div style="display:flex; justify-content: space-between;height:20px">
                <h4>{{ item.name }}</h4>
                <h5>{{ item.waring }}</h5>
              </div>
              <div style="display:flex; justify-content: space-between;height:20px">
                <p>{{ item.now }}</p>
                <p>{{ item.sum }}</p>
              </div>
              <div style="height:20px;margin-top:30px">
                <el-progress
                  :type="'line'"
                  text-inside
                  :percentage="item.now / item.sum * 100"
                  :color="data.customColors"
                ></el-progress>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="main">
          <div class="barBox">
            <h3 style="text-align:left;margin:20px">总体概览</h3>
            <!-- 总体概览 -->
            <div class="top">
              <div v-for="(item,key) in data.allData">
                <img :src="'dataImages/' + item.img + '.png'" alt style="height:40px" />
                <div>
                  <h3>{{ item.num }}</h3>
                  <h5>{{ item.name }}</h5>
                </div>
              </div>
            </div>
            <!-- 柱状图 -->
            <div class="center">
              <button @click="data.moon = !data.moon">切换</button>
              <bar-chart v-if="data.moon" :dataset="data.dataset"></bar-chart>
              <line-chart v-if="!data.moon"></line-chart>
            </div>
            <div class="footer">
              <div v-for="item in data.footerData">
                <p>{{ item.name }}</p>
                <h2>{{ item.num }}</h2>
              </div>
            </div>
          </div>
          <div class="pieBox">
            <div class="pie">
              <pie-chart :data="data.pieData1"></pie-chart>
            </div>
            <div class="pie">
              <pie-chart :data="data.pieData2"></pie-chart>
            </div>
            <div class="pie">
              <pie-chart :data="data.pieData3"></pie-chart>
            </div>
            <div class="pie">
              <pie-chart :data="data.pieData4"></pie-chart>
            </div>
            <div class="pie">
              <pie-chart :data="data.pieData5"></pie-chart>
            </div>
            <div class="pie">
              <pie-chart :data="data.pieData6"></pie-chart>
            </div>
            <!-- <div class="pie">
              <pie-chart :data="data.pieData7"></pie-chart>
            </div>-->
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
import { reactive } from "@vue/reactivity";
import LineChart from "../components/lineChart.vue";
let data = reactive({
  // 控制显示折线图还是柱状图
  moon: false,
  // 饼图数据
  pieData1: {
    name: "睡眠状况自评",
    data: [
      { value: 249, name: "正常", img: "1" },
      { value: 135, name: "轻度", img: "2" },
      { value: 180, name: "中度", img: "3" },
      { value: 184, name: "重度", img: "4" },
      { value: 100, name: "严重", img: "5" },
    ]
  },
  pieData2: {
    name: "压力自我评定",
    data: [
      { value: 1049, name: "正常", img: "1" },
      { value: 1735, name: "轻度", img: "2" },
      { value: 1580, name: "中度", img: "3" },
      { value: 1484, name: "重度", img: "4" },
      { value: 1300, name: "严重", img: "5" },
    ]
  },
  pieData3: {
    name: "工作倦怠",
    data: [
      { value: 109, name: "正常", img: "1" },
      { value: 135, name: "轻度", img: "2" },
      { value: 150, name: "中度", img: "3" },
      { value: 148, name: "重度", img: "4" },
      { value: 300, name: "严重", img: "5" },
    ]
  },
  pieData4: {
    name: "总体幸福感量表",
    data: [
      { value: 567, name: "正常", img: "1" },
      { value: 746, name: "轻度", img: "2" },
      { value: 546, name: "中度", img: "3" },
      { value: 365, name: "重度", img: "4" },
      { value: 576, name: "严重", img: "5" },
    ]
  },
  pieData5: {
    name: "流调用抑郁自评量表",
    data: [
      { value: 300, name: "正常", img: "1" },
      { value: 577, name: "轻度", img: "2" },
      { value: 900, name: "中度", img: "3" },
      { value: 279, name: "重度", img: "4" },
      { value: 169, name: "严重", img: "5" },
    ]
  },
  pieData6: {
    name: "广泛型焦虑量表",
    data: [
      { value: 231, name: "正常", img: "1" },
      { value: 324, name: "轻度", img: "2" },
      { value: 234, name: "中度", img: "3" },
      { value: 524, name: "重度", img: "4" },
      { value: 534, name: "严重", img: "5" },
    ]
  },
  pieData7: {
    name: "睡眠状况自评",
    data: [
      { value: 1049, name: "正常", img: "1" },
      { value: 1735, name: "轻度", img: "2" },
      { value: 1580, name: "中度", img: "3" },
      { value: 1484, name: "重度", img: "4" },
      { value: 1300, name: "严重", img: "5" },
    ]
  },

  // 柱状图下方数据
  footerData: [
    { name: "广泛性焦虑量表", num: "32%" },
    { name: "睡眠状况自评量表", num: "36%" },
    { name: "工作倦怠量表", num: "42%" },
    { name: "压力自我评定", num: "53%" },
    { name: "流调用抑郁自评量表", num: "57%" },
    { name: "总体幸福感量表", num: "60%" },
    // {name:"广泛性焦虑量表",num:"42%"},
  ],
  // 总体概览数据
  allData: [
    { img: "test", num: "11186", name: "测评人次(人)" },
    { img: "waring", num: "186", name: "预警人次(人)" },
    { img: "flow", num: "86/186", name: "跟踪处理" },
    { img: "tel", num: "111", name: "心理咨询" },
  ],
  // 柱状图数据
  dataset: {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["product", "评测人数", "预警人数", "已处理人数"],
        ["GOD-7", 143.3, 85.8, 83.7],
        ["SRSS", 183.1, 73.4, 55.1],
        ["MBI-GS", 186.4, 65.2, 62.5],
        ["PSTR", 172.4, 53.9, 39.1],
        ["CES-D", 143.3, 85.8, 83.7],
        ["GWB", 183.1, 73.4, 55.1],
        ["Cheese Cocoa", 186.4, 65.2, 62.5],
        ["Walnut Brownie", 172.4, 53.9, 39.1],
      ]
    },
    xAxis: { type: "category" },
    yAxis: {},
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  },
  // 今日概览数据
  todayData: [
    { amount: 125, name: "测评人数" },
    { amount: 45, name: "预警人数" },
    { amount: 0, name: "心理咨询" },
    { amount: "6/43", name: "跟踪处理" },
  ],
  percentage: 30,
  // 进度条数据
  progressList: [
    { name: "广泛型焦虑障碍(GAD-7)", waring: "50%", now: 29, sum: 50 },
    { name: "睡眠情况自评量表(SRSS)", waring: "20%", now: 61, sum: 184 },
    { name: "广泛型焦虑障碍(GAD-7)", waring: "50%", now: 2, sum: 50 },
    { name: "广泛型焦虑障碍(GAD-7)", waring: "50%", now: 29, sum: 100 },
    { name: "广泛型焦虑障碍(GAD-7)", waring: "50%", now: 29, sum: 100 },
    { name: "广泛型焦虑障碍(GAD-7)", waring: "50%", now: 40, sum: 50 },
  ],
  // 进度条颜色
  customColors: [
    { color: "#f56c6c", percentage: 20 },
    { color: "#e6a23c", percentage: 40 },
    { color: "#5cb87a", percentage: 60 },
    { color: "#1989fa", percentage: 80 },
    { color: "#6f7ad3", percentage: 100 },
  ],
});
const format = (percentage) => (percentage === 100 ? "满" : `${percentage}%`);
</script>

<style lang="scss" scoped>
.dataPageOne {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .aside {
    height: 1000px;
    border: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-radius: 10px;
    // color: darkgoldenrod;
    .today {
      // border: 1px solid rgba($color: #000000, $alpha: 0.1);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      animation: coming 0.5s linear;
      div {
        margin: 10px 0;
        padding-top: 20px;
        box-sizing: border-box;
        background: rgba($color: #29b3c5, $alpha: 0.1);
        // border: 1px solid rgba($color: #000000, $alpha: 0.1);
        width: 45%;
        p {
          margin: 0 0 20px 0;
        }
      }
    }
    //   .all_progress {
    //     .progress {
    //       border: 1px solid rgba($color: #000000, $alpha: 0.1);
    //     }
    //   }
  }
  .main {
    overflow-x: hidden;
    // border: 1px solid rgba($color: #000000, $alpha: 0.1);
    height: 1000px;
    .barBox {
      width: 100%;
      border: 1px solid rgba($color: #000000, $alpha: 0.1);
      border-radius: 10px;
      height: 620px;
      .top,
      .center,
      .footer {
        width: 100%;
        // border: 1px solid rgba($color: #000000, $alpha: 0.1);
      }
      .top {
        height: 100px;
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        div {
          height: 100px;
        }
      }
      .footer {
        height: 200px;
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        div {
          text-align: center;
          p {
            color: royalblue;
            font-weight: bold;
          }
        }
      }
    }
    .pieBox {
      // border: 1px solid rgba($color: #000000, $alpha: 0.1);
      display: flex;
      flex-wrap: wrap;
      .pie {
        width: 33%;
        height: 330px;
        margin: 1px;
        border-radius: 5px;
        border: 1px solid rgba($color: #000000, $alpha: 0.1);
      }
    }
  }
}
@keyframes coming {
  0% {
    opacity: 0;
    margin-top: 10px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
    display: block;
  }
}
</style>
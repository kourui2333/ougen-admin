<!--
 * @Author: your name
 * @Date: 2021-08-03 11:05:38
 * @LastEditTime: 2021-08-25 14:59:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\BarChart.vue
-->
<template>
  <div class="pies">
    <div class="pie" style="height:400px;width:300px" ref="chart"></div>
    <div class="data">
      <h1>{{ pieData.name }}</h1>
      <div v-for="item in pieData.data">
        <img style="width:20px" :src="'dataImages/' + item.img + '.png'" alt />
        <p>{{ item.name }}</p>
        <p>{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, nextTick, onMounted, ref } from "@vue/runtime-core";
export default {
  props: {
    data: {
      type: Object
    }
  },
  setup(props) {
    let echarts = inject("ec");
    let chart = ref(null);
    let pieData = props.data
    onMounted(() => {
      let myChart = echarts.init(chart.value);
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: pieData.data,
          },
        ],
      });
    });
    return { chart, pieData };
  },
};
</script>

<style lang="scss" scoped>
.pies {
  display: flex;
  .data {
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    padding: 50px 35px;
    h1 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 35px;
    }
    div {
      margin: -20px 0;
      width: 160px;
      height: 50px;
      display: flex;
      line-height: 50px;
      box-sizing: border-box;
      justify-content: space-around;
      img {
        margin-top: 32px;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
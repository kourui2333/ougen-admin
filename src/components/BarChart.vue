<!--
 * @Author: your name
 * @Date: 2021-08-03 11:05:38
 * @LastEditTime: 2021-09-01 09:20:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\BarChart.vue
-->
<!-- 柱状图 -->
<template>
  <div style="height:300px" ref="chart"></div>
</template>

<script>
import { inject, nextTick, onMounted, ref } from "@vue/runtime-core";
export default {
  props: { dataset: Object },
  setup(props) {
    let echarts = inject("ec");
    let chart = ref(null);
    onMounted(() => {
      console.log(props);
      let myChart = echarts.init(chart.value);
      myChart.setOption(props.dataset)
    });
    return { chart };
  },
};
</script>

<style lang="scss" scoped>
</style>
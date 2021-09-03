<!--
 * @Author: your name
 * @Date: 2021-09-01 09:21:55
 * @LastEditTime: 2021-09-01 09:40:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\lineChart.vue
-->
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
            myChart.setOption({
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['测试人数', '达标人数', '报警人数']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '报警人数',
                        type: 'line',
                        stack: '总量',
                        data: [
                            150, 232, 201, 154, 190, 330,
                            820, 932, 901, 934, 1290, 1330,
                            820, 932, 901, 934, 1290, 1330, 320, 332, 301, 334, 390, 330, 150, 820, 932, 901, 934, 1290, 1330, 410]
                    },
                    {
                        name: '达标人数',
                        type: 'line',
                        stack: '总量',
                        data: [
                            320, 332, 301, 334, 390, 330,
                            932, 901, 934, 1290, 1330, 150, 232, 201, 154, 190, 330, 820, 932, 901, 934, 1290, 1330,
                            150, 232, 201, 154, 190, 330, 320]
                    },
                    {
                        name: '测试人数',
                        type: 'line',
                        stack: '总量',
                        data: [
                            820, 932, 901, 934, 1290, 1330, 320, 332, 301, 334, 390, 330, 150,
                            320, 332, 301, 334, 390, 330, 150, 232, 201, 154, 190, 330, 820, 320, 332, 301, 334, 390, 330, 1320]
                    }
                ]
            })
        });
        return { chart };
    },
};
</script>

<style lang="scss">
</style>
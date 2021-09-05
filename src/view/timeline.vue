<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 22:18:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-05 21:34:37
-->
<template>
  <div id="main" class="main"></div>
</template>
<script setup="props">
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";
import sourdata from "@/assets/data.json";
onMounted(() => {
  var chartDom = document.getElementById("main");
  // 需要获取到element,所以是onMounted的Hook
  var myChart = echarts.init(chartDom);
  // 绘制图表
  var myChart = echarts.init(chartDom);
  var option;
  const formatter = e => {
    let data = e.data;
    return `${data.name},${data.value},${data.tip}`;
  };
  const splitData = rawData => {
    var categoryData = [];
    var values = [];
    for (var i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i].time);
      values.push(rawData[i].value);
    }
    console.log(values);
    return {
      categoryData: categoryData,
      values: values
    };
  };
  const splitValue = formatdata => {
    let result = [];
    for (let index = 0; index < formatdata.length; index++) {
      let values = formatdata[index];
      let objfb = {
        name: index,
        type: "line",
        // stack: "",
        // 显示数值
        itemStyle: {
          normal: {
            label: {
              show: true,
              borderCap: "butt",
              color: "red",
              // formatter: formatter,
              backgroundColor: "#000",
              lineHeight: 16,
              padding: 5,
              borderRadius: 3
            },
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          }
        },
        data: values
      };
      result.push(objfb);
    }
    console.log(result);
    return result;
  };
  option = {
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      containLabel: true
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        axis: "y"
      }
    },
    legend: {
      // data: [0, 1, 2, 3, 4, 5, 6]
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100
      },
      {
        show: true,
        type: "slider",
        top: "90%",
        start: 0,
        end: 100
      }
    ],
    xAxis: {
      type: "category",
      axisLine: { onZero: false },
      splitLine: { show: false },
      boundaryGap: false,
      data: splitData(sourdata).categoryData
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: true,
        interval: "auto",
        formatter: "事件"
      }
    },
    // series: splitValue(sourdata)
    series: [
      {
        name: "3的指数",
        type: "line",
        data: [[1]]
      },
      {
        name: "3的指数",
        type: "line",
        data: [[1]]
      },
      {
        name: "3的指数",
        type: "line",
        data: [[1]]
      }
    ]
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
  window.onresize = function() {
    // 自适应大小
    myChart.resize();
  };
});
</script>
<style scoped>
.main {
  width: 100%;
  height: 800px;
}
</style>



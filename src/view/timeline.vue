<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 22:18:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-06 00:25:48
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
    var time = [];
    var value = [];
    var type = [];
    for (var i = 0; i < rawData.length; i++) {
      time.push(rawData[i].time);
      value.push(rawData[i].value);
      type.push(rawData[i].type);
    }
    console.log(value);
    return {
      time: time,
      value: value,
      type: type
    };
  };
  const splitValue = formatdata => {
    let result = [];
    for (let index = 0; index < formatdata.length; index++) {
      const element = formatdata[index];
      let backgroundColor = "#000";
      if (element.type == 1) {
        backgroundColor = "blue";
      } else if (element.type == 2) {
        backgroundColor = "green";
      } else if (element.type == 3) {
        backgroundColor = "red";
      }
      result.push({
        name: element.time,
        data: [[element.time, element.type, element.value]],
        type: "scatter",
        symbol: "triangle",
        symbolRotate: 180,
        symbolSize: 5,
        itemStyle: {
          normal: {
            color: backgroundColor,
            labelLine: {
              show: false
            },
            label: {
              show: true,
              borderCap: "butt",
              color: "#ffffff",
              position: "top",
              distance: 0,
              align: "left",
              offset: [-53, 0],
              verticalAlign: "bottom",
              backgroundColor: backgroundColor,
              formatter: function(e) {
                return e.value[2];
              },
              width: 100,
              overflow: "break",
              lineHeight: 16,
              padding: 5,
              borderRadius: 3
            }
          }
        }
      });
    }
    // console.log(JSON.stringify(result));
    return result;
  };
  option = {
    grid: {
      left: "10%",
      right: "10%",
      bottom: "13%",
      containLabel: true
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        axis: "y"
      },
      formatter: function(params, ticket, callback) {
        // debugger;
        //提示框内容
        var value = "";
        return value;
      }
    },
    // legend: {
    //   data: []
    // },
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
      type: "time",
      scale: true,
      axisLine: { onZero: false },
      splitLine: { show: false },
      boundaryGap: true
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: true,
        interval: "auto",
        formatter: "{value} 类型"
      }
    },
    series: splitValue(sourdata)
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



<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 22:18:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-05 23:14:33
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
      result.push({
        name: element.time,
        lable: element.value,
        itemStyle: {
          normal: {
            color: "blue",
            label: {
              show: true,
              borderCap: "butt",
              color: "red",
              position: "top",
              backgroundColor: "#000",
              lineHeight: 16,
              padding: 5,
              borderRadius: 3
            }
          }
        },
        value: [element.time, element.type]
      });
    }
    console.log(result);
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
      }
    },
    legend: {
      // data: []
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
      type: "time",
      scale: true,
      axisLine: { onZero: false },
      splitLine: { show: false },
      boundaryGap: true
      // axisLabel: {
      //   formatter: "{value}"
      // }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: true,
        interval: "auto",
        formatter: "{value} 类型"
      }
    },
    // series: [
    //   {
    //     type: "scatter",
    //     data: ["2012", "1"]
    //   },
    //   {
    //     type: "scatter",
    //     data: ["2013", "2"]
    //   },
    //   {
    //     type: "scatter",
    //     data: ["2014", "3"]
    //   },
    //   {
    //     type: "scatter",
    //     data: ["2015", "2"]
    //   },
    //   {
    //     type: "scatter",
    //     data: ["2016", "3"]
    //   }
    // ]
    series: {
      name: "Female",
      type: "scatter",
      emphasis: {
        focus: "series"
      },
      // itemStyle: {
      //   normal: {
      //     label: {
      //       show: true,
      //       borderCap: "butt",
      //       color: "red",
      //       position: "top",
      //       backgroundColor: "#000",
      //       lineHeight: 16,
      //       padding: 5,
      //       borderRadius: 3
      //     },
      //     lineStyle: {
      //       color: "rgba(0,0,0,0)"
      //     }
      //   }
      // },
      data: splitValue(sourdata)
    }
    // series: {
    //   name: "Female",
    //   type: "scatter",
    //   emphasis: {
    //     focus: "series"
    //   },
    //   itemStyle: {
    //     normal: {
    //       label: {
    //         show: true,
    //         borderCap: "butt",
    //         color: "red",
    //         position: "top",
    //         backgroundColor: "#000",
    //         lineHeight: 16,
    //         padding: 5,
    //         borderRadius: 3
    //       },
    //       lineStyle: {
    //         color: "rgba(0,0,0,0)"
    //       }
    //     }
    //   },
    //   data: splitValue(sourdata)
    // }
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



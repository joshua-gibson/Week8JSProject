<template lang="html">
  <div>
<highcharts :options="chartOptions" ref="lineCharts" :constructor-type="'chart'"></highcharts>

  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import HighchartsCustomEvents from "highcharts-custom-events";
import exportingInit from "highcharts/modules/exporting";
import stockInit from "highcharts/modules/stock";

import { EventBus } from "./../event-bus.js";

stockInit(Highcharts);
exportingInit(Highcharts);
HighchartsCustomEvents(Highcharts);


export default {
  props: {
    partsdata: {
      type: Array
    }
  },

  components: {
    highcharts: Chart
  },

  created() {
    EventBus.$on("btn-clicked", data => {
      this.chartOptions.series[0].data = data.newData;
    });
  },

  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
          title: "Hassaan"
        },
        title: {
          text: "test",
          events: {
            click: () => {
              console.log("left click");
            },
            dblclick: () => {
              console.log("dblclick");
            },
            contextmenu: () => {
              console.log("right click");
            }
          }
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: "#666666",
              lineWidth: 1
            }
          }
        },
        series: [
          {
            data: [1, 2, 3]
          }
        ]
      }
    };
  }
};
//
// export default {
//   name: 'LaunchesChart',

  // props: [ 'chartData'],
  // data() {
  //   return{
  //     chartOptions: {
  //       series: [{
  //         data: []
  //       }]
  //     }
  //   }
  // }
  // data() {
  //   return {
  //     options: data
  //   };
  // }

// }
</script>

<style lang="css" scoped>
</style>

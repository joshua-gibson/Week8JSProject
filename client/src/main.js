import Vue from 'vue';
import App from './App.vue';
import HighchartsVue from 'highcharts-vue';
import Highcharts from "highcharts";

Vue.config.productionTip = false;
Vue.use(HighchartsVue);

new Vue({
  render: h => h(App),
}).$mount('#app')

//don't know if i need the below for the chart//
/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>"
// });

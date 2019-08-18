<template>
  <div id="app">
    <p v-for="(launch, index) in launches">Name: {{launch.name}}</p>

    <div><highcharts /> <btn /></div>


  </div>
</template>

<script>
import APIservice from '@/services/APIService.js';
import Chart from '@/components/Chart.vue';
import Button from '@/components/Button.vue';
import Highcharts from "highcharts";

export default {
  name: 'app',
  components: {
    'highcharts': Chart,
    'btn': Button
  },
  data() {
    return {
      launches: []
    }
  },
  mounted() {
    this.fetchData()
  },

  methods: {
    fetchData(){
      APIservice.getLaunches()
      .then(launches => this.launches = launches.launches);
    }

  }
}
</script>

<style>

</style>

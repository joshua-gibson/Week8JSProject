<template>
  <div id="app">
    <p v-for="(launch, index) in launches">Name: {{launch.name}}</p>
  </div>
</template>

<script>
import APIservice from '@/services/APIService.js'

export default {
  name: 'app',
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

<template>
  <div id="app">
    <h1>Launches!</h1>
    <launch-timeline :launches="launches" />
  </div>
</template>

<script>
import APIservice from '@/services/APIService.js'
import LaunchTimeline from '@/components/LaunchTimeline.vue'
export default {
  name: 'app',
  components: { 'launch-timeline': LaunchTimeline },
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

h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
}

#app {
  padding: 20px;
}

</style>

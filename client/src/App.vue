<template>
  <div id="app">
    <h1>Launches!</h1>
    <timeline :launches="launches"/>
  </div>
</template>

<script>
import APIservice from '@/services/APIService.js'
import Timeline from '@/components/timeline.vue'
export default {
  name: 'app',
  components: {
    'timeline': Timeline
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

h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
}

#app {
  padding: 20px;
}

</style>

<template>
  <div id="app">
    <p v-for="(launch, index) in launches">Name: {{launch.name}}</p>

    <timeline :launches="this.launches"/>

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
</style>

<template>
  <div id="app">
    <launch-splash />
    <launch-timeline :launches="launches" />
  </div>
</template>

<script>
import APIservice from '@/services/APIService.js'
import LaunchTimeline from '@/components/LaunchTimeline.vue'
import LaunchSplash from '@/components/LaunchSplash.vue'

export default {
  name: 'app',
  components: {
    'launch-timeline': LaunchTimeline,
    'launch-splash': LaunchSplash
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

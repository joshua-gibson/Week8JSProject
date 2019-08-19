<template lang="html">
  <div class="buffer">
    <v-app id="inspire">
      <v-timeline class="tl" :reverse="true">
        <launch-card v-for="(launch, index) in launches" :launch="launch" :key="index" />
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
import APIservice from '@/services/APIService.js';
import LaunchCard from '@/components/LaunchCard.vue';
export default {
  name: 'LaunchTimeline',
  components: { 'launch-card': LaunchCard },
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

<style lang="css" scoped>
.buffer {
  display: flex;
}

.tl {
  font-family: 'Josefin Sans', sans-serif;
  background-color: white;
}

</style>

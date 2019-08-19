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
      launches: [],
      bottom: false,
      currDate: null
    }
  },
  mounted() {
    this.currDate = new Date();
    this.fetchData()
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    fetchData(){
      APIservice.getLaunches(this.currDate)
      .then(launches => this.launches = launches.launches);
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.fetchData();
        this.currDate.setDate(this.currDate.getDate() + 20);
      }
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

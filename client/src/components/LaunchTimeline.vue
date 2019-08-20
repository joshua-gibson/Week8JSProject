<template lang="html">
  <div>
    <div class="tl-container">
      <v-app id="inspire">
        <v-timeline class="tl" :reverse="true">
          <launch-card v-for="(launch, index) in launches" :launch="launch" :key="index" />
        </v-timeline>
      </v-app>
    </div>
    <bottom-spinner :loading="loading"/>
  </div>
</template>

<script>
import APIservice from '@/services/APIService.js';
import LaunchCard from '@/components/LaunchCard.vue';
import BottomSpinner from '@/components/BottomSpinner.vue';

export default {
  name: 'LaunchTimeline',
  components: {
    'launch-card': LaunchCard,
    'bottom-spinner': BottomSpinner
  },
  data() {
    return {
      launches: [],
      bottom: false,
      loading: false,
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
      this.loading = true;
      APIservice.getLaunches(this.currDate)
        .then(launches => {
          this.loading = false;
          this.launches = this.launches.concat(launches.launches);
        });
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        console.log('At bottom');
        this.fetchData();
        this.currDate.setDate(this.currDate.getDate() + 20);
      }
    }
  }
}
</script>

<style lang="css" scoped>
.tl-container {
  display: flex;
}

.tl {
  font-family: 'Josefin Sans', sans-serif;
  background-color: white;
}

</style>

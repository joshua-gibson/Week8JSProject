<template lang="html">
  <div>
    <nav-bar />
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
import NavBar from '@/components/NavBar.vue';
import APIservice from '@/services/APIService.js';
import LaunchCard from '@/components/LaunchCard.vue';
import BottomSpinner from '@/components/BottomSpinner.vue';
import { eventBus } from '@/main.js';

export default {
  name: 'LaunchTimeline',
  components: {
    'launch-card': LaunchCard,
    'bottom-spinner': BottomSpinner,
    'nav-bar': NavBar
  },
  data() {
    return {
      launches: [],
      bottom: false,
      loading: false,
      sDate: '',
      eDate: '',
    }
  },
  watch: {
    bottom(bottom) {
      console.log('at bottom');
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });

    eventBus.$on('date-update', (payload) => {
      this.launches = [];
      this.sDate = payload.sDate;
      this.eDate = payload.eDate;
      this.refreshData();
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

    refreshData(){
      this.loading = true;
      APIservice.getLaunches(this.sDate, this.eDate)
        .then(launches => {
          this.loading = false;
          this.launches = launches.launches;
        });
    }
  },
}
</script>

<style lang="css" scoped>
.tl-container {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.tl {
  font-family: 'Josefin Sans', sans-serif;
  background-color: white;

}

</style>

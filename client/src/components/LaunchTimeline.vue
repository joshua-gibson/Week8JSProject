<template lang="html">
  <div>
    <nav-bar />
      <div class="tl-container">
        <v-app id="inspire">
          <v-timeline class="tl" :reverse="true">
            <launch-card v-for="(launch, index) in launches" :launch="launch" :flagList="flagList" :key="index" />
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
      scrollDateStart: '',
      flagList: []
    }
  },
  watch: {
    bottom(bottom) {
      this.addData();
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });

    eventBus.$on('date-update', (payload) => {
      this.sDate = payload.sDate;
      this.scrollDateStart = payload.sDate;
      this.eDate = payload.eDate;
      this.refreshData();
    });

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(res => {
      res.map(x=>this.flagList.push({alphaCode: x.alpha3Code, flag: x.flag}));
    })
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },

    refreshData() {
      this.launches = [];
      this.loading = true;
      APIservice.getLaunches(this.sDate, this.eDate)
        .then(launches => {
          this.loading = false;
          this.launches = launches.launches;
        });
    },

    addData() {
      const offsetDate = new Date(this.scrollDateStart);
      offsetDate.setDate(offsetDate.getDate() + 30);
      const offsetDateStr = offsetDate.toISOString().substring(0, 10);
      this.loading = true;
      APIservice.getLaunches(this.scrollDateStart, offsetDateStr)
        .then(newLaunches => {
          this.loading = false;
          this.launches = this.launches.concat(newLaunches.launches);
          this.scrollDateStart = offsetDateStr;
        })
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

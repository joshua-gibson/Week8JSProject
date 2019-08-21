<template>
  <v-timeline-item color="orange">
    <template v-slot:opposite>
      <span class="opYear">{{ launch.isonet | formattedDate }}</span>
    </template>
    <v-hover v-slot:default="{ hover }">
    <v-card class="cardBody" :elevation="hover ? 12 : 2">
      <v-card-title class="cardTitle">
        <div class="lName">
          {{ launch.name }}
        </div>
        <img v-bind:src="flagURL" alt="flag" class="flagImg">
      </v-card-title>
      <v-row>
        <v-col cols="12" md="10">
          <v-card-text>
            <span class="itemLabel"> Rocket Type: </span>
            {{ launch.rocket.familyname }}
          </v-card-text>
          <v-card-text>
            <span class="itemLabel"> Agency: </span>
            {{ launch.lsp.name }}
          </v-card-text>
          <v-card-text>
            <span class="itemLabel">Location: </span>
            <span>{{ launch.location.pads[0].name }}</span>
          </v-card-text>
        </v-col>
      </v-row>
      <div v-if="moreInfoAvailable">
        <v-btn :block="true" @click="showMoreInfo">More Info</v-btn>
      </div>
    </v-card>
  </v-hover>
  </v-timeline-item>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'LaunchCard',
  filters: {
    formattedDate(isonetString) {
      const monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const lDate = new Date(isonetString.substring(0,4), parseInt(isonetString.substring(4,6),10) - 1, isonetString.substring(6,8));
      return `${lDate.getFullYear()} ${monthArr[lDate.getMonth()]} ${lDate.getDate()}`;
    }
  },
  data() { return { popup: false } },
  props: ['launch', 'flagList'],
  computed: {
    moreInfoAvailable() {
      if (this.launch.missions.length > 0) return true;
      return false;
    },
    flagURL() {
      return this.flagList.find(e => e.alphaCode === this.launch.lsp.countryCode).flag;
    }
  },
  methods: {
    showMoreInfo() {
      eventBus.$emit('display-info', this.launch);
    }
  }
}
</script>

<style>
.cardTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px;
  padding: 5px;
  background-color: orange;
  color: white;
  /* border: 2px solid red; */

}

.lName {
/* border: 2px solid green; */
font-size: 20px;
font-weight: 1000;
width: 400px;

}

.cardBody {
  font-family: 'Josefin Sans', sans-serif;
  margin: 2px;
  padding: 1px;
  width: 800px;
}

.opYear {
  font-family: 'Josefin Sans', sans-serif;
  color: orange;
  font-size: 30px;
  font-weight: 1000;
  margin: 1px;
  padding: 1px;
}

.flagImg {
  width: 50px;
}

.itemLabel {
  font-weight: bold;
  font-size: 18px;
}
</style>

<template>
  <v-timeline-item color="orange">
    <template v-slot:opposite>
      <span class="opYear">{{ launch.isonet | formattedDate }}</span>
    </template>
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2">
        <v-card-title class="tl cardTitle">
          <h2> {{ launch.name }} </h2>
        </v-card-title>
        <v-row>
          <v-col cols="12" md="10">
            <p>
            <span class="itemLabel"> Rocket Type: </span>
            {{ launch.rocket.familyname }}
            </p>
            <p>
            <span class="itemLabel">Location: </span>
            <span>{{ launch.location.pads[0].name }}</span> 
            </p>
          </v-col>
        </v-row>
        <div v-if="moreInfoAvailable">
          <v-icon size="42" class="opYear"> mdi-magnify </v-icon>
          <v-btn @click="showMoreInfo">More Info</v-btn>
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
      return `${lDate.getFullYear()} - ${monthArr[lDate.getMonth()]} ${lDate.getDate()}`;
    }
  },
  data() { return { popup: false } }, 
  props: ['launch'],
  computed: {
    moreInfoAvailable() {
      if (this.launch.missions.length > 0) return true;
      return false;
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
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  margin: 0px;
  padding: 5px;
  background-color: orange;
  color: white;
}

.cardBody {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  margin: 2px;
  padding: 1px;
}

.opYear {
  font-family: 'Josefin Sans', sans-serif;
  color: orange;
  font-size: 30px;
  font-weight: 1000;
  margin: 1px;
  padding: 1px;
}

.itemLabel {
  font-weight: bold;
}
</style>

<template>
  <v-dialog v-model="dialog">
    <v-card v-if="selectedLaunch">
      <v-title>
        {{ selectedLaunch.missions[0].name }}
      </v-title>
      <v-card-text>
        {{ selectedLaunch.missions[0].description }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'LaunchPopup',
  data() {
    return {
      selectedLaunch: null,
      dialog: false
    }
  },
  mounted() {
    eventBus.$on('display-info', (launch) => {
      this.selectedLaunch = launch;
      this.dialog = true;
    });
  }
}
</script>

<style>
</style>

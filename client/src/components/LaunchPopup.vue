<template>
  <v-dialog v-model="dialog">
  </v-dialog>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'LaunchPopup',
  data() {
    return {
      selectedLaunch: {},
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

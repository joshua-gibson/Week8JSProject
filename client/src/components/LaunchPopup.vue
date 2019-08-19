<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card v-if="launch" class="mx-auto">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ launch.missions[0].name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <strong> Rocket: </strong>
            {{ launch.rocket.familyname }}
          </v-list-item-subtitle>
          <v-list-item-subtitle v-if="launch.lsp.name">
            <strong> Agency: </strong>
            {{ launch.lsp.name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle v-if="launch.location">
            <strong> Location: </strong>
            {{ launch.location.name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <strong> Date: </strong>
            {{ launch. }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    <v-img v-if="imageURL" :contain="true" :src="imageURL" height="300"></v-img>

      <v-card-text class="desc">
        {{ launch.missions[0].description }}
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
      launch: null,
      dialog: false
    }
  },
  computed: {
    imageURL() {
      const placeholderURL = 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png';
      const launchImageURL = this.launch.rocket.imageURL;
      if (launchImageURL !== placeholderURL) return launchImageURL;
      return false;
    }
  },
  mounted() {
    eventBus.$on('display-info', (launch) => {
      this.launch = launch;
      this.dialog = true;
    });
  }
}
</script>

<style>
  .desc {
    margin-top: 1em;
  }
</style>

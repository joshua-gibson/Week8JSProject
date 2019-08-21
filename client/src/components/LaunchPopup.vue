<template>
  <v-dialog v-model="dialog" max-width="800" class="dialogObj">
    <v-card v-if="launch" class="mx-auto">
      <v-list-item class="topContainer">
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
        </v-list-item-content>
      </v-list-item>

      <div class="bottomContainer">
        <launch-map class="mapItem" v-if="launch.location.pads" :pad="launch.location.pads[0]"/>

      <v-img class="imgItem" v-if="imageURL" :contain="true" :src="imageURL" height="300"></v-img>

        <v-card-text class="descItem">
          {{ launch.missions[0].description }}
        </v-card-text>
    </div>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
import LaunchMap from '@/components/LaunchMap';

export default {
  name: 'LaunchPopup',
  data() {
    return {
      launch: null,
      dialog: false
    }
  },
  components: {
    'launch-map': LaunchMap
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



.topContainer {
display: flex;
width: 300px;
border: 2px solid red;
}

.headline {
  background-color: orange;
  color: white;
  width: 500px;
}

.bottomContainer {
display: flex;
flex-direction: row;
flex-grow: 1;
justify-content: space-between;
width: 500px;
border: 2px solid red;
}

.mapItem {
  display: flex;
  border: 2px solid green;
  height: 300px;
    width: 300px;
}

.imgItem {
  display: flex;
  border: 2px solid blue;
  height: 300px;
  width: 300px;
}

.descItem{
  display: flex;
  border: 2px solid orange;
  width: 300px;
}

</style>

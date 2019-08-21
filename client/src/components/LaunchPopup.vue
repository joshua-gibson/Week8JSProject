<template>
  <v-dialog v-model="dialog" max-width="900" class="dialogObj">
    <v-card v-if="launch" class="mx-auto">
      <v-list-item class="topContainer">
        <v-img class="imgItem" v-if="imageURL" :contain="true" :src="imageURL" ></v-img>
        <div class="header">
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
        </div>
      </v-list-item>

      <div class="bottomContainer">



        <v-card-text class="descItem">
          {{ launch.missions[0].description }}
        </v-card-text>

        <launch-map class="mapItem" v-if="launch.location.pads" :pad="launch.location.pads[0]"/>

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
    /* border: 2px solid green; */
display: flex;
  justify-content: flex-start;


}

.header {
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 750px;
  align-self: flex-start;
}


.headline {
  background-color: orange;
  color: white;
  justify-content: flex-start;
  align-items: flex-start;
}

.bottomContainer {
display: flex;
justify-content: flex-start;
align-self: flex-start;
flex-direction: column;
flex-wrap: wrap;
width: 900px;

}

.mapItem {
  display: flex;
  /* border: 2px solid green; */
    width: 900px;
    height: 300px;
    padding: 2px;
    margin: 2px;
}

.imgItem {
  display: flex;
  /* border: 2px solid blue; */
  height: 100px;
  width: 100px;
  padding: 2px;
  margin: 2px;
}

.descItem{
  display: flex;
  /* border: 2px solid orange; */
  vertical-align: text-bottom;
  align-self: flex-end;
  width: 900px;
  padding: 2px;
  margin: 2px;
}

</style>

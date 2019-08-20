<template lang="html">
<div class="map-wrapper">
  <l-map
  :zoom="3"
  :center="center"
  style="height: 100%; width: 100%"
  >
  <l-tile-layer :url="url"/>
  <l-marker :lat-lng="center"/>
</l-map>

</div>

</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
name: 'LaunchMap',
data(){
  return {
    center: [this.pad.latitude, this.pad.longitude],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  }
},
components: {
  'l-map': LMap,
  'l-marker': LMarker,
  'l-tile-layer': LTileLayer
},
props: ['pad'],
mounted() {
  // this.center[0] = this.pad.latitude;
  // this.center[1] = this.pad.longitude;
  // this.url = this.pad.mapURL;
  console.log(`coordinates ${this.center}`)
}

}


</script>

<style lang="css" scoped>
.map-wrapper{
  height: 200px;
  width: 200px;
}
</style>

<template lang="html">
  <div class="map-wrapper">
    <l-map
      :zoom="3"
      :center="center"
      style="height: 100%; width: 100%"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="center" />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'LaunchMap',
  components: {
    'l-map': LMap,
    'l-marker': LMarker,
    'l-tile-layer': LTileLayer
  },
  props: ['pad'],
  data(){
    return {
      center: [this.pad.latitude, this.pad.longitude],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  }
}
</script>

<style lang="css" scoped>
.map-wrapper{
  height: 300px;
  width: 300px;
}
</style>

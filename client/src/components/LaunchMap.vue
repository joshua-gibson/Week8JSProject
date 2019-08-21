<template lang="html">
  <div class="map-wrapper">
    <l-map
      :zoom="5"
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
  components: {
    'l-map': LMap,
    'l-marker': LMarker,
    'l-tile-layer': LTileLayer
  },
  data(){
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  },
  props: ['pad'],
  computed: {
    center: function () {
      return [this.pad.latitude, this.pad.longitude];
    }
  }
}


</script>

<style lang="css" scoped>
.map-wrapper{
  height: 300px;
  width: 900px;
}
</style>

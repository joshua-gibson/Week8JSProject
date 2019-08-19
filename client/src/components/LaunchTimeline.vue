<template lang="html">
  <div class="buffer">
    <v-app id="inspire">
      <v-timeline class="tl" :reverse="true">
        <launch-card v-for="(launch, index) in launches" :launch="launch" :key="index" />
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
import LaunchCard from '@/components/LaunchCard.vue';
export default {
  name: 'LaunchTimeline',
  components: { 'launch-card': LaunchCard },
  props: ['launches'],
}
</script>

<style lang="css" scoped>
/*
.TimelineContainer {
display: flex;
flex-grow: 2;
margin: 50px;
border: 5px;
padding: 50px;
width: 1000px;
height: 1000px;
min-width: 500px;
max-width: 1500px;
border: solid grey 1px;
overflow: auto;
-webkit-box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
-moz-box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
}
 */

.buffer {
  display: flex;
}


.tl {
  font-family: 'Josefin Sans', sans-serif;
  background-color: white;
}

</style>

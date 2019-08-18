<template lang="html">
<div class="TimelineContainer">
  <v-timeline :reverse=true>

  <v-timeline-item
    v-for="(launch, index) in launches"
    fill-dot
    small
    dense
    :left = false
    :right = false
  >

    <v-card>

      <v-card-title class="tl">
        <v-icon
          dark
          size="42"
          class="mr-3"
        >
          mdi-magnify
        </v-icon>
        <h2>{{launch.name}}</h2>
      </v-card-title>

      <v-container class="tl">
        <v-row>
          <v-col cols="12" md="10">
            <p>Rocket Type: {{launch.rocket.familyname}}</p>
            <p v-if="launch.missions[0]">Description: {{launch.missions[0].description}}</p>
            <p>Location: {{launch.location.pads[0].name}}</p>

          </v-col>
          <v-col
            class="hidden-sm-and-down text-right"
            md="2"
          >
          </v-col>
        </v-row>
      </v-container>

    </v-card>

  </v-timeline-item>




</v-timeline>
</div>
</template>

<script>
export default {
  name: 'Timeline',
  props: ['launches']
}
</script>

<style lang="css" scoped>
.TimelineContainer {
  display: flex;
  flex-grow: 2;
  margin: 5px;
  padding: 5px;
/* width: 1000px; */
height: 1000px;
border: solid grey 1px;
overflow: auto;
-webkit-box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
-moz-box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
}


.tl {
  font-family: 'Josefin Sans', sans-serif;
}

h2 {
  font-size: 20px;
}

</style>

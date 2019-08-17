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
            <p>Description: {{launch.missions[0].description}}</p>
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

.tl {
  font-family: 'Josefin Sans', sans-serif;
}

h2 {
  font-size: 20px;
}

</style>

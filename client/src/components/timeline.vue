<template lang="html">
<div class="TimelineContainer">
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">

<div v-for="(launch, index) in launches">

    <!-- Loop Start -->
  <v-timeline-item
    color="purple lighten-2"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="purple lighten-2">
        <v-icon
          dark
          size="42"
          class="mr-4"
        >
          mdi-magnify
        </v-icon>
        <h2 class="display-1 white--text font-weight-light">{{launch.name}}</h2>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" md="10">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
          </v-col>
          <v-col
            class="hidden-sm-and-down text-right"
            md="2"
          >
            <v-icon size="64">mdi-calendar-text</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>
<!-- Loop End -->
</div>



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
</style>

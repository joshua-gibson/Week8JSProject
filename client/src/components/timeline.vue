<template lang="html">
<div class="TimelineContainer">
  <v-app id="inspire">
  <v-timeline class="tl"
    :reverse=true

    >

  <v-timeline-item
    color="orange"
    v-for="(launch, index) in launches"
  >

  <template v-slot:opposite>
    <span class="opYear">{{formatDt(launch.isonet)}}</span>
  </template>

    <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 12 : 2">

      <v-card-title class="tl cardTitle">
        <h2 >{{launch.name}}</h2>
      </v-card-title>

      <v-container class="cardBody">
        <v-row>
          <v-col cols="12" md="10">
            <p> <span class="itemLabel">Rocket Type:   </span> {{launch.rocket.familyname}}</p>
            <p> <span class="itemLabel" v-if="launch.missions[0]"> Description: </span>  <span v-if="launch.missions[0]" >{{launch.missions[0].description}}</span> </p>
            <p> <span class="itemLabel">Location: </span>  <span>{{launch.location.pads[0].name}}</span>  </p>

          </v-col>
        </v-row>
          <v-icon
            size="42"
            class="opYear"
          >
            mdi-magnify
          </v-icon>
          <span>More Info Button</span>
      </v-container>

    </v-card>
  </v-hover>

  </v-timeline-item>




</v-timeline>
</v-app>
</div>
</template>

<script>
export default {
  name: 'Timeline',
  props: ['launches'],
methods: {
  formatDt(isonetString){return isonetString.substring(0,8)}
}
}
</script>

<style lang="css" scoped>

.TimelineContainer {
  display: flex;
  flex-grow: 2;
  margin: 50px;
  padding: 50px;
/* width: 1000px; */
height: 1000px;
min-width: 500px;
max-width: 1500px;
border: solid grey 1px;
overflow: auto;
-webkit-box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
-moz-box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
box-shadow: 3px 3px 20px 0px rgba(130,128,130,0.48);
}


.tl {
  font-family: 'Josefin Sans', sans-serif;
  background-color: white;

}

.cardTitle {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  margin: 0px;
  padding: 5px;
  background-color: orange;
  color: white;
}

.cardBody {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  margin: 2px;
  padding: 1px;
}

.opYear {
  font-family: 'Josefin Sans', sans-serif;
  color: orange;
  font-size: 30px;
  font-weight: 1000;
  margin: 1px;
  padding: 1px;
}

.itemLabel {
  font-weight: bold;
}



</style>

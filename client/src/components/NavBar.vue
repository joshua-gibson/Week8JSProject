<template lang="html">
<nav class="NavContainer">
  <form v-on:submit.prevent class="navForm" action="index.html" method="post">
    <label class="labels" for="start-date">Start Date: </label>
    <input type="date" class="DatePicker" v-model="sdate" name="start-date">
    <label class="labels" for="end-date">End Date: </label>
    <input type="date" class="DatePicker" v-model="edate" name="end-date">
    <input type="submit" class="button" v-on:click="goroute" name="" value="submit">
  </form>
</nav>
</template>

<script>
import APIservice from '@/services/APIService.js';
export default {
  name: 'nav-bar',
  data() {
    return{
    sdate: "2019-08-22",
    edate: "2019-08-30"
  }
  },
  methods: {
    goroute() {
      window.location.href = `http://localhost:8080/${this.sdate}/${this.edate}`;
    }
  }
}
</script>

<style lang="css" scoped>
.NavContainer{
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  color: white;
  background-color: orange;
  font-size: 30px;
  font-weight: 1000;
  justify-content: center;
  align-items: center;
  margin: 1px;
  padding: 1px;

  height: 70px;
  position: -webkit-sticky;
  position: sticky;
  top: 0rem;
  align-self: flex-start;
  z-index: 9;
}

.navForm {
  justify-content: center;
  align-items: center;
}


.button {
  background-color: #fcba03;
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: relative;
  bottom: 3px;
}

.labels {
  margin: 20px;
}

.DatePicker {
  background-color: white;
  color: orange;
  text-align: center;
  margin-top: 20px;
}


</style>

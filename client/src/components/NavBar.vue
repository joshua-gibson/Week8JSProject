<template lang="html">
<nav class="NavContainer">
  <form v-on:submit.prevent class="" action="index.html" method="post">
    <label for="start-date"></label>
    <input type="date" v-model="sdate" name="start-date">
    <label for="end-date"></label>
    <input type="date" v-model="edate" name="end-date">
    <input type="submit" v-on:click="goroute" name="" value="submit">
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
  color: white;
  background-color: orange;
  font-size: 30px;
  font-weight: 1000;
  margin: 1px;
  padding: 1px;
}

</style>

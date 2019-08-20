<template lang="html">
<nav>
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
    sdate: "2019-08-12",
    edate: "2019-09-12"
  }
  },
  methods: {
    goroute() {
      window.location.href = `http://localhost:8080/api/launcher/${this.sdate}/${this.edate}`;
      // this.$router.push(`/${sdate}/${edate}`)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

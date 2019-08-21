<template lang="html">
  <nav class="NavContainer">
    <form @submit.prevent="handleSubmit" class="navForm" method="post">
      <label class="labels" for="start-date">Start Date: </label>
      <input type="date" class="DatePicker" v-model="sDate" name="start-date">
      <label class="labels" for="end-date">End Date: </label>
      <input type="date" class="DatePicker" v-model="eDate" name="end-date">
      <input type="submit" class="button" value="submit">
    </form>
  </nav>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'NavBar',
  data() {
    return{
      sDate: '',
      eDate: ''
    }
  },
  mounted() {
    // This has to fire after the entire view is rendered
    this.$nextTick(() => {
      const currDate = new Date();
      const endDate = new Date(currDate);
      endDate.setDate(endDate.getDate() + 30);
      this.sDate = currDate.toISOString().substring(0, 10);
      this.eDate = endDate.toISOString().substring(0, 10);
      eventBus.$emit('date-update', {'sDate': this.sDate, 'eDate': this.eDate });
    });
  },
  methods: {
    handleSubmit() {
      eventBus.$emit('date-update', {'sDate': this.sDate, 'eDate': this.eDate });
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
  min-width: 1200px;
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

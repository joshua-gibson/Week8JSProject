<template lang="html">
  <h3>
    Countdown to next launch:
    {{ launchText }}
  </h3>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'LaunchCountdown',
  mounted() {
    eventBus.$on('initial-launch-time', ((launchTime) => {
      this.launchTime = launchTime;
      this.nowTime = new Date().getTime();
    }));
    window.setInterval(() => {
      this.nowTime = new Date().getTime();
      const seconds = this.timerDate.getSeconds();
      const minutes = this.timerDate.getMinutes();
      const hours =  this.timerDate.getHours();
      const days = this.timerDate.getDay();
      this.launchText = `${days} Days ${hours} Hours, ${minutes} Mins, ${seconds} Secs`;
    },1000);
  },
  data() {
    return {
      launchTime: 0,
      nowTime: 0,
      launchText: ''
    }
  },
  computed: {
    timerDate() {
      const timeLeft = this.launchTime - this.nowTime;
      return new Date(timeLeft);
    },
  }
}
</script>

<style lang="css" scoped>
</style>

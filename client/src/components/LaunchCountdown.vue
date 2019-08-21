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
      this.timeTilLaunch = this.launchTime - this.nowTime;
      const timerDate = new Date(this.timeTilLaunch);
      const seconds = timerDate.getSeconds();
      const minutes = timerDate.getMinutes();
      const hours =  timerDate.getHours();
      const days = timerDate.getDay();
      this.launchText = `${days} Days ${hours} Hours, ${minutes} Mins, ${seconds} Secs`;
    },1000);
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: null,
      launchTime: 0,
      nowTime: 0,
      timeTilLaunch: 0,
      launchText: ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>

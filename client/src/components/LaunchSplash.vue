<template>
  <div id="splash" :style="{ height: splashHeight }">
    <h1>Launches!</h1>
  </div>
</template>

<script>
export default {
  name: 'LaunchSplash',
  data() {
    return { splashHeight: '1000px' }
  },
  mounted() {
    this.splashHeight = `${window.innerHeight}px`;
  }
}
</script>

<style>
#splash {
}
</style>

<template>
  <div id="splash" :style="{ height: splashHeight }">
    <h1>Launches!</h1>
    <!-- <video autoplay loop id="video-background" muted plays-inline>
  <source src="https://www.youtube.com/watch?v=wnhvanMdx4s" type="video/mp4">
</video> -->
<img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
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
/* #splash {
} */

/* #video-background {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
} */
</style>

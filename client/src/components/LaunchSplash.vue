<template>
  <div id="splash" :style="{ height: splashHeight }">
    <div class="videoBgWrapper">
        <video loop muted autoplay poster="../assets/spaceshuttle.jpg" class="videoBg">
            <source src="../assets/shuttlecinemagraph.mp4" type="video/mp4">
        </video>
    </div>
    <h1>Launches!</h1>
    <h3> A time-line of all future-space launches</h3>


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
background-image: url("../assets/spaceshuttle.jpg");
background-size: cover;
} */

h1, h3 {
  font-family: 'Josefin Sans', sans-serif;
}

h1 {
  color: white;
  text-align: center;
  padding-top: 150px;
}

h3 {
  color: white;
  padding-top: 10px;
  text-align: center;
  /* padding-top: px; */
}

.videoBgWrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
}

.videoBg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
/* #splash {
  background: url(../assets/spaceshuttle.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */

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

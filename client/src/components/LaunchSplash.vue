<template>
  <div :style="{ height: splashHeight }">

        <video loop muted autoplay poster="../assets/spaceshuttle.jpg" class="videoBg">
            <source src="../assets/shuttlecinemagraph.mp4" type="video/mp4">
        </video>
</div>
<!-- <h1>Launches!</h1>
<h3> A time-line of all future-space launches</h3> -->
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
  /* background-size: cover; */
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
}

.videoBg{
  /* background-size: cover; */
    position: absolute;
    object-fit: fill;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}


</style>

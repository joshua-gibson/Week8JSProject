<template>
  <div :style="{ height: splashHeight }">

        <video loop muted autoplay poster="../assets/spaceshuttle.jpg" class="videoBg">
            <source src="../assets/shuttlecinemagraph.mp4" type="video/mp4">
        </video>
      <h1>Nova.</h1>
      <h3>The History and Future of Spaceflight</h3>
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

h1, h3 {
  font-family: 'Josefin Sans', sans-serif;
}

h1 {
  color: white;
  text-align: center;
  padding-top: 100px;
  font-size: 4rem;
  position:relative;
  text-shadow: 2px 2px black
}

h3 {
  color: white;
  padding-top: 10px;
  text-align: center;
  font-size: 2rem;
  position: relative;
  text-shadow: 2px 2px black
  /* padding-top: px; */
}

/* .videoBgWrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
} */

.videoBg{
    position:absolute;
    object-fit: fill;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}


</style>

<template>
  <div id="app">
    <launch-splash />
    <launch-popup />
    <launch-timeline />
  </div>
</template>

<script>
import LaunchTimeline from '@/components/LaunchTimeline.vue';
import LaunchSplash from '@/components/LaunchSplash.vue';
import LaunchPopup from '@/components/LaunchPopup.vue';


export default {
  name: 'app',
  components: {
    'launch-timeline': LaunchTimeline,
    'launch-splash': LaunchSplash,
    'launch-popup': LaunchPopup,
  }
}
</script>

<style>



</style>

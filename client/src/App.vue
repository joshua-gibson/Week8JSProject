<template>
  <div id="app">
    <launch-splash />
    <launch-countdown :date="Date.now() + 604800000"></launch-countdown>
    <launch-popup />
    <launch-timeline />
  </div>
</template>

<script>
import LaunchTimeline from '@/components/LaunchTimeline.vue';
import LaunchSplash from '@/components/LaunchSplash.vue';
import LaunchPopup from '@/components/LaunchPopup.vue';
import LaunchCountdown from '@/components/LaunchCountdown.vue';


export default {
  name: 'app',
  components: {
    'launch-timeline': LaunchTimeline,
    'launch-splash': LaunchSplash,
    'launch-popup': LaunchPopup,
    'launch-countdown': LaunchCountdown
  }
}
</script>

<style>



</style>

<template>
  <div><button @click="click">Update chart</button></div>
</template>

<script>
import { EventBus } from "./../event-bus.js";

export default {
  methods: {
    click() {
      EventBus.$emit("btn-clicked", {
        newData: [2, 1, 4, 6]
      });
    }
  }
};
</script>

<style></style>

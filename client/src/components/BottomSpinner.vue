<template>
  <div v-if="loading" class="spinner-wrapper">
  <v-progress-circular
    indeterminate
    class="spinner"
    :size="100"
    :width="7"/>
  </div>
</template>

<script>
export default {
  name: 'BottomSpinner',
  props: ['loading']
}
</script>

<style>
.spinner-wrapper {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spinner {
  color: orange;
}
</style>

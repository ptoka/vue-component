<template>
  <div>
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar',
    components: {
    }
  }
</script>

<style scoped>
  #tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
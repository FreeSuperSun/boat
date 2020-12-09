<template>
  <div class="triangle">
  </div>
</template>

<script>
export default {
  name: "triangle"
}
</script>

<style scoped>
.triangle {
  background-color: black;
  height: 0;
  width: 0;
  border: 50px red solid;
  border-right-color: green;
  border-bottom-color: blue;
  border-left-color: yellow;
  margin:10px auto;
}
</style>
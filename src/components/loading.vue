<template>
  <div id="loading">
    <div class="box center">
      <img :src="require('@/assets/loading.png')">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@keyframes rotates {
    to {
        transform: rotate(0);
    }
    from {
        transform: rotate(360deg);
    }
}
#loading {
  width: 100%;
  height: 100%;
  .box {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 0.64rem;
    height: 0.64rem;
    animation: rotates 4s linear;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }
}
</style>
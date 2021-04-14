<template>
  <div v-if="setShow" id="loading">
    <div class="box center">
      <img :src="require('@/assets/loading.png')">
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "loading",
  setup() {
    const setShow = ref(false);

    const show = () => {
      setShow.value = true;
    };

    const hide = () => {
      setShow.value = false;
    };

    setTimeout(() => {
      //setShow.value = false;
    }, 5000);

    return {
      setShow,
      show,
      hide,
    };
  },
};
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
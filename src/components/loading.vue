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

</style>
<template>
  <section id="popup" v-if="canShow">
    <div class="context">
      <div class="close">
        <img :src="require('@/assets/close.png')" @click="close">
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  setup(props,{ emit }) {
    const canShow = computed(() => props.show)

    const close = () => {
        emit('update:show',false)
    }

    return {
      canShow,
      close
    }
  }
}
</script>

<style lang="scss" scoped>
#popup {
  width: 100vw;
  height: 100vh;
  padding: 0.6rem 0.16rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #f6f7fa;
  .context {
    border-radius: 0.1rem;
    background: #fff;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0.1rem 0.16rem;
    .close {
      text-align: right;
      img {
        width: 0.2rem;
        height: 0.2rem;
        object-fit: cover;
      }
    }
  }
}
</style>
<template>
  <section id="tips" class="success">
    {{ texts.value }}
  </section>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const texts = ref('')

    texts.value = computed(() => props.text)

    return {
      texts
    }
  }

}
</script>



<style lang="scss" scoped>
#tips {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 0.4rem;
  color: #fff;
  z-index: 999999;
  text-align: center;
  line-height: .4rem;
}

.danger {
    background: #F56C6C;
}
.success {
    background: #67C23A;
}
</style>
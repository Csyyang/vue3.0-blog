<template>
  <div class="home">
    <loading @touchmove="test" v-show="isloading" />
    <div v-show="!isloading">
      233
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import loading from '@/components/loading'

export default {
  name: 'Home',
  components: {
    loading
  },
  setup() {
    const isloading = ref(true)

    // setTimeout(() => {
    //   isloading.value = false
    // },3000)



    return {
      isloading
    }
  }
  ,methods: {
    test(a) {
      console.log(a)
    }
  }
}
</script>


<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>

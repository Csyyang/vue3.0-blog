<template>
  <div class="home">
    <loading v-show="isloading" />
    <div v-show="!isloading">
     <headers />
     发生都啥大法师打发斯蒂芬斯蒂芬双方都
     发生都啥大法师打发斯蒂芬斯蒂芬双方都
     发生都啥大法师打发斯蒂芬斯蒂芬双方都
     发生都啥大法师打发斯蒂芬斯蒂芬双方都
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import loading from '@/components/loading'
import headers from '@/components/header'

export default {
  name: 'Home',
  components: {
    loading,
    headers
  },
  setup() {
    const isloading = ref(true)

    setTimeout(() => {
      isloading.value = false
    },1000)



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

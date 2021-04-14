<template>
  <section id="index">
    <markdown />
    <!-- <loading /> -->
  </section>
</template>

<script>
// import loading from '@/plugin/loading/index'
// import { h } from 'vue'
import markdown from "@/components/markdown";

export default {
  components: {
    markdown,
    // loading: loading.component
  },
  // created() {
  //   let a = loading.serve()
  //   setTimeout(() => {
  //     a.show()
  //   }, 1000)
  // }
  // setup() {
  //   return () => h(
  //     'div',
  //     {
  //       id: 'loading'
  //     },
  //     h('div',
  //       {
  //         classList: 'box center'
  //       },
  //       h('img',
  //       {
  //         src: require('@/assets/loading.png')
  //       }
  //       )
  //     )
  //   )
  // }

};
</script>

<style>
</style>
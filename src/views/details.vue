<template>

  <section id="details">
    <div style="height:.5rem">
      <headers />
    </div>

    <markdown :context="content.article_context" />
  </section>
</template>

<script>
import markdown from '@/components/markdown'
import { useRoute } from 'vue-router'
import headers from '@/components/header'


export default {
  components: {
    markdown,
    headers
  },
  setup() {
    const router = useRoute()

    const content = JSON.parse(router.query.detail)

    return {
      content
    }

  }
}
</script>
<style lang="scss" scoped>
#details {
  background: #fff;
  height: 100vh;
  overflow-y: scroll;
  padding:.2rem 0 ;
}
</style>

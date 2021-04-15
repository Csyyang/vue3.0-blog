<template>
  <section id="list">

    <div style="height: .5rem">
      <headers />
    </div>

    <articles :articles="articleList" />
  </section>
</template>

<script>
import { getTypeArticles } from '@/api/front'
import articles from '@/components/article'
import headers from '@/components/header'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
  components: {
    articles,
    headers
  },
  setup() {
    const route = useRoute()
    const type = route.query.type
    
    const articleList = ref([])

    const getList = async () => {
      const res = await getTypeArticles({ type })
      articleList.value = res.context
    }

    getList()

    return {
      articleList
    }


  }
}
</script>

<style>
</style>
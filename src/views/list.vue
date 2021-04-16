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
import { computed, ref, watch } from 'vue'

export default {
  components: {
    articles,
    headers
  },
  setup() {

    const route = useRoute()
    let type = computed(() => route.params.type)

    const articleList = ref([])

    watch(type, (value) => {
      console.log(value)
      if (value !== undefined) {
        getList()
      }
    })


    const getList = async () => {
      const res = await getTypeArticles({ type: type.value })
      articleList.value = res.context
    }
    getList()

    return {
      articleList,
      getList
    }


  }
}
</script>

<style lang="scss" scoped>
#list {
  height: 100vh;
  overflow-y: scroll;
  background: #fff;
}
</style>
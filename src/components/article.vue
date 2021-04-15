<template>
  <section class="article">
    <div class="box" v-for="item in arr" :key="item.article_id">
      <img class="article-pic" :src="item.article_url">
      <div class="article-context">
        <p class="title font14">{{ item.article_title }}</p>
        <div class="date">
          <img :src="require('@/assets/calendar.png')">
          <span>{{ changeDate(item.article_date) }}</span>
        </div>
        <p class="desc">{{ item.article_desc }}</p>

        <button @click="goDetail(item)" class="btn">点击详情</button>
      </div>

    </div>

  </section>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    let arr = []
    const router = useRouter()

    arr = computed(() => {
      return props.articles
    })

    const changeDate = (str) => {
      return str.split('T')[0]
    }

    const goDetail = (item) => {
      router.push({ path: '/details', query: {
        detail: JSON.stringify(item)
      } })
    }

    return {
      arr,
      changeDate,
      goDetail
    }
  },
}
</script>


<style lang="scss" scoped>
.article {
  background: #fff;
  padding: 0.4rem 0.18rem;
  .box {
    border: 1px solid #ddd;
    margin-bottom: 0.4rem;
    img.article-pic {
      display: block;
      width: 100%;
      height: 3.15rem;
      object-fit: cover;
      margin-bottom: 0.2rem;
    }
    .article-context {
      padding: 0 0.16rem;
      padding-bottom: 0.2rem;

      .title {
        color: #464646;
        margin-bottom: 0.12rem;
      }
      .date {
        display: flex;
        align-items: center;
        img {
          width: 0.15rem;
          display: block;
          object-fit: contain;
          margin-right: 0.1rem;
        }
        span {
          font-size: 0.12rem;
          color: #999;
        }
      }
      .desc {
        margin-top: 0.12rem;
        font-size: 0.12rem;
        color: #999;
      }
      .btn {
        margin: 0.2rem 0;
        background: #222;
        font-size: 0.12rem;
        text-align: center;
        letter-spacing: 0.07rem;
        padding: 0.05rem 0.1rem;
        color: #fff;
      }
    }
  }
}
</style>
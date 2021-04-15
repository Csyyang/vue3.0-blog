<template>
  <div class="home">
    <!-- 头部组件 -->
    <headers />

    <!-- 轮播图 -->
    <section class="context">
      <div class="photo">
        <div ref="touch" class="touch" @touchstart.prevent="touchstart" @touchmove.prevent="touchmove" @touchend.prevent="touchend">
          <ul class="photo-box" v-for="(item,index) in img" :key="index">
            <li class="photo-list">
              <img :src="item">
            </li>
          </ul>
        </div>
        <ul class="point-box">
          <li v-for="(item,index) in img" :key="index" :class="[index === imgIndex?'white-point':'']"></li>
        </ul>
      </div>
    </section>

    <!-- 文章组件 -->
    <articles :articles="articleList" />

    <!-- 底部组件 -->
    <footers />

  </div>
</template>
<script>
// @ is an alias to /src
// import { ref } from 'vue'
import headers from '@/components/header'
import touchMethods from '@/views/home/home.js'
import articles from '@/components/article'
import footers from '@/components/footer'
import { getArticles } from '@/api/front'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    headers,
    articles,
    footers
  },
  setup() {
    // 轮播
    const { img, imgIndex, touch, move, touchmove, touchend, touchstart } = touchMethods()

    //获取文章列表
    let articleList = ref([])

    const getList = async () => {
      const res = await getArticles()
      articleList.value = res.context
    }


    getList()

    return {
      touch,
      img,
      move,
      imgIndex,
      touchend,
      touchmove,
      touchstart,
      articleList
    }
  },
  methods: {
    test(a) {
      console.log(a)
    }
  }
}
</script>


<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  .context {
    padding-top: 0.5rem;
    .photo {
      height: 2.6rem;
      overflow: hidden;
      position: relative;
      div.touch {
        display: flex;
        transition: transform 0.2s;
        .photo-box {
          .photo-list {
            img {
              display: block;
              width: 3.75rem;
              height: 2.6rem;
              object-fit: cover;
            }
          }
        }
      }
      .point-box {
        position: absolute;
        display: flex;
        width: 100%;
        height: 0.12rem;
        z-index: 99;
        bottom: 0.15rem;
        justify-content: center;
        li {
          width: 0.1rem;
          height: 0.1rem;
          background: #ccc;
          border-radius: 50%;
          margin-right: 0.05rem;
        }
        .white-point {
          background: #fff;
        }
      }
    }
  }
}
</style>

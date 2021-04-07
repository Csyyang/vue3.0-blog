<template>
  <div class="home">
    <headers />
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

      <section class="article">
        <div class="box">
          <img class="article-pic" :src="require('@/assets/test.jpeg')">
          <div class="article-context">
            <p class="title font14">这时标题</p>
            <div class="date">
              <img :src="require('@/assets/calendar.png')">
              <span>2020-12-22</span>
            </div>
            <p class="desc">
              这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述
            </p>

            <button class="btn">点击详情</button>
          </div>

        </div>
        <div class="box">
          <img class="article-pic" :src="require('@/assets/test.jpeg')">
          <div class="article-context">
            <p class="title font14">这时标题</p>
            <div class="date">
              <img :src="require('@/assets/calendar.png')">
              <span>2020-12-22</span>
            </div>
            <p class="desc">
              这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述
            </p>

            <button class="btn">点击详情</button>
          </div>

        </div>
      </section>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
// import { ref } from 'vue'
import headers from '@/components/header'
import touchMethods from '@/views/home/home.js'

export default {
  name: 'Home',
  components: {
    headers
  },
  setup() {
    // 轮播
    const { img, imgIndex, touch, move, touchmove, touchend, touchstart } = touchMethods()

    return {
      touch,
      img,
      move,
      imgIndex,
      touchend,
      touchmove,
      touchstart
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
  height: 100%;
  width: 100%;
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
            text-transform: uppercase;
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
  }
}
</style>

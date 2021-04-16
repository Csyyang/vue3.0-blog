<template>
  <section id="message-board">
    <popup v-model:show="show"  />
    <!-- 头部组件 -->
    <div style="height:.5rem">
      <headers />
    </div>

    <section class="message-box">
      <section class="title">
        <span>留言（13）</span>
      </section>

      <section class="message-context">
        <div class="user">
          <p class="name">隔壁老王</p>
          <p class="time">2012-12-22</p>
          <p>wow nb 厉害</p>
          <div class="operate">
            <div class="operate-context">
              <img class="fabulous" :src="require('@/assets/fabulous.png')">
              <span>(1)</span>
            </div>
            <button @click="show = true">123条评论</button>
          </div>
        </div>
      </section>

    </section>
  </section>
</template>

<script>
import headers from '@/components/header'
import popup from '@/components/popup'
import { ref } from 'vue'

export default {
  components: {
    headers,
    popup
  },
  setup() {
    const show = ref(false)

    return {
      show
    }
  }
}
</script>

<style lang="scss" scoped>
#message-board {
  height: 100vh;
  overflow-y: scroll;
  background: #fff;
  .title {
    color: black;
    font-size: 0.2rem;
    font-weight: 500;
    span {
      padding: 0.1rem 0.06rem;
      border-radius: 0.07rem;
      display: inline-block;
      overflow: hidden;
      background: #f7f7f7;
    }
  }
  .message-box {
    padding: 0.2rem 0.16rem;
    .message-context {
      margin-bottom: 0.16rem;
      background: #f7f7f7;
      border-radius: 0.07rem;
      color: black;
      padding: 0.1rem 0.06rem;
      .name {
        font-weight: 500;
      }
      .time {
        font-size: 0.12rem;
        margin-top: 0.08rem;
        margin-bottom: 0.2rem;
      }
      .operate {
        display: flex;
        margin-top: 0.2rem;
        .operate-context {
          display: flex;
          align-items: center;
          .fabulous {
            width: 0.2rem;
            height: 0.2rem;
            object-fit: cover;
          }
        }
        button {
          margin: 0;
          margin-left: 0.12rem;
        }
      }
    }
  }
}
</style>
<template>
  <transition name="fade">
    <section class="popupLeft" v-show="showPop" @click="closePopup">
      <transition name="box">
        <div class="context" v-show="showPop">
          <section class="head-portrait">
            <img :src="require('@/assets/head-portrait.png')" alt="">
            <p class="font15">🐑</p>
            <p class="font14">前端程序员</p>
          </section>

          <section class="list-menu">
            <ul class="list-context" @click="emit('closePopup')">
              <li>
                <img :src="require('@/assets/home.png')">
                <router-link to="/">
                  <span>首页</span>
                </router-link>
              </li>
              <li>
                <img :src="require('@/assets/code.png')">
                <router-link to="/list/0">
                  <span>技术分享</span>
                </router-link>
              </li>
              <li>
                <img :src="require('@/assets/code.png')">
                <router-link to="/list/1">
                  <span>游戏杂谈</span>
                </router-link>
              </li>
              <li>
                <img :src="require('@/assets/message.png')">
                <router-link to="/messageBoard">
                  <span>留言</span>
                </router-link>
              </li>
              <li>
                <img :src="require('@/assets/myself.png')">
                <span>个人中心</span>
              </li>
              <li v-if="root">
                <img :src="require('@/assets/myself.png')">
                <router-link to="/posterior/index">
                  <span>编辑</span>
                </router-link>
              </li>

            </ul>
          </section>
        </div>
      </transition>
    </section>
  </transition>
</template>


<script>
import { useStore } from 'vuex';
import { computed } from "vue";

export default {
  props: {
    showPop: { // 是否展示弹出层
      default: () => false,
      type: Boolean
    }
  },
  emits: ['closePopup'],
  setup(props, { emit }) {
    //data
    //store
    const store = useStore()
    // computed
    const root = computed(() => store.state.root)
    // method
    const closePopup = (e) => {
      if (e.target !== e.currentTarget) return;
      emit('closePopup')
    };


    return {
      closePopup,
      root,
      emit
    }
  },
}
</script>

<style lang="scss" scoped>
.popupLeft {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  .context {
    width: 2.6rem;
    height: 100vh;
    background: #111;
    position: relative;
    .head-portrait {
      width: 100%;
      height: 1.99rem;
      padding: 0.4rem 0 0.28rem 0;
      text-align: center;
      color: #fff;
      img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    .list-menu {
      padding-top: 0.1rem;
      .list-context {
        color: #fff;

        a {
          color: #fff;
        }
        li {
          height: 0.45rem;
          padding: 0 0.16rem;
          display: flex;
          align-items: center;
          img {
            width: 0.18rem;
            object-fit: contain;
            margin-right: 0.12rem;
          }
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.box-enter-active {
  animation: box-in 0.5s;
}
.box-leave-active {
  animation: box-in 0.5s reverse;
}

@keyframes box-in {
  from {
    left: -2.6rem;
  }
  to {
    left: 0;
  }
}
</style>


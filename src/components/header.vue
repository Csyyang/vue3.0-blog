<template>
  <section id="header">
    <div class="list">
      <img @click="changePopup" :src="require('@/assets/list.png')">
    </div>
    <div class="title">
      前端blog
    </div>
    <div class="list">
      <img class="width50" :src="require('@/assets/xing.png')" alt="">
    </div>

  </section>
  <transition name="fade">
    <section class="popup" v-show="showPop" @click="closePopup">
      <transition name="box">
        <div class="context" v-show="showPop">
          <section class="head-portrait">
            <img :src="require('@/assets/head-portrait.png')" alt="">
            <p>23333</p>
            <p>2333</p>
          </section>
        </div>
      </transition>
    </section>
  </transition>

</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    //data
    const showPop = ref(false);

    //methods
    const changePopup = () => {
      showPop.value = !showPop.value;
    };

    const closePopup = (e) => {
      if (e.target !== e.currentTarget) return;

      changePopup();
    };

    return {
      showPop,
      changePopup,
      closePopup,
    };
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  max-width: 750px;
  height: 0.5rem;
  background: #111;
  padding: 0 0.18rem 0 0.18rem;
  display: flex;
  justify-content: space-between;
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 0.25rem;
      object-fit: contain;
    }
    .width50 {
      width: 0.3rem;
    }
  }
  .title {
    color: #fff;
    font-size: 0.21rem;
    line-height: 0.5rem;
  }
}
.popup {
  position: absolute;
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
      padding: 40px 0 28px 0;
      text-align: center;
      color: #fff;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: contain;
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
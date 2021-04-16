<template>
  <section id="header">
    <div class="list">
      <img @click="changePopup" :src="require('@/assets/list.png')">
    </div>
    <div class="title">
      <router-link to="/">
        前端blog
      </router-link>
    </div>
    <div class="list">
      <router-link to="/posterior/login">
        <img class="width50" :src="require('@/assets/xing.png')">
      </router-link>
    </div>

  </section>

  <popup :showPop="showPop" @closePopup="changePopup" />
</template>
<script>
import { ref } from "vue";
import popup from './popupLeft'

export default {
  components: {
    popup
  },
  setup() {
    //data
    const showPop = ref(false);

    //methods
    const changePopup = () => {
      showPop.value = !showPop.value;
    };


    return {
      showPop,
      changePopup
    };
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 750px;
  height: 0.5rem;
  background: #111;
  padding: 0 0.18rem 0 0.18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 0.25rem;
      object-fit: contain;
    }
    .width50 {
      display: block;
      position: relative;
      top: 50%; /*偏移*/
      width: 0.3rem;
    }
  }
  .title {
    a {
      color: #fff;
    }
    font-size: 0.21rem;
    line-height: 0.5rem;
  }
}
</style>
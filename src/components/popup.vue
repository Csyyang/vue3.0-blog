<template>
      <transition name="fade">
    <section class="popup" v-show="showPop" @click="closePopup">
      <transition name="box">
        <div class="context" v-show="showPop"></div>
      </transition>
    </section>
  </transition>
</template>


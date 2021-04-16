<template>
  <footer>
      <p class="title">前端博客</p>
      <p class="text">斯人若彩虹，遇上方知有</p>
      <hr />
      <p class="bei font12">© 2018 All Right Reserved <a href="https://beian.miit.gov.cn">蜀ICP备19009210号</a></p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    background: #111;
    padding: .35rem .18rem;
    text-align: center;
    .title {
        font-size: .24rem;
        letter-spacing: .01rem;
        font-weight: 700;
        margin-bottom: .1rem;
    }
    .text {
        font-size: .12rem;
        margin-bottom: .15rem;
    }
    .bei {
        margin-top: .1rem;
        color: #eee;
    }
    a {
        color: orange;
    }
}
</style>
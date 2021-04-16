<template>
  <section id="login">
    <form>
      <p class="title">后管登录</p>

      <div class="form-item">
        <label for="user">用户名</label>
        <input v-model="user" name="user" type="text">
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input v-model="password" name="password" type="password">
      </div>

      <button type="button" class="btn" @click.stop="login">登录</button>
    </form>
  </section>
</template>

<script>
import { ref } from 'vue'
import { submit } from '@/api/posteriorCanal'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

export default {
  setup() {

    const store = useStore()
    const router = useRouter()
    const user = ref('admin')
    const password = ref('admin')

    const login = async () => {
      const res = await submit({ user: user.value, password: password.value })
      if (res.code == '00') {
        store.commit('changeRoot', true)
        router.push('./index')
      }
    }

    return {
      user,
      password,
      login
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  background: url(../../assets/background.jpeg);
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 3rem;
    height: 2rem;
    background: #ccc;
    opacity: 0.5;
    .title {
      text-align: center;
      font-size: .2rem;
      margin-top: .12rem;
      margin-bottom: .2rem;
    }
    .form-item {
      display: flex;
      justify-content: center;
      margin-bottom: .12rem;
      label {
        width: .6rem;
      }
      input {
        border-radius: .03rem;
        width: 1.3rem;
        &:hover,&:focus {
          background: #fff;
        }
      }
    }
    .btn {
      display: block;
      padding: 0;
      width: .3rem;
      margin: 0 auto;
      color: #fff;
      &:active {
        background: rgb(48, 48, 48);
      }
    }
  }
}
</style>
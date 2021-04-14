<template>
  <section id="login">
    <form>
      <p class="title">后管登录</p>

      <div class="form-item">
        <label for="user">用户名</label>
        <input v-model="user" name="user" type="text">
      </div>
      <div class="form-item">
        <label for="user">密码</label>
        <input v-model="password" name="user" type="password">
      </div>

      <button>登录</button>
    </form>
  </section>
</template>

<script>
import { ref } from 'vue'
import { submit } from '@/api/posteriorCanal'
import { useRouter } from 'vue-router'


export default {
  setup() {
    const router = useRouter()
    const user = ref('admin')
    const password = ref('admin')

    const login = async () => {
      const res = await submit({ usr: user.value, pass: password.value })
      if (res.state == '00') {
        router.push('Index')
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
  }
}
</style>
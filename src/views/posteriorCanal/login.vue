<template>
  <section id="login">
    <form class="form">
      <label class="user" for="user">用户名
        <input v-model="usr" name="user" type="text" placeholder="用户名">
      </label>
      <label class="password" for="password">密码
        <input v-model="pass" name="password" type="text">
      </label>

      <button @click="login">登录</button>
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
    let usr = ref('admin')
    let pass = ref('admin')

    const login = async () => {
      const res = await submit({ usr, pass })
      if (res.state == '00') {
        router.push('Index')
      }
    }

    return {
      usr,
      pass,
      login
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  background: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20%;
  height: 2.5rem;
  justify-content: center;
  input {
    border: 1px solid rgb(182, 182, 182);
  }
  button {
    width: 0.5rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.15rem;
    border: 1px solid rgb(116, 116, 116);
    margin-top: 2px;
  }
}
</style>
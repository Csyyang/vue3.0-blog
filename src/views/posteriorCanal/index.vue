<template>
  <section id="index">

    <form>
      <div class="form-item">
        <label for="title">标题</label>
        <input v-model="form.title" id="title" type="text">
      </div>
      <div class="form-item">
        <label for="type">类型</label>
        <select v-model="form.type" id="type">
          <option value=""></option>
          <option value="0">技术杂谈</option>
          <option value="1">游戏杂谈</option>
        </select>
      </div>
      <div class="form-item">
        <label for="context">预览</label>
        <markdown :context="form.context" />
      </div>
      <div class="form-item">
        <label for="edit">编辑</label>
        <div class="edit-box">
          <textarea v-model="form.context" name="edit" id="edit"></textarea>

        </div>
      </div>
      <div class="form-item">
        <label for="file">展示图片</label>
        <input @change="changeFile" type="file">
      </div>
      <img v-if="url" class="preview" :src="url">
    </form>

    <button @click="upload">上传</button>
    <!-- <loading /> -->
  </section>
</template>

<script>
import tips from '@/plugin/tips/index'
import markdown from "@/components/markdown";
import { ref } from 'vue'
import { updateArticl } from '@/api/posteriorCanal'

export default {
  components: {
    markdown,
  },
  setup() {
    const data = () => {
      return {
      title: '',
      type: '',
      context: '',
      file: ''
    }
    }
    const test = ref('23333')
    const url = ref('')
    let file;


    const form = ref(data())

    const change = () => {
      test.value = '111111'
    }

    const changeFile = (val) => {
      file = val.target.files[0]
      url.value = URL.createObjectURL(val.target.files[0])

    }

    const upload = () => {
      const files = new FormData()
      files.append('file', file)
      files.append('title', form.value.title)
      files.append('type', form.value.type)
      files.append('context', form.value.context)

      updateArticl(files).then(res => {
        if (res.code === '00') {
          tips.serve('上传成功', 'success')
          form.value = data()
        }
      })
    }
    

    return {
      test,
      change,
      form,
      changeFile,
      url,
      upload
    }
  }


};
</script>
<style lang="scss" scoped>
#index {
  padding: 0.2rem 0.16rem;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;
  background: url(../../assets/bg2.jpeg);
  background-size: cover;
  color: black;
  .form-item {
    margin-bottom: 0.12rem;
    label {
      width: 0.6rem;
    }
    input {
      border-radius: 0.03rem;
      border: 1px solid #ccc;
      border-radius: 0.06rem;
      width: 1.3rem;
      &:hover,
      &:focus {
        background: #fff;
      }
    }
    .edit-box {
      padding: 0.08rem;
      textarea {
        box-sizing: border-box;
        overflow-x: auto;
        white-space: nowrap;
        width: 100%;
        height: 3rem;
        resize: none;
        padding: 0.09rem;
      }
      .btn {
        padding: 0.12rem 0.2rem;
        &:active {
          background: rgb(224, 224, 224);
        }
      }
    }
  }
  .preview {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }
}
</style>
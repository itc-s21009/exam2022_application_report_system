<template>
  <div class="display-4">ログイン</div>
  <div class="col-8 mb-2">
    <label for="student_code">学籍番号</label>
    <input type="text" name="student_code" id="student_code" class="form-control" v-model="studentCode">
  </div>
  <button @click="login" class="btn btn-dark">ログイン</button>
</template>

<script setup lang='ts'>
import axios from "axios";
import {ref} from "vue";

const studentCode = ref('')

const login = async () => {
  // const res = await axios.get('/api')
  const res = await axios.post('/api', {studentCode: studentCode.value})
  console.log(res.data)
}
</script>

<style scoped>

</style>
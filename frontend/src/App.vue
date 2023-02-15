<script setup lang="ts">
</script>

<template>
  <!--  header-->
  <header class="row">
    <div class="col-9 position-relative">
      <h1 class="display-2 my-2 text text-primary">届け出・申請システム</h1>
    </div>
    <hr class="my-2 p-0">
  </header>

  <main class="row">
    <!--    left-->
    <div class="col-2">
      左側になにか置く
    </div>
    <!--    center-->
    <div class="col-8">
      <RouterView/>
    </div>
    <!--    right-->
    <div class="col-2">
      右側になにか置く
    </div>
  </main>

  <footer>
    <div class="m-4">&nbsp;</div>
    <div class="fixed-bottom bg-primary p-2">
      <div class="text-center">copyright &copy; 2023 Asahi Kiyuna</div>
    </div>
  </footer>
</template>

<style scoped>
</style>

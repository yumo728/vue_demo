<template>
  <div>
    <HelloWorld/>
    <img src="./assets/logo.png" alt="logo" class="logo">
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld' //先引入
    export default {
        components:{  //再映射
          HelloWorld
        }
    }
</script>

<style scoped>
  .logo{
    width: 100px;
    height: 100px;
  }
</style>

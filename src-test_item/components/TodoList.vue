<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :deleteTodo="deleteTodo" :index="index"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
  export default {
    //声明接收标签属性
    props:['todos','deleteTodo'], // 会成为当前组件中对象的属性，可以在模板中直接访问，可以通过this访问
    components:{
      TodoItem
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>

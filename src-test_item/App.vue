<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter />
    </div>
  </div>
</template>
<!--
1.先引入组件
2.在映射到组件
3.添加标签
-->
<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    data(){
      return{
        todos:[
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:false},
          {title:'散步',complete:true}
        ]
      }
    },
    methods:{
      //添加
      addTodo(todo){
        this.todos.unshift(todo)
      },
      //删除
      deleteTodo(index){
        this.todos.splice(index,1)
      },
    },

    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

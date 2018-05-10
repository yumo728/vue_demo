<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
    export default {
      components:{
        TodoHeader,
        TodoList,
        TodoFooter
      },
      data () {
        return{
          todos:[
            {title:'吃饭',complete:false},
            {title:'睡觉',complete:true},
            {title:'学习',complete:false}
          ],
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
        //删除(过滤)已经完成的
        deleteCompleteTodos(){
          this.todos = this.todos.filter(todo => !todo.complete)  //默认值为false
        },
        //全选/全不选
        selectAll(isSelectAll){
          this.todos.forEach(todo=>{
            todo.complete = isSelectAll
          })
        }
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

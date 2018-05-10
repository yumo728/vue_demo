<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
    </div>
  </div>
</template>
<!--
  1.先引入组件
  2.再映射组件标签
  3.添加组件标签
-->
<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import storageUtils from './utils/storageUtils'
  export default {
    data(){
      return{
        //将json数据解析成js的数组，如果没值为空数组，解析对象为string类型
        //读取localStorage保存的数据
        //todos:JSON.parse(localStorage.getItem('todos_key') || '[]')
        todos:storageUtils.readTodos()
      }
    },

    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
    watch:{
      todos:{
        deep:true, //深度监视
        /*handler:function (val) {
          //将数据（json）保存到localStorage
          //localStorage.setItem('todos_key',JSON.stringify(val))
          storageUtils.savaTodos(val)
        }*/
        //handler的值应该是一个函数，且函数应该要有一个形参（接收todos最新的值）
        handler:storageUtils.savaTodos
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
      //删除已经完成的
      deleteCompleteTodos(){
        this.todos = this.todos.filter(todo=>!todo.complete) //默认值为false，现在表示已完成的
      },
      //全选/全部选
      selectAll(isSelectAll){
        this.todos.forEach(todos=>{
          todos.complete = isSelectAll
        })
      }
    }
  }
</script>

<style scoped>

</style>

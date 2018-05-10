<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="inputTodo"/>
  </div>
</template>

<script>
  export default {
    props:{
      addTodo:{ //指定属性名，属性值的类型，必要性
        type:Function,
        required:true
      }
    },
    data(){
      return{
        inputTodo:''
      }
    },

    methods:{
      add(){
        //得到输入数据
        const inputTodo = this.inputTodo.trim()
        //检查合法性
        if(!inputTodo){
          alert('请输入合法的内容')
          return
        }
        //封装一个todo对象
        const todo = {
          title: inputTodo,
          complete:false
        }
        //添加到todos对象
        this.addTodo(todo)
        //清除输入
        this.inputTodo = ''
      }
    }
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>

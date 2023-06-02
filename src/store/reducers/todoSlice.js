import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: [],
  reducers: {
    intiateTodos:(state,action) =>{
      const temp = JSON.parse(localStorage.getItem('DecentTodo'))
      if(temp===null){
        localStorage.setItem('DecentTodo',JSON.stringify([]))
      }
      return temp?temp:[]
    },
    addTodoList:(state,action)=>{
      const temp = [...state]
      temp.push(action.payload)
      localStorage.setItem('DecentTodo',JSON.stringify(temp))
      return state = temp
    },
    addTodo:(state,action)=>{
      const temp = [...state]
      temp.forEach(todoList=>{
        if(todoList.id===action.payload.id){
          todoList.todos.push(action.payload.todo)
        }
      })
      localStorage.setItem('DecentTodo',JSON.stringify(temp))
    },
    updateTodo:(state,action)=>{
      if(action.payload.updatedTodo.title!==""){
        state[action.payload.todoListIndex].todos[action.payload.todoIndex].title=action.payload.updatedTodo.title
      }
      if(action.payload.updatedTodo.desc!==""){
        state[action.payload.todoListIndex].todos[action.payload.todoIndex].desc=action.payload.updatedTodo.desc
      }
      if(action.payload.updatedTodo.desc!=="" && action.payload.updatedTodo.title!==""){
        localStorage.setItem('DecentTodo',JSON.stringify(state))
      }
    },
    deleteTodo:(state,action)=>{
      state[action.payload.todoListIndex].todos = state[action.payload.todoListIndex].todos.filter((todo,index)=>index!==action.payload.todoIndex)
      localStorage.setItem('DecentTodo',JSON.stringify(state))
      return state
    },
    deleteTodoList:(state,action)=>{
      state = state.filter((todoList,index)=>index!==action.payload.todoListIndex)
      localStorage.setItem('DecentTodo',JSON.stringify(state))
      return state
    },

  },
});

export const { intiateTodos,addTodoList,addTodo ,updateTodo,deleteTodo,deleteTodoList} = todoSlice.actions;
export default todoSlice.reducer;

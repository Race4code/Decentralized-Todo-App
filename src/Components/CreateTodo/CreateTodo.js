import React, { useRef, useState } from 'react'
import './CreateTodo.css'
import addbtn from '../../Assets/plus.svg'
import { useDispatch,useSelector } from 'react-redux'
import{addTodoList} from '../../store/reducers/todoSlice'
import { toast } from 'react-toastify';

const CreateTodo = () => {
  const [todoListName,setTodoListName] = useState("")
  const todosDataList = useSelector(state=>state.todoSlice)
  const dispatch = useDispatch()
  const handleAddTodoList = ()=>{
    if(/^\s*$/.test(todoListName)){
      toast.warn('Please Enter some valid TodoListName!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark",
        });
      return
   }
   let isExist=false
    todosDataList?.forEach((todoList)=>{
      if(todoList.id===todoListName){
        setTodoListName("")
        isExist=true
        toast.error('TodoList Name Already Exists!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          });
      }
    })
    if(!isExist){
      dispatch(addTodoList({id:todoListName,todos:[]}))
      setTodoListName("")
      toast.success('Great New TodoList Created!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }
  return (
    <div className='create-todo-list-container'> 
      <input 
        className="input-todo-list-name" 
        type="text" 
        placeholder='Add Todo-List' 
        maxLength={30}
        value={todoListName}
        onChange={(e)=>setTodoListName(e.target.value)}
      />
      <button className='add-todo-list-btn' onClick={handleAddTodoList}><img src={addbtn} alt="add-btn"/></button>
    </div>
  )
}

export default CreateTodo

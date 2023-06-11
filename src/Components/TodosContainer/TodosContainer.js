import React, { useEffect, useState } from 'react'
import './TodosContainer.css'
import CreateTodo from '../CreateTodo/CreateTodo'
import TodoList from '../TodoList/TodoList'
import EditTodo from '../EditTodo/EditTodo'
import { useDispatch,useSelector } from 'react-redux'
import {intiateTodos} from '../../store/reducers/todoSlice'

const TodosContainer = () => {
  const [isEdit,setIsEdit] = useState(false)
  
  const dispatch = useDispatch()
  const todosDataList = useSelector(state=>state.todoSlice)

  useEffect(()=>{
    dispatch(intiateTodos())
  },[])
  
  return (
    <div className='todoListContainer'>
      <div className='todo-list-and-todos-container'>
          <div className="individual-todos-list-container">
          {
            todosDataList?.map((todolist,index)=>{
              return <TodoList 
                        key={todolist.id+index} 
                        todosList={todolist} 
                        isEdit={isEdit} 
                        setIsEdit={setIsEdit} 
                        todoListIndex={index}
                      />
            })
          }
          </div>
        <div>
        <CreateTodo />
        </div>
      </div>
      <EditTodo 
        setIsEdit={setIsEdit} 
        isEdit={isEdit} 
      />
    </div>
  )
}

export default TodosContainer
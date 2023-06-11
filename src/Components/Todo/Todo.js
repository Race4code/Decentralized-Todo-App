import React, { useState } from 'react'
import oval from '../../Assets/oval.svg'
import edit from '../../Assets/edit.svg'
import './Todo.css'
import { useDispatch,useSelector } from 'react-redux'
import { loadEditBox } from '../../store/reducers/editSlice'
import Footer from '../Footer/Footer'

const Todo = ({todo,setIsEdit,todoListId,todoListIndex,todoIndex}) => {
  
  const dispatch = useDispatch()
  const {todoId} = useSelector(state=>state.editSlice)

  const handleEdit = ()=>{
    setIsEdit(true)
    const temp={...todo,todoListId:todoListId}
    dispatch(loadEditBox({editTodo:temp,todoListIndex,todoIndex:todoIndex,todoId:todo.id}))
  }

  return (
    <div className={`todo-container`}>
      {todoId===todo.id && <div className='borderForEditTodo'></div>}
      <div className='todo-top-section'>
        <div className='todo-name-section'>
        <img src={oval} alt="oval"/>
        <p style={{width:"100%"}}>{todo.title}</p>
        </div>
        <img className='edit-todo-btn' src={edit} alt='edit' onClick={handleEdit}/>
      </div>
      <div className='todo-description'>
        {todo.desc}
      </div>
      <Footer />
    </div>
  )
}

export default Todo

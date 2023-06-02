import React, { useEffect, useState } from 'react'
import './EditTodo.css'
import close from '../../Assets/close.svg'
import { useDispatch ,useSelector} from 'react-redux'
import {updateTodo,deleteTodo} from '../../store/reducers/todoSlice'
import dlete from '../../Assets/delete.png'
import { unLoadEditBox } from '../../store/reducers/editSlice'
import { toast } from 'react-toastify';
import DeleteModal from '../Modal/DeleteModal'
const EditTodo = ({setIsEdit,isEdit}) => {

  const {editTodo,todoListIndex,todoIndex} = useSelector(state=>state.editSlice)
  const dispatch = useDispatch()

  const [modalIsOpen, setIsOpen] = useState(false)
  const [updatedTodoTitle,setUpdatedTitle] = useState("")
  const [updatedTodoDesc,setUpdatedDes] = useState("")

  useEffect(()=>{
    setUpdatedDes(editTodo.desc)
    setUpdatedTitle(editTodo.title)
  },[editTodo])

  const handleCloseEditBox = ()=>{
    setIsEdit(false)
    setUpdatedDes("")
    setUpdatedTitle("")
    dispatch(unLoadEditBox())
  }

  const handleWarning=()=>{
    setIsOpen(true)
  }
  
  const handleDeleteTodo=()=>{
    setIsEdit(false)
    dispatch(deleteTodo({todoListIndex:todoListIndex,todoIndex:todoIndex}))
    setUpdatedDes("")
    setUpdatedTitle("")
    dispatch(unLoadEditBox())
    toast.success('Todo Delete Successfully!', {
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

  const handleSaveTodo=()=>{
    setIsEdit(false)
    let temp = {...editTodo}
    temp.title = updatedTodoTitle
    temp.desc = updatedTodoDesc
    dispatch(updateTodo({todoListIndex:todoListIndex,todoIndex:todoIndex,updatedTodo:temp}))
    setUpdatedDes("")
    setUpdatedTitle("")
    dispatch(unLoadEditBox())
    if(/^\s*$/.test(updatedTodoTitle) || /^\s*$/.test(updatedTodoDesc)){
      toast.warn(`Update Unsuccessful ${/^\s*$/.test(updatedTodoTitle)?'TodoName':"Todo Description"} can't be Empty`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          });
    }else{
      toast.success('Todo Updated Successfully!', {
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
     <div className={`drawer ${isEdit?"open expand":"shrinkToZero"}`}>
        <div className='edit-todo-top'>
            <img src={close} alt="back" onClick={handleCloseEditBox}/>
            <p>Edit Todo</p>
            <img
              className='delete-todo-icon-btn' 
              src={dlete} 
              alt="delete" 
              style={{width:"20px",height:"20px",marginLeft:"115px"}}
              onClick={handleWarning}
            />
        </div>
        <input type="text" placeholder='Todo' value={updatedTodoTitle} onChange={(e)=>setUpdatedTitle(e.target.value)}/>
        <textarea placeholder='description' maxLength={100} value={updatedTodoDesc} onChange={(e)=>setUpdatedDes(e.target.value)}/>
        <button onClick={handleSaveTodo}>Save</button>
        {modalIsOpen && <DeleteModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} handleDelete={handleDeleteTodo}/>}
    </div>
  )
}

export default EditTodo

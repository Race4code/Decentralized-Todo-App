import React, { useState } from 'react'
import './TodoList.css'
import Todo from '../Todo/Todo'
import oval from '../../Assets/oval.svg'
import addbtn from '../../Assets/plus.svg'
import { useDispatch } from 'react-redux'
import {addTodo} from '../../store/reducers/todoSlice'
import {v4 as uid} from 'uuid'
import { toast } from 'react-toastify';
import deleteIcon from '../../Assets/delete.png'
import DeleteModal from '../Modal/DeleteModal'
import { deleteTodoList } from '../../store/reducers/todoSlice'


const TodoList = ({todosList,isEdit,setIsEdit,todoListIndex}) => {

    const [todoName,setTodoName] = useState("")
    const [todoDesc,setTodoDesc] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()
    
    const handleAddTodo = () =>{
        if(/^\s*$/.test(todoName) || /^\s*$/.test(todoDesc)){
            toast.warn(`Please Enter some valid  ${/^\s*$/.test(todoName)?'TodoName':"Todo Description"}`, {
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
        dispatch(addTodo({id:todosList.id,todo:
            {
                id:uid(),
                title:todoName,
                desc:todoDesc,
                isDone:false,
            }}))
        setTodoDesc("")
        setTodoName("")
        toast.success('Wow Great Todo Added!', {
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

    const handleDeleteTodoList = ()=>{
        dispatch(deleteTodoList({todoListIndex:todoListIndex}))
    }

    const handleWarning=()=>{
        setIsOpen(true)
      }

  return (
    <div className='todo-list-container'>
        <div className='todo-list-name'>
            <p>List: {todosList.id}</p>
            <img 
              src={deleteIcon} 
              alt="delete" 
              style={{width:"20px",height:"20px"}}
              onClick={handleWarning}
            />
        </div>
        <div className='create-todo-container'>
            <div className='todo-top-section'>
                <div className='todo-name-section'>
                    <img src={oval} alt="oval"/>
                    <input type="text" placeholder='Add Todo'value={todoName} maxLength={50} onChange={(e)=>setTodoName(e.target.value)} />
                </div>
                <img className="add-todo-btn" src={addbtn} alt='edit' onClick={handleAddTodo}/>
            </div>
            <div className='todo-description'>
                <textarea type="text" placeholder='Add Todo Description' maxLength={100} value={todoDesc} onChange={(e)=>setTodoDesc(e.target.value)}/>
            </div>
        </div>
        <div className='todo-list-div' style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        {
            todosList.todos?.map((todo,index)=>{
                return <Todo 
                            key={todo.id} 
                            todo={todo}  
                            setIsEdit={setIsEdit}
                            todoListId={todosList.id} 
                            todoListIndex={todoListIndex} 
                            todoIndex={index}
                        />
            })
        }
        </div>
        {modalIsOpen && <DeleteModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} handleDelete={handleDeleteTodoList} />}
    </div>
  )
}

export default TodoList

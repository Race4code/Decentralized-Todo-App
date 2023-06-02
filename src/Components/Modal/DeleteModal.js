import React,{useState} from 'react'
import Modal from 'react-modal';
import './DeleteModal.css'
const customStyles = {
    content: {
      width:'30%',
      minWidth:"300px",
      backgroundColor:"black",
      borderRadius:"30px",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const DeleteModal = ({modalIsOpen,setIsOpen,handleDelete}) => {

  function closeModal() {
    setIsOpen(false);
  }
  function deleteTodo(){
    setIsOpen(false);
    handleDelete()
  }

  return (
   <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div className='warning-modal-container'>
            <div className='warning-top-bar'
            >
                <button 
                    onClick={closeModal}
                    className='cross-close-modal'
                >X</button>
            </div>
            <h1 style={{color:"red",textAlign:"center"}}>!! Warning !!</h1>
            <div
              style={{marginTop:"20px"}}
            >
                <h3 style={{color:"white",textAlign:"center"}}>Note : Once Delete Never Recovered</h3>
                <div
                  style={{
                    marginTop:"50px",
                    display:"flex",
                    justifyContent:"space-evenly"

                  }}
                >
                    <button 
                        className='modal-delete-btn'
                        onClick={deleteTodo}
                    >Delete</button>
                    <button 
                       className='modal-close-btn'
                       onClick={closeModal}
                    > Back</button>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteModal

import React, { useState } from 'react'
import './Main.css'
import TodosContainer from '../TodosContainer/TodosContainer'
import wallet from '../../Assets/Wallet.svg'
import menu from '../../Assets/menu.png'
import close from '../../Assets/close.png'
import MenuBar from '../Sidebar/MenuBar'

const Main = () => {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className='main-section-container'>
      <div className='main-section-navbar'>
        <div style={{display:"flex",gap:"30px",alignItems:"center"}}>
          <div className='hamburger-icon' onClick={()=>setOpenMenu(!openMenu)}>
              <img src={openMenu?close:menu} alt="icon" style={{width:"25px",height:"25px"}}/>
          </div>
          <p className='section'>Section</p>
        </div>
        <MenuBar isOpen={openMenu}/>
        <div className='wallet-container'>
          <img src={wallet} alt="wallet"/>
          <p>0.2 $XYZ</p>
          <p>Tier 1</p>
        </div>
      </div>
      <TodosContainer />
    </div>
  )
}

export default Main

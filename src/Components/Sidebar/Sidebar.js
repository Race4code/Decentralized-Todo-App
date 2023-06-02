import React, { useState } from 'react'
import './Sidebar.css'
import shareWhite from '../../Assets/shareWhite.png'
import shareGrey from '../../Assets/shareGrey.png'
import globe from '../../Assets/globe.svg'
import Dark from '../../Assets/Darktoggle.svg'
import homeWhite from '../../Assets/homeWhite.png'
import homeGrey from '../../Assets/homeGrey.png'
import statWhite from '../../Assets/statWhite.png'
import statGrey from '../../Assets/statGrey.png'
import candleWhite from '../../Assets/candleWhite.png'
import candleGrey from '../../Assets/candleGrey.png'
import contractIcon from '../../Assets/contract-icon.svg'
import { useDispatch,useSelector } from 'react-redux'
import { setIsHovered,setSelected } from '../../store/reducers/menuSlice'
import darkBlue from '../../Assets/darkblue.png'
import darkGrey from '../../Assets/darkGrey.png'
import lightBlue from '../../Assets/lightBlue.png'
import lightGrey from '../../Assets/lightGrey.png'
import { handleDarkMode } from '../../store/reducers/darkModeSlice'

const Sidebar = () => {

  const [openSideBar ,setOpenSideBar] = useState(true)
  
  const {isDarkModeOn} = useSelector(state=>state.darkModeSlice)
  const {selected,isHovered} = useSelector((state)=>state.menuSlice)
  const dispatch = useDispatch()


  const handleIsHovered=(value)=>{
    dispatch(setIsHovered(value))
  }

  const handleSelected=(value)=>{
    dispatch(setSelected(value))
  }

  const user = {
    name:"Name",
    balance:0.90,
  }

  return (
    <div className={` ${openSideBar?"expanded-sidebar-container":"compact-sidebar-container"}`}>
      <div className={`sidebar-top ${!openSideBar?"compact-sidebar-top":""}`}>
        <div className='user-name-container'>
          <div className='name-initial'>{user.name.slice(0,1).toLocaleUpperCase()}</div>
          { openSideBar && <div className='user-name'><h1>{user.name}</h1></div>}
        </div>
        {<div className={`contract-icon ${!openSideBar?"rotateIcon":"reverseRotate"}`}  onClick={()=>setOpenSideBar(!openSideBar)}><img src={contractIcon} alt="close"/></div>}
      </div>
      <div className='sidebar-nav'>
        <div 
           className='home-btn nav-btn' 
           onMouseEnter={()=>handleIsHovered(0)} 
           onMouseLeave={()=>handleIsHovered(-1)}
           onClick={()=>handleSelected(0)}
           style={{backgroundColor:(isHovered===0 || selected===0)?"#353945":"transparent",width:!openSideBar?"fit-content":"100%"}}
         >
           <img 
             src={(isHovered===0 || selected===0)?homeWhite:homeGrey}
             alt="home"
             style={{width:"20px",height:"20px"}}
           />
           <p 
             style={{display:openSideBar?"block":"none",color:(isHovered===0 || selected===0)?"white":"grey"}}
           >
             Home
           </p>          
         </div>

         <div 
           className='home-btn nav-btn' 
           onMouseEnter={()=>handleIsHovered(1)} 
           onMouseLeave={()=>handleIsHovered(-1)}
           onClick={()=>handleSelected(1)}
           style={{backgroundColor:(isHovered===1 || selected===1)?"#353945":"transparent",width:!openSideBar?"fit-content":"100%"}}
         >
           <img 
             src={(isHovered===1 || selected===1)?statWhite:statGrey}
             alt="home"
             style={{width:"20px",height:"20px"}}
           />
           <p 
             style={{display:openSideBar?"block":"none",color:(isHovered===1 || selected===1)?"white":"grey"}}
           >
             Section 1
           </p>          
         </div>
         <div 
           className='home-btn nav-btn' 
           onMouseEnter={()=>handleIsHovered(2)} 
           onMouseLeave={()=>handleIsHovered(-1)}
           onClick={()=>handleSelected(2)}
           style={{backgroundColor:(isHovered===2 || selected===2)?"#353945":"transparent",width:!openSideBar?"fit-content":"100%"}}
         >
           <img 
             src={(isHovered===2 || selected===2)?candleWhite:candleGrey}
             alt="home"
             style={{width:"20px",height:"20px"}}
           />
           <p 
             style={{display:openSideBar?"block":"none",color:(isHovered===2 || selected===2)?"white":"grey"}}
           >
             Section 2
           </p>          
         </div>
         <div 
           className='home-btn nav-btn' 
           onMouseEnter={()=>handleIsHovered(3)} 
           onMouseLeave={()=>handleIsHovered(-1)}
           onClick={()=>handleSelected(3)}
           style={{backgroundColor:(isHovered===3 || selected===3)?"#353945":"transparent",width:!openSideBar?"fit-content":"100%"}}
         >
           <img 
             src={(isHovered===3 || selected===3)?shareWhite:shareGrey}
             alt="home"
             style={{width:"20px",height:"20px"}}
           />
           <p 
             style={{display:openSideBar?"block":"none",color:(isHovered===3 || selected===3)?"white":"grey"}}
           >
             Section 3
           </p>          
         </div>
         <div 
           className='home-btn nav-btn' 
           onMouseEnter={()=>handleIsHovered(4)} 
           onMouseLeave={()=>handleIsHovered(-1)}
           onClick={()=>handleSelected(4)}
           style={{backgroundColor:(isHovered===4 || selected===4)?"#353945":"transparent",width:!openSideBar?"fit-content":"100%"}}
         >
           <img 
             src={(isHovered===4 || selected===4)?shareWhite:shareGrey}
             alt="home"
             style={{width:"20px",height:"20px"}}
           />
           <p 
             style={{display:openSideBar?"block":"none",color:(isHovered===4 || selected===4)?"white":"grey"}}
           >
             Section 4
           </p>          
         </div>
      </div>
      {openSideBar &&
      <div className='sidebar-bottom'>
        <div className='balance-details'>
          <div className='user-balance'>
            <p className='small-user-initial'>{user.name.slice(0,1).toLocaleUpperCase()}</p>
            <p>{`$${user.balance}`}</p>
          </div>
          <div className='buy-btn'>
            <p>Buy $XYZ</p>
          </div>
        </div>
        <div className='language dark-mode-toggle'>
          <img src={globe} alt='language'/>
            {
              isDarkModeOn?
              <div
                style={{
                  // border:"2px solid #808191",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  backgroundColor:"#353945",
                  gap:"10px",
                  borderRadius:"25px",
                  padding:"3px 5px"
                }}
              >
                <img src={lightGrey} alt="" style={{cursor:"pointer",width:"25px",height:"25px"}} onClick={()=>dispatch(handleDarkMode(false))} />
                <img src={darkBlue} alt="" style={{cursor:"pointer",width:"20px",height:"20px"}}  onClick={()=>dispatch(handleDarkMode(true))} />
              </div>
              :
              <div 
                style={{
                  // border:"2px solid #808191",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  backgroundColor:"#353945",
                  gap:"10px",
                  borderRadius:"25px",
                  padding:"3px 5px"
                }}
              >
              <img src={lightBlue} alt="" style={{cursor:"pointer",width:"25px",height:"25px"}}  onClick={()=>dispatch(handleDarkMode(false))}/>
              <img src={darkGrey} alt="" style={{cursor:"pointer",width:"20px",height:"20px"}} onClick={()=>dispatch(handleDarkMode(true))}/>
            </div>
            }
          {/* <img src={Dark} alt="toggle"/> */}
        </div>
      </div>
      }   
    </div>
  )
}

export default Sidebar

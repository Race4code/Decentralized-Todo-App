import React from 'react'
import './Home.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import Main from '../Components/Main/Main'
import { useSelector } from 'react-redux'
const Home = () => {
  const {isDarkModeOn} = useSelector(state=>state.darkModeSlice)
  return (
    <div className="home-page-container">
      <div className='header-section'></div>
      <div className='hero-section-container'>
        <Sidebar />
        <Main />
      </div>
   </div>
  )
}

export default Home

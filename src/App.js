import React from 'react'
import Home from './Page/Home'
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Provider store={store}>
      <Home/>
      <ToastContainer/>
    </Provider>  
  )
}

export default App

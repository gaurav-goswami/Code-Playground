import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import CreatePlayground from './Pages/CreatePlayground'
import Auth from './Pages/Auth/Auth'
// import Register from './Pages/Auth/Register'
// import Login from './Pages/Auth/Login'

const App : React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/create-playground' element={<CreatePlayground />}/>
          {/* <Route path='/auth/signup' element={<Register />}/>
          <Route path='/auth/signin' element={<Login />}/> */}

          <Route path='/auth' element={<Auth />}/>

          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

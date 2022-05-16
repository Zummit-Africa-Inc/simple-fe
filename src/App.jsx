import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CreateOrganization, Home, Login, SingleApi, User } from './pages'
import { Navbar } from './components'

const App = () => {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/api/:id' element={<SingleApi />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/create-organization' element={<CreateOrganization />} />
    </Routes>
    </>
  )
}

export default App
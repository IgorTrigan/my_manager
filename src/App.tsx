import React, { useState } from 'react'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layouts/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App

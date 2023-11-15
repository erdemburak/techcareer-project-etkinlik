import React from 'react'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from '../adminPanel/AdminPanel'


function Content() {
  return (<>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>


  </>)
}

export default Content
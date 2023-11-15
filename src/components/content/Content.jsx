import React from 'react'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from '../adminPanel/AdminPanel'
import CreateEtkinlik from '../adminPanel/adminPages/CreateEtkinlik'
import AdminMainPage from '../adminPanel/adminPages/AdminMainPage'


function Content() {
  return (<>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminPanel />} >
        <Route path="dashboard" element={<AdminMainPage />} />
        <Route path="create" element={<CreateEtkinlik />} />
      </Route>
    </Routes>


  </>)
}

export default Content
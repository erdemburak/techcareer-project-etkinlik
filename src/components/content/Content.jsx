import React from 'react'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import CreateEtkinlik from '../adminPanel/adminPages/CreateEtkinlik'
import AdminMainPage from '../adminPanel/adminPages/AdminMainPage'
import EtkinlikDetail from './pages/EtkinlikDetail'
import EskiEtkinlikler from './pages/EskiEtkinlikler'


function Content() {
  return (<>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/eskiEtkinlikler" element={<EskiEtkinlikler />} />
      <Route path="/etkinlik/:id" element={<EtkinlikDetail />} />
      <Route path="/admin" element={<AdminMainPage />} />
      <Route path="/admin/create" element={<CreateEtkinlik />} />
    </Routes>


  </>)
}

export default Content
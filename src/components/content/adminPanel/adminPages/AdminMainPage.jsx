import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CreateEtkinlik from './CreateEtkinlik'
import UpdateEtkinlik from './UpdateEtkinlik'

function AdminMainPage() {
    return (<>
        <Routes>
            <Route path="/admin/create" element={<CreateEtkinlik />} />
            <Route path="/admin/update" element={<UpdateEtkinlik />} />
        </Routes>

    </>)
}

export default AdminMainPage
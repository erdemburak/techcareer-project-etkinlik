import React from 'react'
import './js/scripts.js'
import './css/styles.css'
import AdminSideBar from './adminPages/AdminSideBar.jsx'
import AdminMainPage from './adminPages/AdminMainPage.jsx'
import CreateEtkinlik from './adminPages/CreateEtkinlik.jsx'
import UpdateEtkinlik from './adminPages/UpdateEtkinlik.jsx'

function AdminPanel() {
  return (<>
    <div className="d-flex" id="wrapper">

      <AdminSideBar />

      <div style={{ margin: '5%' }}>
        <AdminMainPage />
        <CreateEtkinlik />
        {/* <UpdateEtkinlik /> */}
      </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </>
  )
}

export default AdminPanel
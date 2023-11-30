import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'

function AdminSideBar() {
    return (<>
        {/* Sidebar*/}
        <div className="border-end" id="sidebar-wrapper" style={{ backgroundColor: 'rgba(26, 58, 65, 0.7)', color: '#DED2D2' }}>
            <div className="sidebar-heading border-bottom">
                Project Etkinlik
            </div>
            <div className="list-group list-group-flush">
                <Link to={'/admin'} className="list-group-item list-group-item-action list-group-item-light p-3 sidebar-button">Dashboard</Link>
                <Link to={'/admin/create'} className="list-group-item list-group-item-action list-group-item-light p-3 sidebar-button">Create</Link>
            </div>
        </div>

    </>
    )
}

export default AdminSideBar
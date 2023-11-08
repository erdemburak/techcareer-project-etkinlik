import React from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar() {
    return (<>
        {/* Sidebar*/}
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">
                Project Etkinlik
            </div>
            <div className="list-group list-group-flush">

                <Link to='/admin' className="list-group-item list-group-item-action list-group-item-light p-3">Dashboard</Link>
                <Link to='/admin/create' className="list-group-item list-group-item-action list-group-item-light p-3">Create</Link>
                <Link to='/admin/update' className="list-group-item list-group-item-action list-group-item-light p-3">Update</Link>


            </div>
        </div>






    </>
    )
}

export default AdminSideBar
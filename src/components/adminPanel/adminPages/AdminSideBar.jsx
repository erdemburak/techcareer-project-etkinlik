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

                <Link to='dashboard' className="list-group-item list-group-item-action list-group-item-light p-3">Dashboard</Link>
                <Link to='create' className="list-group-item list-group-item-action list-group-item-light p-3">Create</Link>


            </div>
        </div>






    </>
    )
}

export default AdminSideBar
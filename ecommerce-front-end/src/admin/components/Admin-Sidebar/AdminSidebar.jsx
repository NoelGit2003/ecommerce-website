import React from 'react'
import './AdminSidebar.css'

const AdminSidebar = () => {
    return (
        <div className="admin-main">
            <div className="admin-sidebar">
                <h4 className="admin-sidebar-head"> Admin Dashboard</h4>
                <hr />
                <ul className='admin-sidebar-list'>
                    <li className='admin-sider-list-item'> Users </li>
                    <li className='admin-sider-list-item'> Products </li>
                    <li className='admin-sider-list-item'> Categories </li>
                    <li className='admin-sider-list-item'> Client Home </li>
                    <li className='admin-sider-list-item'> Orders </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar
import React from 'react'
import { NavLink } from 'react-router-dom'
import './AdminSidebar.css'

const AdminSidebar = () => {
    return (
        <div className="admin-main">
            <div className="admin-sidebar">
                <h4 className="admin-sidebar-head"> Admin Dashboard</h4>
                <hr />
                <ul className='admin-sidebar-list'>
                    <NavLink to='/admin' style={{ textDecoration: 'none', color: '#2e3236' }}>
                        <li className='admin-sider-list-item'> Users </li>
                    </NavLink>
                    <NavLink to='/admin/products' style={{ textDecoration: 'none', color: '#2e3236' }}>
                        <li className='admin-sider-list-item'> Products </li>
                    </NavLink>
                    <NavLink to='/admin/Categories' style={{ textDecoration: 'none', color: '#2e3236' }}>
                        <li className='admin-sider-list-item'> Categories </li>
                    </NavLink>
                    <li className='admin-sider-list-item'> Client Home </li>
                    <li className='admin-sider-list-item'> Orders </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar
import React from 'react'

import './Dashboard.css'

const Dashboard = () => {
    return (
        <section className="admin-dashboard">
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
                <div className="admin-content">
                    <div className="admin-content-head">
                        <h1>Client-Users</h1>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Dashboard
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AdminSidebar from '../Admin-Sidebar/AdminSidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/admin')
            .then(res => {
                console.log('Fetched users:', res.data);
                setUsers(res.data);
            })
            .catch(err => console.error('Error fetching users:', err));
    }, []);

    const roleChange = (email) => {
        console.log('Changing role for:', email);
        axios.put('http://localhost:3000/admin/changeRole', { email })
            .then(res => {
                console.log('Role change response:', res.data);
                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user.email === email ? { ...user, isAdmin: res.data.isAdmin } : user
                    )
                );
            })
            .catch(err => console.error('Error changing role:', err));
    };

    const userBlock = (email) => {
        console.log('Blocking user:', email);
        axios.put('http://localhost:3000/admin/blockUser', { email })
            .then(res => {
                console.log('Block user response:', res.data);
                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user.email === email ? { ...user, isBlocked: res.data.isBlocked } : user
                    )
                );
            })
            .catch(err => console.error('Error blocking user:', err));
    };

    return (
        <section className="admin-dashboard">
            <div className="admin-dash-main">
                <AdminSidebar />
                <div className="admin-content">
                    <div className="admin-content-head">
                        <h1>All-Users</h1>
                    </div>
                    <table className="admin-content-body">
                        <thead>
                            <tr className="admin-table-head">
                                <th>
                                    <h5>Users</h5>
                                </th>
                                <th>
                                    <h5>E-mail</h5>
                                </th>
                                <th>
                                    <h5>Change Role</h5>
                                </th>
                                <th>
                                    <h5>Block User</h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>
                                        <div>{user.name}</div>
                                    </td>
                                    <td>
                                        <div>{user.email}</div>
                                    </td>
                                    <td>
                                        <div onClick={() => roleChange(user.email)}>
                                            {user.isAdmin ? (
                                                <div className='btn btn-primary'>
                                                    Admin
                                                </div>
                                            ) : (
                                                <div className='btn btn-light admin-role-btn'>
                                                    User
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => userBlock(user.email)}>
                                            {user.isBlocked ? (
                                                <div className='btn btn-secondary'>Blocked</div>
                                            ) : (
                                                <div className='btn btn-light'>Active</div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
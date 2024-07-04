import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import axios from 'axios'

import Sidebar from '../Sidebar/Sidebar'
import { userContext } from '../../../../App'
import './MobileSidebar.css'


const MobileSidebar = () => {
    const user = useContext(userContext)

    // const handleLogout = () => {
    //     axios.get('http://localhost:3000/logout')
    //         .then(res => {
    //             if (res.data === "Success")
    //                 window.location.href = '/'
    //         }).catch(err => console.log(err))
    // }
    return (
        <div>
            <hr className='m-0 p-0'/>
            <ul className="h-mobile-list nav col-12 col-lg-auto my-2 d-flex my-md-0 text-small">
                <li className='h-mobile-list-items'>
                    <NavLink to='/' className="nav-link text-secondary h-navItems">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </svg>
                        <div className='h-homeicon'>
                            <span>Home</span>
                        </div>
                    </NavLink>
                </li>
                {
                    user.isAdmin ?
                        <></> :
                        <>
                            <li>
                                <Sidebar />
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white h-navItems">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-list-check" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                    </svg>
                                    <div>
                                        <span>Orders</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <NavLink to='/cart' className="nav-link text-white h-navItems">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                    <div>
                                        <span>Cart</span>
                                    </div>
                                </NavLink>
                            </li>
                        </>
                }
                <li>
                    <a href="#" className="nav-link text-white h-navItems">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        <div>
                            <span>Profile</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MobileSidebar
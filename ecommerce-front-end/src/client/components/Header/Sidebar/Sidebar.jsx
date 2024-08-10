import React from 'react'
import { useState, useEffect } from 'react';
import {userContext } from '../../../../App';
import { useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';


function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {browseProduct,setbrowseProduct} = useContext(userContext);
    const handleCategoryClick = (category) => {
        setbrowseProduct(category);
    }
    return (
        <section className='h-sidebar'>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch
            </Button> */}
            <div onClick={handleShow} className='nav-link text-white h-navItems'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                    <path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
                </svg>
                <div>
                    <span>Categories</span>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose} className='text-bg-dark sidebar-offcanvas'>

                <Offcanvas.Header closeButton >
                    <div className="sidebar-logo d-flex justify-content-center align-items-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg" className="bi me-2 rounded-circle " width="70" height="70" role="img" alt="logo" />
                    </div>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <div>
                        <Offcanvas.Title style={{ fontSize: '40px', marginLeft: "20px" }} className='so-item' >Categories</Offcanvas.Title>
                    </div>
                    <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>

                        <ul className="list-unstyled ps-0">
                            <li className="mb-1 list-item">

                                {/* <button style={{ color: "white", marginTop: "10px" }} className="so-item btn btn-toggle d-inline-flex align-items-center rounded border-0 side-category" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                    <svg style={{ marginRight: "5px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    Fashion
                                </button>
                                <div className="collapse" id="home-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small sub-list">

                                        <li><a className="dropdown-item ms-10 so-item" href="#">Men</a></li>
                                        <li><a className="dropdown-item so-item" href="#">Women</a></li>
                                       
                                    </ul>
                                </div> */}
                                <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Fashion')}>
                                <button style={{ color: "white", marginLeft: "20px", marginTop: "10px" }} className="so-item btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed side-category" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                    Fashion
                                </button>
                                </NavLink>
                            </li>

                            <li className="mb-1 list-item">
                            <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Electronics')}>
                                <button style={{ color: "white", marginLeft: "20px", marginTop: "10px" }} className="so-item btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed side-category" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                    Electronics
                                </button>
                                </NavLink>
                            </li>
                            <li className="mb-1 list-item">
                            <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Beauty')}>
                                <button style={{ color: "white", marginLeft: "20px", marginTop: "10px" }} className="so-item btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed side-category" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                    Beauty 
                                </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    )
}

export default Sidebar
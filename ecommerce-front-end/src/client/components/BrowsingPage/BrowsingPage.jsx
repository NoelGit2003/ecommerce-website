import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Help from '../Home/Help/Help';
import BreadCrumb from '../../UI_elements/Breadcrumb/Breadcrumb';
import MobileOffcanvas from '../../UI_elements/MobileOffcanvas/MobileOffcanvas';
import BrowsingSidebar from './BrowsingSidebar/BrowsingSidebar';
import ProductCard from '../../UI_elements/ProductCard/ProductCard';
import './BrowsingPage.css';

const BrowsingPage = () => {


    return (
        <div className='browsing-page'>
            <div className="browsing-breadcrumb">
                <BreadCrumb />
            </div>
            <div className='browsing-main'>
                <div className="bp-browsing-sidebar">
                    <BrowsingSidebar />
                </div>
                <div className="browsing-products">
                    <div className="bp-head">
                        <h1>Electronics</h1>
                    </div>
                    <div className="bp-filter">
                        <div className="bp-filter-left">
                            <p>Showing 11 products</p>
                        </div>
                        <div className="bp-filter-right">
                            <div className="bp-right-mobile">
                                <MobileOffcanvas
                                    button={
                                        <>
                                            Filter{' '}
                                            <img
                                                src="./BrowsingPage Images/white-filter.png"
                                                alt="Filter Icon"
                                                className="filter-icon"
                                                style={{width: '15px'}}
                                            />
                                        </>
                                    }
                                    title={
                                        <span style={{fontSize: '40px'}}>
                                            Filter
                                        </span>
                                    }
                                    content={<BrowsingSidebar />}
                                    place = 'end'
                                    className="bp-mobile-filter"
                                    backcolor="#f1f2f4"
                                    textcolor="black" 
                                />
                            </div>
                            <DropdownButton
                                title={
                                    <>
                                        Sort by{' '}
                                        <img src="./BrowsingPage Images/white-filter.png" alt="filter" style={{ width: '18px', margin: '0px' }} />
                                    </>
                                }
                                className="bp-right-sortby"
                                id="dropdown-basic-button"
                                style={{ backgroundColor: 'blue', border: 'none', borderRadius: '5px', color: 'white' }}
                                variant="secondary"
                            >
                                <>
                                    <Dropdown.Item href="#/action-1">Name (A to Z)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Name (Z to A)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Price (Low to High)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Price (High to Low)</Dropdown.Item>
                                </>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className="bp-card-container">

                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>
                        <span className="bp-card-group">
                            <ProductCard />
                        </span>

                    </div>
                </div>
            </div>
            <Help />
        </div >
    );
};

export default BrowsingPage;
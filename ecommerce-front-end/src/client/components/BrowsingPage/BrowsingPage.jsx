import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom';
import {userContext } from '../../../App'
import { useContext } from 'react'
import { createContext } from 'react';
import axios from 'axios'

import Help from '../Home/Help/Help';
import BreadCrumb from '../../UI_elements/Breadcrumb/Breadcrumb';
import MobileOffcanvas from '../../UI_elements/MobileOffcanvas/MobileOffcanvas';
import BrowsingSidebar from './BrowsingSidebar/BrowsingSidebar';
import ProductCard from '../../UI_elements/ProductCard/ProductCard';
import './BrowsingPage.css';


const BrowsingPage = () => {

    const [products, setProducts] = useState([]);
    const {browseProduct,setbrowseProduct} = useContext(userContext);
  

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/client/getAllProducts');
                await setProducts(response.data);
                // console.log(products)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

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
                                                style={{ width: '15px' }}
                                            />
                                        </>
                                    }
                                    title={
                                        <span style={{ fontSize: '40px' }}>
                                            Filter
                                        </span>
                                    }
                                    content={<BrowsingSidebar />}
                                    place='end'
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
                        {
                            products.map(product => (
                                // console.log({ product })
                                (product.ProductCategory === browseProduct) && (
                                    <NavLink to={`/productDetails/${product._id}`} key={product._id}>
                                        <span className="bp-card-group">
                                            <ProductCard
                                                name={product.ProductName}
                                                image={`http://localhost:3000/uploads/${product.ProductImage}`}
                                                price={product.ProductPrice}
                                                rating={product.ProductRating}
                                            />
                                        </span>
                                    </NavLink>
                                )  
                            ))
                        }
                    </div>
                </div>
            </div>
            <Help />
        </div >
        
    );
};

export default BrowsingPage;
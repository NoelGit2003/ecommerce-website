import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {userContext } from '../../../../App';
import { useContext } from 'react';

const BrowsingSidebar = () => {
    const [sidebar_rangeValue, setSidebar_rangeValue] = useState(0);
    const {browseProduct,setbrowseProduct} = useContext(userContext);

    const handleChange = (event) => {
        setSidebar_rangeValue(event.target.value);
    };

    const handleCategoryClick = (category) => {
        setbrowseProduct(category);
    }
    return (
        <div className="bp-sidebar">
            <div className="bp-sidebar-content">
                <h4 className='bp-sidebar-head'> Browse by </h4>
                <hr />
                <ul className='bp-sidebar-list'>
                    
                    <li className='bp-sider-list-item'> All Products </li>
                    <li className='bp-sider-list-item'> Best Seller </li>
                    <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Electronics')}>
                    <li className='bp-sider-list-item' style={{color:'#212529'}}>Electronics </li>
                    </NavLink>
                    <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Beauty')}>
                    <li className='bp-sider-list-item' style={{color:'#212529'}}> Beauty </li>
                    </NavLink>
                    <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Fashion')}>
                    <li className='bp-sider-list-item' style={{color:'#212529'}}> Fashion </li>
                    </NavLink>
                </ul>
            </div>
            <div className="bp-sidebar-content">
                <h4 className='bp-sidebar-head'> Filter by </h4>
                <hr />
                <div className="bp-sidebar-range">
                    <label htmlFor="customRange3" className="bp-form-label form-label">Price range</label>
                    <input
                        type="range"
                        className="bp-form-range form-range"
                        min="0"
                        max="150000"
                        step="5000"
                        id="customRange3"
                        value={sidebar_rangeValue}
                        onChange={handleChange}
                    />
                    <div className="bp-form-value">
                        <span className='pe-1'>Rs.</span><span>{sidebar_rangeValue}</span>
                        <div className="bg-value-points">
                            <div>0 sets to price range</div>
                            <div>1,50,000 sets to above it</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bp-sidebar-content bp-sidebar-sort-section mt-3">
                <h4 className='bp-sidebar-head'> Sort by </h4>
                <hr />
                <ul className='bp-sidebar-list'>
                    <li className='bp-sider-list-item'> Name (A to Z) </li>
                    <li className='bp-sider-list-item'> Name (Z to A) </li>
                    <li className='bp-sider-list-item'> Price (Low to High) </li>
                    <li className='bp-sider-list-item'> Price (High to Low) </li>
                </ul>
            </div>
        </div>
    )
}

export default BrowsingSidebar
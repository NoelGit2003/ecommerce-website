import React, { useState } from 'react';

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
                                <MobileOffcanvas button='Filter' title='Filter' content={<BrowsingSidebar />} className='bp-mobile-filter' />
                            </div>
                            <div className="bp-right-sortby"> <span>Sort by</span> </div>
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
            <Help/>
        </div>
    );
};

export default BrowsingPage;
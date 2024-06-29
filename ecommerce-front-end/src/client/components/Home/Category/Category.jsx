import React from 'react'
import { NavLink } from 'react-router-dom'

import './Category.css'

function Category() {
  //   var hoverElement = document.getElementsByClassName('h-list-image')
  // hoverElement.addEventListener('mouseenter', () => {
  //   hoverElement.classList.add('h-list-image-hover')
  // });

  return (
    <>
      <div className="h-category">
        <h2 className='h-category-heading'>Shop by Category</h2>
        <div className='h-category-box'>
          <NavLink to='/category' style={{textDecoration: 'none'}}>
            <div className="h-category-list">
              <img className='h-list-image zoom-image' src="./Category Images/beauty.png" alt=""/>
              <h3 style={{color:'#212529'}}> Beauty </h3>
            </div>
          </NavLink>
          <div className="h-category-list">
            <img src="./Category Images/clothes.png" className='h-list-image zoom-image' alt="" />
            <h3>Clothes</h3>
          </div>
          <div className="h-category-list">
            <img src="./Category Images/mobile.png" className='h-list-image zoom-image' alt="" />
            <h3>Electronics</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
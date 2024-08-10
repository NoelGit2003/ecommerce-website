import React from 'react'
import { NavLink } from 'react-router-dom'
import {userContext } from '../../../../App'
import { useContext } from 'react'
import './Category.css'

function Category() {
  //   var hoverElement = document.getElementsByClassName('h-list-image')
  // hoverElement.addEventListener('mouseenter', () => {
  //   hoverElement.classList.add('h-list-image-hover')
  // });
  
  const {browseProduct,setbrowseProduct} = useContext(userContext);
  console.log(browseProduct)
  
    const handleCategoryClick = (category) => {
           setbrowseProduct(category);
    }
  return (
    <>
      <div className="h-category">
        <h2 className='h-category-heading'>Shop by Category</h2>
        <div className='h-category-box'>
          <NavLink to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Beauty')} >
            <div className="h-category-list">
              <img className='h-list-image zoom-image' src="./Category Images/beauty.png" alt=""/>
              <h3 style={{color:'#212529'}}>Beauty </h3>
            </div>
          </NavLink>
          <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Fashion')}>
          <div className="h-category-list">
            <img src="./Category Images/clothes.png" className='h-list-image zoom-image' alt="" />
            <h3 style={{color:'#212529'}}>Fashion</h3>
          </div>
          </NavLink>
          <NavLink  to='/category' style={{textDecoration: 'none'}} onClick={()=> handleCategoryClick('Electronics')}>
          <div className="h-category-list">
            <img src="./Category Images/mobile.png" className='h-list-image zoom-image' alt="" />
            <h3 style={{color:'#212529'}}>Electronics</h3>
          </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Category
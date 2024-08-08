import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../Admin-Sidebar/AdminSidebar';
import Pagination from '../../../client/UI_elements/Pagination/Pagination';
import './Admin_Allproducts.css'
import { NavLink } from 'react-router-dom';

const Admin_AllProducts = () => {



  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/allProduct');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/admin/deleteProduct/${id}`)
      .then(res => {
        console.log('Item deleted');
        console.log(res.data);
        // Update the products state after successful deletion
        setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
      })
      .catch(err => console.error('Error deleting product: ', err));
  }



  return (
    <>
      <section className="admin-dashboard">
        <div className="admin-dash-main">
          <AdminSidebar />
          <div className="admin-content">
            <h1>Product List</h1>
            <hr />
            {products ? (
              <ul>
                <div className="product-list-box">
                  {products.map((product) => {
                    // console.log('Product ID:', product._id)
                    return (
                      <div className='product-box' key={product._id}>
                        <li >
                          <div className="product-img-box">
                            <img src={`http://localhost:3000/uploads/${product.ProductImage}`} alt={product.ProductName} />
                          </div>
                          <div className="product-first-section">
                            <h4>{product.ProductName}</h4>
                            <div className="product-price">
                              <div className="rupee-img">
                                <img src="../../../images/icon-rupees.png" alt="" />
                              </div>
                              <p>{product.ProductPrice}</p>
                            </div>
                          </div>
                          <h6>{product.ProductTitle}</h6>
                          <p>{product.ProductDescription}</p>
                          {/* {product.ProductCategory && <p>{product.ProductCategory}</p>}
                        {product.ProductPrice && <p><span><img src="../../" alt="" /></span>{product.ProductPrice}</p>}
                        {product.ProductRating && <p>{product.ProductRating}</p>}
                        {product.ProductDiscount && <p>{product.ProductDiscount}</p>}
                        {product.ProductStock && <p>{product.ProductStock}</p>}
                        {product.ProductSize && <p>{product.ProductSize}</p>}
                        {product.ProductColour && <p>{product.ProductColour}</p>} */}

                        </li>
                        <button type='submit' className='product-delete-btn product_btn' onClick={() => handleDelete(product._id)}>Delete</button>
                        <NavLink to={`/admin/edit/${product._id}`}>
                          <button type="submit" className='product-Update-btn product_btn'>Update</button>
                        </NavLink>
                      </div>
                    )
                  })}
                </div>
              </ul>
            ) : (
              <p> No product available.</p>
            )}
          </div>
        </div>

        <div className="product-pagination">
          <Pagination />
        </div>

      </section>
    </>
  )
}


export default Admin_AllProducts
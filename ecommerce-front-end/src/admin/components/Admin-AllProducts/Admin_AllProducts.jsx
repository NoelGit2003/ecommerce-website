import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../Admin-Sidebar/AdminSidebar';
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
                {products.map((product) => {
                  // console.log('Product ID:', product._id)
                  return (
                    <div className='product-box' key={product._id}>
                      <li >
                        <img src={`http://localhost:3000/uploads/${product.ProductImage}`} alt={product.ProductName} />
                        <h2>{product.ProductName}</h2>
                        <p>Title: {product.ProductTitle}</p>
                        <p>Category: {product.ProductCategory}</p>
                        <p>Price: ${product.ProductPrice}</p>
                        <p>Rating: {product.ProductRating}</p>
                        <p>Discount: {product.ProductDiscount}%</p>
                        <p>Stock: {product.ProductStock}</p>
                        <p>Size: {product.ProductSize}</p>
                        <p>Colour: {product.ProductColour}</p>

                      </li>
                      <button type='submit' className='product-delete-btn product_btn' onClick={() => handleDelete(product._id)}>Delete</button>
                      <NavLink to={`/admin/edit/${product._id}`}>
                        <button type="submit" className='product-Update-btn product_btn'>Update</button>
                      </NavLink>
                    </div>
                  )
                })}
              </ul>
            ) : (
              <p> No product available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}


export default Admin_AllProducts
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminProducts.css';
import { useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from '../Admin-Sidebar/AdminSidebar';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [prodName, setProdName] = useState('');
  const [file, setFile] = useState(null);
  const [prodTitle, setProdTitle] = useState('');
  const [prodCategory, setProdCategory] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodRate, setProdRate] = useState('');
  const [prodDiscount, setProdDiscount] = useState('');
  const [prodStock, setProdStock] = useState('');
  const [prodSize, setProdSize] = useState('');
  const [prodColour, setProdColour] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/admin/edit/${id}`)
      .then(res => {
        const data = res.data;
        console.log('API Response:', data);
        setProdName(data.ProductName || '');
        setProdTitle(data.ProductTitle || '');
        setProdCategory(data.ProductCategory || '');
        setProdPrice(data.ProductPrice || '');
        setProdRate(data.ProductRating || '');
        setProdDiscount(data.ProductDiscount || '');
        setProdStock(data.ProductStock || '');
        setProdSize(data.ProductSize || '');
        setProdColour(data.ProductColour || '');
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('prodName', prodName);
    formdata.append('prodTitle', prodTitle);
    formdata.append('prodCategory', prodCategory);
    formdata.append('prodPrice', prodPrice);
    formdata.append('prodRate', prodRate);
    formdata.append('prodDiscount', prodDiscount);
    formdata.append('prodStock', prodStock);
    formdata.append('prodSize', prodSize);
    formdata.append('prodColour', prodColour);

    if (file) {
      formdata.append('product', file);
    }

    try {
      const res = await axios.put(`http://localhost:3000/admin/updateProd/${id}`, formdata);
      console.log('Product updated:', res);
      navigate('/admin/Allproducts');
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  return (
    <section className="admin-dashboard">
      <div className="admin-dash-main">
        <AdminSidebar />
        <div className="admin-content">
          <div className="ad-prod-head admin-content-head">
            <h1>Products</h1>
          </div>
          <hr />
          <div className="ad-prod-body admin-content-body">
            <h5>Edit product</h5><br />
            <form className='product-form' onSubmit={handleEdit}>
              <label htmlFor="myName">Enter product name:</label>
              <input
                className="product-textbox"
                type="text"
                id="myName"
                name="myName"
                onChange={(e) => setProdName(e.target.value)}
                value={prodName}
              />
              <label htmlFor="title">Enter title:</label>
              <input
                className="product-textbox"
                type="text"
                id="title"
                name="title"
                onChange={(e) => setProdTitle(e.target.value)}
                value={prodTitle}
              />
              <label htmlFor="price">Enter price:</label>
              <input
                className="product-textbox"
                type="number"
                id="price"
                name="price"
                onChange={(e) => setProdPrice(e.target.value)}
                value={prodPrice}
              />
              <label htmlFor="stock">Enter stock:</label>
              <input
                className="product-textbox"
                type="number"
                id="stock"
                name="stock"
                onChange={(e) => setProdStock(e.target.value)}
                value={prodStock}
              />
              <label htmlFor="image">Add image:</label>
              <input
                type="file"
                onChange={e => setFile(e.target.files[0])}
              />
              <label htmlFor="category">Enter category:</label>
              <input
                className="product-textbox"
                type="text"
                id="category"
                name="category"
                onChange={(e) => setProdCategory(e.target.value)}
                value={prodCategory}
              />
              <label htmlFor="rating">Enter rating:</label>
              <input
                className="product-textbox"
                type="number"
                id="rating"
                name="rating"
                onChange={(e) => setProdRate(e.target.value)}
                value={prodRate}
              />
              <label htmlFor="discount">Enter discount:</label>
              <input
                className="product-textbox"
                type="number"
                id="discount"
                name="discount"
                onChange={(e) => setProdDiscount(e.target.value)}
                value={prodDiscount}
              />
              <label htmlFor="size">Enter size:</label>
              <input
                className="product-textbox"
                type="text"
                id="size"
                name="size"
                onChange={(e) => setProdSize(e.target.value)}
                value={prodSize}
              />
              <label htmlFor="colour">Enter colour:</label>
              <input
                className="product-textbox"
                type="text"
                id="colour"
                name="colour"
                onChange={(e) => setProdColour(e.target.value)}
                value={prodColour}
              />
              <div className='submit-div'>
                <button type="submit" className='product-submit-btn'>Edit</button>
              </div>
            </form>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default EditProduct;

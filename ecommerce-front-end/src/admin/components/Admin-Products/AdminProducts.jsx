import React, { useState } from 'react'
import axios from 'axios'

import AdminSidebar from '../Admin-Sidebar/AdminSidebar'

const AdminProducts = () => {

  const [prodName, setProdName] = useState()
  const [file, setFile] = useState(null)
  const [prodTitle, setProdTitle] = useState()
  const [prodCategory, setProdCategory] = useState()

  const [prodPrice, setProdPrice] = useState()
  const [prodRate, setProdRate] = useState()
  const [prodDiscount, setProdDiscount] = useState()
  const [prodStock, setProdStock] = useState()

  const [prodSize, setProdSize] = useState()
  const [prodColour, setProdColour] = useState()

  const handleUpload = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('product', file)
    formdata.append('prodName', prodName)
    axios.post('http://localhost:3000/admin/upload', formdata)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    // <section className="admin-dashboard">
    //   <div className="admin-dash-main">
    //     <AdminSidebar />
    //     <div className="admin-content">
    //       <div className="ad-prod-head admin-content-head">
    //         <h1>Products</h1>
    //       </div>
    //       <div className="ad-prod-body admin-content-body">
    //         <form className="ad-add-prod" onSubmit={handleUpload}>
    //           <h5>Add a product</h5>
    //           {/* <input type="text" onChange={e => setProdName(e.target.value)} placeholder='Product Name'/> */}
    //           <label htmlFor="image">Add image</label>
    //           <input type="file" onChange={e => setFile(e.target.files[0])} />

    //           <button type="submit">Upload</button>
    //         </form>
    //       </div>


    //     </div>
    //   </div>
    // </section>
    <section className="admin-dashboard">
      <div className="admin-dash-main">
        <AdminSidebar />
        <div className="admin-content">
          <div className="ad-prod-head admin-content-head">
            <h1>Products</h1>
          </div>
          <hr />
          <div className="ad-prod-body admin-content-body">
            <h5>Add a product</h5><br />
            <div className="form-content-1">
              <form method="post" className='product-form'>
                <div className="form-left">
                  <label htmlFor="myName">Enter product name:</label>
                  <input className="product-textbox" type="text" id="myName" name="myName" onChange={(e) => setProdName(e.target.value)} />
                  <label htmlFor="title">Enter title:</label>
                  <input className="product-textbox" type="text" id="title" name="title" onChange={(e) => setProdTitle(e.target.value)} />
                  <label htmlFor="price">Enter price:</label>
                  <input className="product-textbox" type="text" id="price" name="price" />
                  <label htmlFor="price">Enter stock:</label>
                  <input className="product-textbox" type="text" id="stock" name="stock" />

                  {/* <form className="ad-add-prod" onSubmit={handleUpload}> */}
                  {/* <input type="text" onChange={e => setProdName(e.target.value)} placeholder='Product Name'/> */}
                  <label htmlFor="image">Add image</label>
                  <input type="file" onChange={e => setFile(e.target.files[0])} />

                  {/* <button type="submit">Upload</button> */}
                  {/* </form> */}
                </div>
                <div className="form-right">
                  {/* <form method='post' className='product-form right-form' onSubmit={uploadProduct}> */}
                  <label htmlFor="category">Enter category:</label>
                  <input className="product-textbox" type="text" id="category" name="category" />
                  <label htmlFor="title">Enter rating:</label>
                  <input className="product-textbox" type="text" id="rating" name="rating" />
                  <label htmlFor="price">Enter discount:</label>
                  <input className="product-textbox" type="text" id="discount" name="discount" />
                  <label htmlFor="price">Enter size:</label>
                  <input className="product-textbox" type="text" id="size" name="size" />
                  <label htmlFor="colour">Enter colour:</label>
                  <input className="product-textbox" type="text" id="colour" name="colour" />
                </div>

              </form>
            </div>
            <div className='submit-div'>
              <button type="submit" className='product-submit-btn' onClick={handleUpload}>Submit</button>
            </div>
          </div>


        </div>
        <hr />
      </div>
    </section>
  )
}

export default AdminProducts
import React, { useState } from 'react'
import axios from 'axios'
import './AdminProducts.css'
import AdminSidebar from '../Admin-Sidebar/AdminSidebar'

const AdminProducts = () => {
 
 
  const [prodName, setProdName] = useState('Nill')
  const [file, setFile] = useState(null)
  const [prodTitle, setProdTitle] = useState('Nill')
  const [prodCategory, setProdCategory] = useState('Nill')
  const [prodGenderCategory,setProdGenderCategory] = useState('Nill')
  const [prodPrice, setProdPrice] = useState(0)
  const [prodRate, setProdRate] = useState(0)
  const [prodDiscount, setProdDiscount] = useState(0)
  const [prodStock, setProdStock] = useState(0)

  const [prodSize, setProdSize] = useState(0)
  const [prodColour, setProdColour] = useState('Nill')
  const [prodDescription,setProdDescription] = useState('Nill')
  const formdata = new FormData()

  const handleUpload = (e) => {
    e.preventDefault()
    console.log(file)
    formdata.append('product', file)
    formdata.append('prodName', prodName)
    formdata.append('prodTitle',prodTitle)
    formdata.append('prodCategory',prodCategory)
    formdata.append('prodGenderCategory',prodGenderCategory)
    formdata.append('prodPrice',prodPrice)
    formdata.append('prodRate',prodRate)
    formdata.append('prodDiscount',prodDiscount)
    formdata.append('prodStock',prodStock)
    formdata.append('prodSize',prodSize)
    formdata.append('prodColour',prodColour)
    formdata.append('prodDescription',prodDescription)

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
    //  const url = isEditing ? `/products/edit` : `/products/add`
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
                   
                  <label htmlFor="myName">Enter product name:</label>
                  <input className="product-textbox" type="text" id="myName" name="myName" onChange={(e) => setProdName(e.target.value)} />
                  <label htmlFor="title">Enter title:</label>
                  <input className="product-textbox" type="text" id="title" name="title" onChange={(e) => setProdTitle(e.target.value)} />
                  <label htmlFor="price">Enter price:</label>
                  <input className="product-textbox" type="text" id="price" name="price" onChange={(e) => setProdPrice(e.target.value)}/>
                  <label htmlFor="stock">Enter stock:</label>
                  <input className="product-textbox" type="text" id="stock" name="stock" onChange={(e) => setProdStock(e.target.value)} />

                  {/* <form className="ad-add-prod" onSubmit={handleUpload}> */}
                  {/* <input type="text" onChange={e => setProdName(e.target.value)} placeholder='Product Name'/> */}
                  <label htmlFor="image">Add image:</label>
                  <input type="file" onChange={e => setFile(e.target.files[0])} />

                  {/* <button type="submit">Upload</button> */}
                  {/* </form> */}
                
                
                  {/* <form method='post' className='product-form right-form' onSubmit={uploadProduct}> */}
                  <label htmlFor="category">Enter category:</label>
                  <input className="product-textbox" type="text" id="category" name="category" onChange={(e) => setProdCategory(e.target.value)}/>
                  <label htmlFor="category">Enter Gender:</label>
                  <input className="product-textbox" type="text" id="gender" name="gender" onChange={(e) => setProdGenderCategory(e.target.value)}/>
                  <label htmlFor="rating">Enter rating:</label>
                  <input className="product-textbox" type="text" id="rating" name="rating" onChange={(e) => setProdRate(e.target.value)}/>
                  <label htmlFor="discount">Enter discount:</label>
                  <input className="product-textbox" type="text" id="discount" name="discount" onChange={(e) => setProdDiscount(e.target.value)}/>
                  <label htmlFor="size">Enter size:</label>
                  <input className="product-textbox" type="text" id="size" name="size" onChange={(e) => setProdSize(e.target.value)}/>
                  <label htmlFor="colour">Enter colour:</label>
                  <input className="product-textbox" type="text" id="colour" name="colour" onChange={(e) => setProdColour(e.target.value)}/>
                  <label htmlFor="description">Enter description:</label>
                  <input className="product-textbox" type="text" id="description" name="description" onChange={(e) => setProdDescription(e.target.value)}/>
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
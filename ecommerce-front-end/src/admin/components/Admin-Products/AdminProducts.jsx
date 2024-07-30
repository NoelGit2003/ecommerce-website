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
    axios.post('http://localhost:3000/admin/upload', formdata)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <section className="admin-dashboard">
      <div className="admin-dash-main">
        <AdminSidebar />
        <div className="admin-content">
          <div className="ad-prod-head admin-content-head">
            <h1>Products</h1>
          </div>
          <div className="ad-prod-body admin-content-body">
            <form className="ad-add-prod" onSubmit={handleUpload}>
              <h5>Add a product</h5>
              {/* <input type="text" onChange={e => setProdName(e.target.value)} placeholder='Product Name'/> */}
              <label htmlFor="image">Add image</label>
              <input type="file" onChange={e => setFile(e.target.files[0])} />

              <button type="submit">Upload</button>
            </form>
          </div>


        </div>
      </div>
    </section>
  )
}

export default AdminProducts
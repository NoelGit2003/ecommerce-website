import React, { useState } from 'react'
import axios from 'axios'

import AdminSidebar from '../Admin-Sidebar/AdminSidebar'

const AdminProducts = () => {

  const [file, setFile] = useState(null)

  const handleUpload = (e) => {
    e.preventDefault();
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
          <form onSubmit={handleUpload}>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminProducts
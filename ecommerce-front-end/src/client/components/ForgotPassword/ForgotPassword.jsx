import React from 'react'
import './ForgotPassword.css'

function ForgotPassword() {
  return (
    <>
    <div className="forgotPwd-main">
        <div className="pwd-reset-form">
          <h3>Reset Password</h3>
          <div className="new-pwd-input">
          <input type="password" id="password1" class="swal2-input" placeholder="New Password"/>
          <input type="password" id="password2" class="swal2-input" placeholder=" Confirm Password"/>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default ForgotPassword
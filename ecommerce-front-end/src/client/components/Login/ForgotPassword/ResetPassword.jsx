import React, { useState, useContext } from 'react';
import axios from 'axios';

import { userContext } from '../../../../App';

const ResetPassword = () => {
  const { setForgotPage, forgotEmail } = useContext(userContext);
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [same, setSame] = useState(true);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setCpass(value);
    setSame(value === pass);
  };

  const resetPwd = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (pass !== cpass) {
      setSame(false);
      return;
    }

    axios.put('http://localhost:3000/reset-password', {
      email: forgotEmail,
      password: pass,
    })
    .then(() => {
      setForgotPage('recovered');
      window.location.href = '/'; // Redirection after setting the state
    })
    .catch(err => console.error(err));
  };

  return (
    <div className='forgot-password'>
      <form onSubmit={resetPwd}>
        <div>
          <h2>Change Password</h2>
        </div>
        <div>
          <label htmlFor="pwd">New Password</label>
          <input
            type="text"
            className='form-control'
            placeholder="New password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="con-pwd">Confirm Password</label>
          <input
            type="password"
            className='form-control'
            placeholder="Re-enter password"
            value={cpass}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          {!same && <p className="text-danger">Passwords do not match</p>}
        </div>
        <div>
          <button type="submit" className='btn forgot-sub' disabled={!same}>Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;

import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';

import { userContext } from '../../../../App';

const ForgotPassword = () => {
    const { forgotEmail, setForgotEmail, setForgotPage, setForgotOtp } = useContext(userContext);
    const emailInputRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, []);

    const handleEmailChange = (e) => {
        setForgotEmail(e.target.value);
    };

    const navigateToOtp = async (event) => {
        event.preventDefault();

        if (forgotEmail) {
            try {
                const OTP = Math.floor(Math.random() * 9000 + 1000);
                console.log(OTP);
                console.log(forgotEmail)
                setForgotOtp(OTP);

                await axios.post("http://localhost:3000/reset_password_otp", {
                    OTP,
                    recipient_email: forgotEmail
                });

                setForgotPage('otp');
            } catch (err) {
                console.error(err);
                setError('Failed to send OTP. Please try again.');
            }
        } else {
            alert("Please enter your email");
        }
    };

    return (
        <section className='forgot-password'>
            <form onSubmit={navigateToOtp}>
                <h3>Forgot Password?</h3>
                <div className="mb-3">
                    <label htmlFor="pwd-reset-link">Generate Link for password reset</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Enter email'
                        id="exampleFormControlInput2"
                        value={forgotEmail || ''}
                        onChange={handleEmailChange}
                        ref={emailInputRef}
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <div className="d-grid">
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default ForgotPassword;
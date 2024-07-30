import React, { useState } from 'react'
import axios from 'axios'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const generateLink = (e) => {
        e.preventDefault()
        console.log(email)
        axios.post('http://localhost:3000/forgotPassword', { email })
            .then(res => {
                console.log(res)
                alert(res.data.status)
            })
            .catch(err => console.log(err))
    }

    return (
        <section className='forgot-password'>
            <form onSubmit={generateLink}>
                <h3>Forgot Password?</h3>
                <div className="mb-3">
                    <label htmlFor="pwd-reset-link">Generate Link for password reset</label>
                    <input
                        type="email"
                        className='form-control'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ForgotPassword
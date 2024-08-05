import React from 'react'
import { useState, useContext, useEffect } from 'react'

import { userContext } from '../../../../App'

const OTP_Pass = () => {
    const {forgotEmail, forgotOtp, setForgotPage} = useContext(userContext)
    const [timer, setTimer] = useState(60)
    const [disable, setDisable] = useState(true)
    const [OTP, setOTP] = useState()

    const resentOTP = () => {
        if(disable) return;

        axios.post("http://localhost:3000/reset_password_otp",{
            OTP,
            recipient_email: forgotEmail
        })
        .then(() => setDisable(true))
        .then(() => alert("New Otp has been sent"))
        .then(() => setTimer(60))
        .catch((err) => console.log(err))
    }

    const verifyOTP = () => {
        if(OTP == forgotOtp){
            setForgotPage('reset')
            return
        }
        alert("Incorrect OTP")
        return
    }

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval)
                if(lastTimerCount <= 1) setDisable(false)
                if(lastTimerCount <= 0) return lastTimerCount
                return lastTimerCount - 1
            })
        }, 1000) //each count lasts a second
        //cleanup interval on complete
        return () => clearInterval(interval)
    }, [disable])

    
    return (
        <div>
            <form onSubmit={verifyOTP}>
                <div>
                    <h2>Enter OTP</h2>
                </div>
                <div>
                    <label htmlFor="otp">OTP has been sent to {forgotEmail}</label>
                    <input type="text" placeholder='Enter OTP here' onChange={(e) => setOTP(e.target.value)}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
                <div>
                    <p> Didn't recieve code? </p>{" "}
                    <a 
                    style={{
                        color: disable? "gray": "blue",
                        cursor: disable? "none": "pointer",
                        textDecoration: disable? "none": "underline"
                    }}
                    onClick={() => resentOTP()}
                    >
                        {disable ? `Resend OTP in ${timer}s`: "Resend OTP"}
                    </a>
                </div>
            </form>
        </div>
    )
}

export default OTP_Pass
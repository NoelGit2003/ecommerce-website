import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';



const LoginForm = () => {

    const showLoginForm = async () => {
        let emailInput;
        let passwordInput;

 
        Swal.fire({
            title: 'Login',
            html: `
                <input type="email" id="email" class="swal2-input" placeholder="Email">
                <input type="password" id="password" class="swal2-input" placeholder="Password">
                <br/>
                
                <div id="newPwd" style="text-align: right;  margin-top: 7px; margin-bottom: 7px;  width: 360px; font-size: 14px; cursor: pointer;">
                 Forgot Password?
                 </div>
                
            `,
            confirmButtonText: 'Sign in',
            // customClass: {
            //     confirmButton: 'btn btn-primary',
            // },
            focusConfirm: false,
            didOpen: () => {
                const popup = Swal.getPopup();
                emailInput = popup.querySelector('#email');
                passwordInput = popup.querySelector('#password');
                emailInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
                passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
                const forgotpwdDiv = document.getElementById("newPwd")
                if(forgotpwdDiv){
                forgotpwdDiv.addEventListener('click',() => {
                    Swal.close();

                    window.location.href = '/forgotPwd';
                })
                }
            },
            preConfirm: () => {
                const email = emailInput.value;
                const password = passwordInput.value;
                if (!email || !password) {
                    Swal.showValidationMessage('Please enter email and password');
                }
                return { email, password };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { email, password } = result.value;
                // console.log(`Email: ${email}, Password: ${password}`);

                axios.post('http://localhost:3000/login', { email, password })
                    .then(res => {
                        if (res.data.isBlocked) {
                            throw (err)
                        }
                        else if (res.data.token) {
                            const token = res.data.token;
                            const decodedToken = JSON.parse(atob(token.split('.')[1]));
                            console.log(decodedToken);

                            const toast = Swal.mixin({
                                toast: true,
                                position: 'top-right',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer);
                                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                                }
                            });


                            if (decodedToken.isAdmin) {
                                window.location.href = "/admin";
                                // toast.fire({
                                //     icon: 'success',
                                //     title: 'Login successful as admin'
                                // });
                            } else {
                                window.location.href = "/";
                                // toast.fire({
                                //     icon: 'success',
                                //     title: 'Login successful as client'
                                // });
                            }
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Invalid Credentials',
                                text: 'Please check your email and password and try again.',
                            });
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Something went wrong. Either this is a server side issue or your account is blocked by administration.',
                        });
                    });
            }
        });
    };

    return (
        <div>
            <button onClick={showLoginForm} className="btn btn-light text-dark me-4">Login</button>
        </div>
    );
};

export default LoginForm;
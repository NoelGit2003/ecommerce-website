import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import './Register.css';

const RegisterForm = () => {
    const showRegisterForm = () => {
        let nameInput;
        let emailInput;
        let mobileInput;
        let passwordInput;
        let confirmPasswordInput;
        let showPasswordCheckbox;

        Swal.fire({
            title: 'Register Form',
            html: `
                <input type="text" id="name" class="swal2-input" placeholder="Name">
                <input type="email" id="email" class="swal2-input" placeholder="Email">
                <input type="text" id="mobile" class="swal2-input" placeholder="Mobile Number">
                <input type="password" id="password" class="swal2-input" placeholder="Password">
                <input type="password" id="confirmPassword" class="swal2-input" placeholder="Confirm Password">
                <div class="reg-checkbox" style="text-align: left; margin-top: 10px;">
                    <input type="checkbox" id="showPassword" style="margin-right: 10px;">
                    <label for="showPassword">Show Password</label>
                </div>
            `,
            confirmButtonText: 'Register',
            // customClass: {
            //     confirmButton: 'btn btn-primary',
            // },
            focusConfirm: false,
            didOpen: () => {
                const popup = Swal.getPopup();
                nameInput = popup.querySelector('#name');
                emailInput = popup.querySelector('#email');
                mobileInput = popup.querySelector('#mobile');
                passwordInput = popup.querySelector('#password');
                confirmPasswordInput = popup.querySelector('#confirmPassword');
                showPasswordCheckbox = popup.querySelector('#showPassword');

                const onKeyUpHandler = (event) => event.key === 'Enter' && Swal.clickConfirm();

                nameInput.onkeyup = onKeyUpHandler;
                emailInput.onkeyup = onKeyUpHandler;
                mobileInput.onkeyup = onKeyUpHandler;
                passwordInput.onkeyup = onKeyUpHandler;
                confirmPasswordInput.onkeyup = onKeyUpHandler;

                showPasswordCheckbox.onchange = () => {
                    const type = showPasswordCheckbox.checked ? 'text' : 'password';
                    passwordInput.type = type;
                    confirmPasswordInput.type = type;
                };
            },
            preConfirm: () => {
                const name = nameInput.value;
                const email = emailInput.value;
                const mobile = mobileInput.value;
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
                if (!name || !email || !mobile || !password || !confirmPassword) {
                    Swal.showValidationMessage(`Please enter all fields`);
                } else if (password !== confirmPassword) {
                    Swal.showValidationMessage(`Passwords do not match`);
                }
                return { name, email, mobile, password };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const { name, email, mobile, password } = result.value;
                const [isAdmin, isBlocked] = [false, false];
                console.log(`Name: ${name}, Email: ${email}, Mobile: ${mobile}, Password: ${password}, isAdmin: ${isAdmin}, isBlocked: ${isBlocked}`);

                axios.post("http://localhost:3000/register", { name, email, mobile, password, isAdmin, isBlocked })
                    .then((res) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registration Successful',
                            text: 'You have been registered successfully, you can now login to the website',
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Registration Failed',
                            text: 'Something went wrong during registration. Please try again later.',
                        });
                    });
            }
        });
    };

    return (
        <div>
            <button onClick={showRegisterForm} className="btn btn-primary me-4"> Register </button>
        </div>
    );
};

export default RegisterForm;
import React from 'react';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const showLoginForm = () => {
    let emailInput;
    let passwordInput;

    Swal.fire({
      title: 'Login',
      html: `
        <input type="email" id="email" class="swal2-input" placeholder="Email">
        <input type="password" id="password" class="swal2-input" placeholder="Password">
      `,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup();
        emailInput = popup.querySelector('#email');
        passwordInput = popup.querySelector('#password');
        emailInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
        passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
      },
      preConfirm: () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        if (!email || !password) {
          Swal.showValidationMessage(`Please enter email and password`);
        }
        return { email, password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { email, password } = result.value;
        console.log(`Email: ${email}, Password: ${password}`);
        // Handle login logic here
      }
    });
  };

  return (
    <div>
      <button onClick={showLoginForm}>Login</button>
    </div>
  );
};

export default LoginForm;
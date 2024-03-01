import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';

function Login() {
  return (
    <div className='login-container'>
        <form className='form-container' action="">
            <input className='email-input' type="text" placeholder='Email'/>
            <input className='password-input' type="text" placeholder='Password'/>
            <button>Login</button>
            <p>Don't have an account?  <Link className="sign-up-link" to="/signup">Signup</Link></p>
        </form>
    </div>
  )
}

export default Login
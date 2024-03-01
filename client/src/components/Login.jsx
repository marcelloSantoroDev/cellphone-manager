import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';
import AppContext from '../context/AppContext';

function Login() {
  const {userLogin, setUserLogin} = useContext(AppContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserLogin({...userLogin, [name]: value});
  }


  return (
    <div className='login-container'>
        <form className='form-container' action="">
            <input
            name='email'
            value={userLogin.email}
            className='email-input'
            type="text"
            placeholder='Email'
            onChange={handleChange}
            />
            <input
            name='password'
            value={userLogin.password}
            className='password-input'
            type="text"
            placeholder='Password'
            onChange={handleChange}
            />
            <button>Login</button>
            <p>Don't have an account?  <Link className="sign-up-link" to="/signup">Signup</Link></p>
        </form>
    </div>
  )
}

export default Login
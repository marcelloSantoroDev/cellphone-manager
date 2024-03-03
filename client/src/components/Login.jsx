import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';
import AppContext from '../context/AppContext';
import loginPost from '../utils/loginPost';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const {userLogin, setUserLogin} = useContext(AppContext);
    const history = useHistory();


  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserLogin({...userLogin, [name]: value});
  }

      const handleClick = async () => {
        const {email, password} = userLogin;
        const {token, message} = await loginPost(email, password);
        if(token){
          localStorage.setItem('token', token);
          history.push(`/products-list`) 
        } else {
          alert(message);
        }
    }


  return (
    <>
    <div className='login-container'>
        <div className='form-container' action="">
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
            <button onClick={handleClick}>Login</button>
            <p>Don't have an account?  <Link className="sign-up-link" to="/signup">Signup</Link></p>
        </div>
    </div>
        <Link className="link" to="/">Home</Link>
    </>
  )
}

export default Login
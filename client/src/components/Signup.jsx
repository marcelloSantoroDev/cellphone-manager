import React, { useContext } from 'react';
import './CSS/Signup.css';
import AppContext from '../context/AppContext';

function Signup() {
    const {userSignup, setUserSignup} = useContext(AppContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserSignup({...userSignup, [name]: value})
    }
    return (
        <div className='signup-container'>
            <form className='form-container' action="">
                <input
                name='email'
                value={userSignup.email}
                onChange={handleChange}
                className='email-input'
                type="text"
                placeholder='Email'
                />
                <input
                name='password'
                value={userSignup.password}
                onChange={handleChange}
                className='password-input'
                type="text"
                placeholder='Password'
                />
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup;
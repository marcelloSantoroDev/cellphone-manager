import React from 'react';
import './CSS/Signup.css';

function Signup() {
    return (
        <div className='signup-container'>
            <form className='form-container' action="">
                <input className='email-input' type="text" placeholder='Email' />
                <input className='password-input' type="text" placeholder='Password' />
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup;
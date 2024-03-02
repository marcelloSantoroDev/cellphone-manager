import React, { useContext } from 'react';
import './CSS/Signup.css';
import AppContext from '../context/AppContext';
import signupPost from '../utils/signupPost';

function Signup() {
    const {userSignup, setUserSignup} = useContext(AppContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserSignup({...userSignup, [name]: value})
    }

    const handleClick = async () => {
        const {name, email, password} = userSignup;
        const post = await signupPost(name, email, password);
        console.log(post);
    }
    return (
        <div className='signup-container'>
            <div className='form-container' action="">
                <input
                name='name'
                value={userSignup.name}
                onChange={handleChange}
                className='name-input'
                type="text"
                placeholder='Name'
                />
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
                <button onClick={handleClick}>Signup</button>
            </div>
        </div>
    )
}

export default Signup;
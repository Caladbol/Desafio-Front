import React from 'react'

const Login = ({logIn}) => {
    return (
        <div className='login'>
        <input type="text" placeholder="User" className='login_form' />
        <input type="password" placeholder="Password" className='login_form' />
        <button className='login_btn' onClick={logIn}  >Log In</button>
      </div>
    
    )
}

export default Login

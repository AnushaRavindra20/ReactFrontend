import React from 'react'
import './CSS/LoginSignup.css'
 const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type='text' placeholder='Name'/>
          <input type='text' placeholder='Email'/>
          <input type='text' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='login'>Already have an account?<span>Login Here</span></p>

      </div>
    </div>
  )
}
export default LoginSignup
import React, { useState } from 'react'
import '../app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const [nameValue , setNameValue]= useState('');
  const [passwordValue , setPasswordValue]= useState('');


  const handleSubmit=(e)=>{
      console.log(nameValue);
      console.log(passwordValue);
    setNameValue("");
e.preventDefault();
alert('Thank you')
  };    
  return (
    <div className="login-area">

      <div className="user-login">
        <div className="login-div">
          <div className="login-title">
            <div className="login-title-name">
              User Login
            </div>
          </div>
          <form onSubmit={handleSubmit} >
            <div className="input-field">
              <div className="email-address">
                <FontAwesomeIcon icon={faEnvelope} />
                <input type="email" name='email' onChange={(name)=>setNameValue(name.target.value)} value={nameValue} placeholder='Email' />
              </div>
              <div className="password">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" name='password' onChange={(password)=>setPasswordValue(password.target.value)} placeholder='Password' />
                {/* value={userLogin.password} */}

              </div>
            </div>
            <div className="forget">Forgot Password ?</div>

            <div className="button" >
              <button className="login-btn" >Login</button>
            </div>
          </form>
          <div className="create">Create an account</div>
        </div>
      </div>

    </div>

  )
}

export default Login
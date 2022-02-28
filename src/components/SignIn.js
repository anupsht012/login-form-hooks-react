import React, { useState } from 'react'
import '../app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {

  const handleChange = (event) => {
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setUserLogin({ ...userLogin, [name]: value })

  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  const [records, setRecords] = useState([]);




  const handleSubmit = (event) => {
  
    const newRecord = { ...userLogin, id: new Date().getTime().toString() }
    // console.log(records);

    setRecords([...records, newRecord])
    console.log(records);

    setUserLogin({ email: "", password: "" })

    
    event.preventDefault();
  }

//   const handleChange = (event) => {
//       console.log(event.target.value);
     
//   }
//   const [userLogin, setUserLogin] = useState({
//     name :'',
//     value:''
//   })

// const handleSubmit=(e)=>{
// e.preventDefault();
// console.log()

// }


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
                <input type="email" name='email' onChange={handleChange} placeholder='Email' />
              </div>
              <div className="password">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" name='password'  onChange={handleChange} placeholder='Password' />
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

export default SignIn
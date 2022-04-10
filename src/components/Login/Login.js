import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
     
    const location = useLocation();
    const from  = location.state?.from?.pathname || '/'; // location na paile home page a thakbe
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if(user){
       navigate(from, {replace: true} );  //aikhane ashar sob history delete kore dibe
    }
    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
  return (
    <div className="form-container">
      <div className="">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur}  type="email" name="email" id="" required />
          </div>
     
      
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur}  type="password" name="password" id="" required />
          </div>
          <p style={{color: 'red'}}>{error?.message}</p>
          {
              loading && <p>Loading...</p>
          }
          <input className="form-submit" type="submit" value="login" />
        </form>
        <p>New To Ema-John? <Link className="form-link" to = "/signup">create an account.</Link></p>
      </div>
    </div>
  );
};

export default Login;

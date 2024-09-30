import React, { useState,useEffect } from 'react';
import "./Login.css";
import logo from "../../../assets/logo.png";
import { login, signup } from '../../../firebase';
import {auth} from '../../../firebase'
import { Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

function Login() {
  const [Signstate, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (Signstate === "sign up" && name.trim() === "") {
      errors.name = "Name is required.";
    }
    if (email.trim() === "") {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid.";
    }
    if (password.trim() === "") {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const user_auth = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (Signstate === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };
  const navigate=useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("log in ")
        navigate("/")
      }else{
        console.log("log out")
        navigate("/login")
      }
    })
  },[])
  

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="Logo" />
      <div className="login-form">
        <h1>{Signstate}</h1>
        <form action="">
          {Signstate === "sign up" && (
            <div>
              <input
                type="text"
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder='Your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button onClick={user_auth} type='submit'>{Signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {Signstate === "Sign In" ? (
            <p>New to Netflix? <span onClick={() => setSignState("sign up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

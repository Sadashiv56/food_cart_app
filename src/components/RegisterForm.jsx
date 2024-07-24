import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { error, success } from "../utils/messages";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pwd, setPwd] = useState("");
  let navigate = useNavigate();

  async function signup(e) {
    e.preventDefault();

    if (name == "" || email == "" || pwd == "") {
      error("All Fields Are Required");
      return
    }

    try {
      let userCredentails = await createUserWithEmailAndPassword(auth,email,pwd)
      
      await updateProfile(userCredentails.user,{
        displayName:name,
      })
      success("Customer Registration Successfull")
      navigate("/loginuser")
    } catch (err) {
      error("Registration Failed");
    }
  }


  
  return (
    <>
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={signup}>
          <div className="form-group">
            <input
              value={name}
              type="text"
              className="form-control form-control-light"
              placeholder="Username"
              name="username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              value={email}
              type="email"
              className="form-control form-control-light"
              placeholder="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              value={pwd}
              type="password"
              className="form-control form-control-light"
              placeholder="Password"
              name="password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-custom primary">
            Sign Up
          </button>
          <div className="auth-seperator">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button type="button" className="ct-social-login facebook">
              <i className="fab fa-facebook-f" /> Continue with Facebook{" "}
            </button>
            <button type="button" className="ct-social-login google">
              <i className="fab fa-google" /> Continue with Google
            </button>
          </div>
          <p>
            Already have an account? <a href="login.html">Login</a>{" "}
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;

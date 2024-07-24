import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { error, success } from "../utils/messages";
import { auth } from '../firebase/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';


function ForgetPasswordForm() {

  let [email, setEmail] = useState("")


  let navigate = useNavigate()
  
  async function forgetpassword(e) {
    e.preventDefault()
    if (email === '') {
      error('Email is required');
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, email);
      success('Password reset email sent');
      navigate("/userlogin")
    } catch (err) {
      error("Password not forget")
    }
  }

  return (
    <>
      <div className="auth-form">
        <h2>Forget Password</h2>
        <form onSubmit={forgetpassword}  >
          <div className="form-group">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control form-control-light"
              placeholder="Email"
              name="username"
            />
          </div>
          <button type="submit" className="btn-custom primary">
            Forget Password
          </button>

        </form>
      </div>
    </>
  );
}

export default ForgetPasswordForm;

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { error, success } from "../utils/messages";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useStore";
import { GoogleAuthProvider } from "firebase/auth";


function LoginForm() {
  let [email, setEmail] = useState();
  let [pwd, setPwd] = useState();

  let login = useUserStore((state)=>state.login)

  let navigate = useNavigate();

  let provider = new GoogleAuthProvider();
  async function signin(e) {
    e.preventDefault();

    if (email == "" || pwd == "") {
      error("All Fields Are Required");
      return;
    }

    try {
      let userCredentails = await signInWithEmailAndPassword(auth, email, pwd);

      if (userCredentails.user) {
        login(userCredentails.user)
        success("Login Sucess");
        navigate("/")
      }
    }catch(err){
      error("Login Failed")
    }
  }

  async function googlesigin(){
    let result = await signInWithPopup(auth,provider)
    if(result.user != null){
      login(result.user)
      success("Login Successfull")
      navigate("/")
    }
  }
  return (
    <>
      <div className="auth-form">
        <h2>Log in</h2>
        <form method="post" onSubmit={signin}>
          <div className="form-group">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control form-control-light"
              placeholder="Username"
              name="username"
              
            />
          </div>
          <div className="form-group">
            <input
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              className="form-control form-control-light"
              placeholder="Password"
              name="password"
              
            />
          </div>
          <Link to="/forgetpassword">Forgot Password?</Link>
          <button type="submit" className="btn-custom primary">
            Login
          </button>
          <div className="auth-seperator">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button type="button" className="ct-social-login facebook">
              <i className="fab fa-facebook-f" /> Continue with Facebook{" "}
            </button>
            <button onClick={googlesigin} type="button" className="ct-social-login google">
              <i className="fab fa-google" /> Continue with Google
            </button>
          </div>
          <p>
            Dont have an account? <a href="register.html">Create One</a>{" "}
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginForm;

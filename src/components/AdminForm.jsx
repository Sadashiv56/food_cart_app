import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { error, success } from "../utils/messages";
import { collection,getDocs,query, where } from "firebase/firestore";
import {  useUserStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

function AdminForm() {
  let [unm, setUnm] = useState("");
  let [pwd, setPwd] = useState("");

  let navigate = useNavigate()
  let login = useUserStore((state)=>state.login)


  async function signin(e){
    e.preventDefault()

    let colref = collection(db,"admin")

    let q = query(colref,where("unm","==",unm),where("pwd","==",pwd))

    let snapShot = await getDocs(q)

    console.log(snapShot)

    if (snapShot.docs.length>0) {
      login(unm)
      success("Admin Login Sucessfull")
      navigate("/adminorder")
    }else{
      error("Admin Login failed")
    }
  }
  
  return (
    <>
      <div className="auth-form">
        <h2>Admin Login</h2>
        <form onSubmit={signin}>
          <div className="form-group">
            <input
              value={unm}
              onChange={(e) => setUnm(e.target.value)}
              type="text"
              className="form-control form-control-light"
              placeholder="Username"
              name="username"
              defaultValue
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
              defaultValue
            />
          </div>
          <a href="#">Forgot Password?</a>
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
            <button type="button" className="ct-social-login google">
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

export default AdminForm;

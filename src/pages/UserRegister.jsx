import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";
import RegisterForm from "../components/RegisterForm";

function UserRegister() {

  return (
    <>
      <div>
        <Navbar />
        <div className="aside-overlay aside-trigger" />
        <TopNav />
        <div className="section">
          <div className="imgs-wrapper">
            <img
              src="/slices/assets/img/veg/11.png"
              alt="veg"
              className="d-none d-lg-block"
            />
            <img
              src="/slices/assets/img/prods/3.png"
              alt="veg"
              className="d-none d-lg-block"
            />
          </div>
          <div className="container">
            <div className="auth-wrapper">
              <div
                className="auth-description bg-cover bg-center dark-overlay dark-overlay-2"
                style={{
                  backgroundImage: 'url("/slices/assets/img/auth.jpg")',
                }}
              >
                <div className="auth-description-inner">
                  <i className="flaticon-chili" />
                  <h2>Hello World!</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
                <RegisterForm/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UserRegister;

import './App.css'
import UserRegister from './pages/UserRegister'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginUser from './pages/LoginUser';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import UserCart from './pages/UserCart';
import AdminLogin from './pages/AdminLogin';
import UserHome from './pages/UserHome';
import UserCheckout from './pages/UserCheckout';
import UserMenu from './pages/UserMenu';
import UsermenuDetails from './pages/UsermenuDetails';
import UserOrder from './pages/UserOrder';
import ForgetPassword from './pages/ForgetPassword';
import AdminOrder from './pages/AdminOrder';
import UserAbout from './pages/UserAbout';
import UserContact from './pages/UserContact';

function App() {

  return (
    <>
    <ToastContainer/>
      <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/about" element={<UserAbout />} />
          <Route path="/contact" element={<UserContact />} />
          <Route path="/menu" element={<UserMenu />} />
          <Route path="/menu/:id" element={<UsermenuDetails />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/usercart" element={<UserCart />} />
          <Route path="/usercheckout" element={<UserCheckout />} />
          <Route path="/order" element={<UserOrder />} />
          <Route path="/adminOrder" element={<AdminOrder />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
    </>
  )
}

export default App

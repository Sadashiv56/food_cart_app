import { Link, NavLink, useNavigate } from "react-router-dom"
import { auth } from '../firebase/firebaseConfig';
import { success } from "../utils/messages";
import { useUserStore } from "../store/useStore";
import { useCartStore } from "../store/cartStore";


function TopNav() {
    let cart = useCartStore((state)=>state.cart)
    let isloggedin = useUserStore((state)=>state.isloggedin)
    let user = useUserStore((state)=>state.user)
    let logout = useUserStore((state) => state.logout)
    console.log(isloggedin)


    let navigate = useNavigate()

    function signout() {
      auth.signOut()
      logout()
    }

  return (
    <header className="main-header header-1">
      <div className="top-header">
        <div className="container">
          <div className="top-header-inner">
            <div className="top-header-contacts">
              <ul className="top-header-nav">
                <li>
                  <a className="p-0" href="tel:+123456789">
                    <i className="fas fa-phone mr-2" /> +123 456 789
                  </a>
                </li>
              </ul>
            </div>
            <ul className="top-header-nav header-cta">
              <li> {isloggedin ?<NavLink to="/adminlogin">Welcome {user.displayName}</NavLink> :
                <NavLink to="/adminlogin">Admin Login</NavLink> }
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/slices/assets/img/logo.png" alt="logo" />
          </Link>
          {/* Menu */}
          <ul className="navbar-nav">
            <li className="menu-item menu-item-has-children">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu-item menu-item-has-children">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="menu-item menu-item-has-children mega-menu-wrapper">
              <NavLink to="/menu">Menu</NavLink>
            </li>
        
            <li className="menu-item">
              <Link to="/contact">Contact Us</Link>
            </li>
            {isloggedin ?
              <li className="menu-item">
                <NavLink onClick={signout} to="/loginuser">Logout</NavLink>
              </li> : (

                <>
                  <li className="menu-item">
                    <NavLink to="/loginuser">Login</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/register">SignUp</NavLink>
                  </li>
                </>
              )}


              
          </ul>


          <div className="header-controls">
            <ul className="header-controls-inner">
              <li onClick={()=>{
                navigate("/usercart")
              }} className="cart-dropdown-wrapper cart-trigger">
                    <span className="cart-item-count">{cart.length}</span>

                  <i className="flaticon-shopping-bag" /> 
              </li>
              <li className="search-dropdown-wrapper search-trigger">
                <i className="flaticon-search" />
              </li>

            </ul>
            {/* Toggler */}
            <div className="aside-toggler aside-trigger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default TopNav
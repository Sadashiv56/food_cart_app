import { BrowserRouter as Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <aside className="main-aside">
      <a className="navbar-brand" href="index-2.html">
        <img src="/slices/assets/img/logo.png" alt="logo" />
      </a>
      <div className="aside-scroll">
        <ul>
          <li className="menu-item menu-item-has-children">
            <a href="#">Home</a>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">About</a>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Menu</a>
          </li>
          <li className="menu-item">
            <a href="locations.html">Contact</a>
          </li>
          <li className="menu-item">
            <a href="locations.html">Login</a>
          </li>
          <li className="menu-item">
            <a href="contact-us.html">Register</a>
          </li>
        </ul>
      </div>
    </aside>
    </>
  )
}

export default Navbar

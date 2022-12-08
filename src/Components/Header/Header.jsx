import React, { useState } from 'react';
import './Header.css';
// import logo from '../../Icons/logo.svg';
import transparent_logo from '../../Icons/transparent_logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  const [open,setOpen] = useState(false)

  const CloseMenu = ()=>{
    setOpen(false)
  }
  return (

    <section className='header-section'>
      <div className="header">
        <label htmlFor="click" className='menu-btn' onClick={()=>setOpen(!open)}>
          {!open?
          <i className="fa-solid fa-bars"></i>:
          <i className="fa-solid fa-xmark"></i>
        }
        </label>
        <div className="log" onClick={CloseMenu}>
          <Link to='/'>
            <img src={transparent_logo} alt="NA" /></Link>
        </div>
        <div className={"naivations"+(open?" open-menu":"")}>
          <ul onClick={CloseMenu}>
            {
              <li>
                <Link to='/' className='invisible-logo'><img src={transparent_logo} alt="" /></Link>
              </li>
            }
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/search'}>Search</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
          {/* <div className="search-box">
            <input type="text" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div> */}
        </div>


      </div>
    </section>
  )
}

export default Header;
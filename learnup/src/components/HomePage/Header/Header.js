import React from 'react'
import './Header.css'
import {FaArrowDown, FaUser} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return <>
   <header className='template-header'>
      <div className='header-navigation'>
        <div className='container container-1278'>
          <div className='header-inner'>
            <div className='header-left'>
            <div className='website-name'>Learnup</div>

              <div className='course-active'>
                <a href='/'>Courses <FaArrowDown className='down-arrow'/>
</a>
                <div className='mega-menu'>
                <h6 className='border-bottom-soft-white fw-semibold m-b-10 p-b-10 m-l-25 m-r-25'>
                                    Courses By Categories
                                </h6>
                  <div className='row g-0'>
                    <div className='col-md-6'>
                      <ul className='sub-menu'>
                        <li><a href='/'>ECAT</a></li>
                        <li><a href='/'>MCAT</a></li>
                        <li><a href='/'>NTS</a></li>
                      </ul>
                    </div>
                    <div className='col-md-6'>
                      <ul className='sub-menu'>
                        <li><a href='/'>NET</a></li>
                        <li><a href='/'>SAT</a></li>
                        <li><a href='/'>IQ</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className='nav-menu'>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Blog</a></li>
                <li><a href='/'>Courses</a></li>
                <li><a href='/'>Contact Us</a></li>
                <li><div className='login-active'>
                <NavLink to='/login'>Log < FaUser className='down-arrow'/></NavLink></div></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header
import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"


const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
            
        </div>
        <div className="container">
        
            {/* <img src={logo} width="5%" alt="" /> */}

            {/* <img  src="https://mrcet.com/images/New/Top.jpg" className="headerimg" width="30%" alt="" /> */}

        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/dashboard' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Dashboard</span>
            </Link>

            <div className='nav-list'>
              <Link to='/datalist' className='nav-link '>
                <i className='fas fa-list-squares nav-link-icon'></i>
                <span className='nav-link-name'>DataList</span>
              </Link>
              <Link to='/users' className='nav-link'>
                <i className='fas fa-users nav-link-icon'></i>
                <span className='nav-link-name'>Students</span>
              </Link>
              <Link to='/analytics' className='nav-link'>
                <i className='fas fa-chart-area nav-link-icon'></i>
                <span className='nav-link-name'>Charts</span>
              </Link>
            </div>
          </div>

          <Link to='/' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;
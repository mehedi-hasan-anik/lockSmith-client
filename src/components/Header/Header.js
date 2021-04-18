import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
        <div className="row full-header-area">
             <div className="col-lg-4 col-md-12 col-sm-12 logo-area">
                  <h1 style={{textAlign:'center'}}>Lock Smith</h1>
             </div>
             <div className="col-lg-8 col-md-12 col-sm-12 nav-area">
                 <div>
                        <nav>
                            <ul>
                                <li>
                                <Link to="/home" style={{color:'#fff', fontSize:'20px'}}>Home</Link>
                                </li>
                                <li>
                                <Link to="/about" style={{color:'#fff', fontSize:'20px'}}>About Us</Link>
                                </li>
                                <li>
                                <Link to="/Projects" style={{color:'#fff', fontSize:'20px'}}>Projects</Link>
                                </li>
                                <li>
                                <Link to="/contact" style={{color:'#fff', fontSize:'20px'}}>Contact</Link>
                                </li>
                                <li>
                                <Link to="/admin" style={{color:'#fff', fontSize:'20px'}}>Admin</Link>
                                </li>
                                <li>
                                   
                                   <Link to="/login" style={{color:'#fff', fontSize:'20px'}}>Login</Link>
                                   
                                </li>
                            </ul>
                      </nav>
                 </div>
             </div>
        </div>
    </div>
    );
};

export default Header;
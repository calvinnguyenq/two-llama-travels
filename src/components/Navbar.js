import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {

    return (
            <nav className='navbar'>
                <div className='nav-container'>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-link'>
                            Sign Up
                        </Link>
                    </li>
                
                    <Link to='/' className='navbar-logo'>
                        TwoLlama Travels
                    </Link>
                   
                   
                    <li className='nav-item'>
                        <Link to='/log-in' className='nav-link'>
                            Log In
                        </Link>
                    </li>
                    
                </div>
            </nav>
    )
}

export default Navbar


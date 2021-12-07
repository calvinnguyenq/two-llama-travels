import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button, List } from '@material-ui/core';
import { Add, Remove, Videocam, VideocamOff } from '@material-ui/icons';
import { HamburgerArrow } from 'react-animated-burgers'
import Sidebar from 'react-sidebar';

function changeSizeByBtn() {
    document.getElementById('text').style.fontSize = 95 +'px';
                
}
function decreaseSizeByBtn() {
    document.getElementById('text').style.fontSize = 50 +'px';
}

function Navbar() {

    const [isOpen, setOpen] = useState(false);
    const [isVideoOn, setVideoOn] = useState(true);
    
    const handleClick = () => {
        setOpen(!isOpen);
    };

    const toggleVideo = () => {
        if (!isVideoOn) {
            document.getElementById('vid').style.display = "block";
            setVideoOn(true);
        } else {
            document.getElementById('vid').style.display = "none";
            setVideoOn(false);
        }
    }

    return (
        <div>
            <nav className='navbar'>
                <div style={{ justifySelf: 'flex-start', alignSelf: 'center' }}> 
                    <HamburgerArrow isActive={isOpen} onClick={handleClick} barColor="white"/>
                </div>
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
            <Sidebar 
                sidebar={  
                    <List>
                        <p style={{ textAlign: 'center', color: 'white'}}>Text Size</p>
                        <div style={{ display: 'flex' }}>
                            <Button style={{margin: '5px'}} variant="contained" onClick={changeSizeByBtn} ><Add /></Button>
                            <Button style={{margin: '5px'}} variant="contained" onClick={decreaseSizeByBtn}><Remove /></Button>
                        </div>
                        <div style={{ marginTop: '15px', textAlign: 'center', color: 'white' }}>Optimize</div>
                        {!isVideoOn && <Button style={{ margin: '5px', width: '90%' }} variant="contained" onClick={toggleVideo}><Videocam /></Button>}
                        {isVideoOn && <Button style={{ margin: '5px', width: '90%' }} variant="contained" onClick={toggleVideo}><VideocamOff /></Button>}
                    </List>
                }
                open={isOpen}
                styles={{ root: { top: "80px", right: "90%", bottom: "67%" }, sidebar: { background: "rgba(0,0,0,0.5)" }, content: { top: '10px' } }}
            >
                <div id="blanksoidontgetanerror"></div>
            </Sidebar>
        </div>
    )
}

export default Navbar;
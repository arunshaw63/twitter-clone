import React from 'react';
import './LoginSignup.css';
import twitter from './images/twitter.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";

function LoginSignup() {
    return (
        <div>
            <div className="LoginSignup_upper">
            <div className="left_sidebar">

              <img src={twitter} alt="logo" />
            </div>

            <div className="right_sidebar">
                <TwitterIcon />
                <h1>Happening now</h1>
                <h3>Join Twitter today.</h3>
                <div className="sidebar_button">
                <Button variant="outlined" className="sidebar__signup" >Sign up</Button>
                <Link exact to="/login" ><Button variant="outlined" className="sidebar__login" >Log in</Button></Link>
                </div>
                

            </div>
            </div> 
            <div className="footer">
                
            </div>   
            
        </div>
    )
}

export default LoginSignup

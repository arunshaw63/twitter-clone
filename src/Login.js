import React,{useState, useEffect} from 'react';
import './Login.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Button} from '@material-ui/core';

function Login() {
    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const {email, password} = user;
    
    const onInputChange=e=> {
        setUser({...user,[e.target.name] : e.target.value});
        }

    return (
        <div className="login">

            <TwitterIcon />
            <h3>Log in to Twitter</h3>
              
        <form className="login_form">
            <input 
            value={email}
            onChange={onInputChange}
            type="text" 
            placeholder="Phone, email, or username" /><br></br>

            <input 
            value={password}
            onChange={onInputChange}
            type="text" 
            className="login_pass" 
            placeholder="Password" /><br></br>

            <Button variant="outlined" className="login_button" >Log in</Button>

        </form>
            
        </div>
    )
}

export default Login

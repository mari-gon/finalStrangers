import React, {useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import '../style/Register.css'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const Register = function () {
    const [user, setUser] = useState({
        user:{
            username: '',
            password: '',
            //delete below here
            confirmPassword: '',
        }
    });
    
    const usernameRegister = (event) => {
        setUser((user) => ({
            user: {
                username: event.target.value,
                password: user.user.password,
                //delete below here
                confirmPassword: user.user.confirmPassword,
            }
        }));
    };
    
    const passwordRegister = (event) => {
        setUser((user) => ({
            user: {
                username: user.user.username,
                password: event.target.value,
                //delete below here
                // confirmPassword: event.target.value,
            }
        }));
    };

    const [registered, setRegistered] = useState(false)

    async function registerUser(user){
        //delete below here
        // if (password === confirmPassword){
          //Till here
        try {
            let response = await axios.post(`${BASE_URL}/users/register`, user)
            let token = response.data.data.token
            localStorage.setItem('token', token)
            setRegistered(true)
        } catch (error){
            alert('Username already taken. Please try again.')
        } 
    // }
}
    if (registered === true) {
        return <Redirect to='/login' />
    }

    return (
        <div id="register">
            <h1 id="registration">Registration</h1>
            <form className='registerLabel'>
                <label htmlFor="registerUsername">Username: </label>
                    <input type="text" id="registerUsername" placeholder='Type your user name' name="registerUsername"
                     onChange={usernameRegister} value={user.user.username}/><br/>

                <label htmlFor="registerPassword">Password: </label>
                    <input required minLength="8" type="password" 
                    id="registerPassword" placeholder='Type your password'
                    name="registerPassword" value={user.user.password} onChange={passwordRegister}/><br/>

                {/*DELETE THE NEXT TWO LINES */}
                {/* <label htmlFor="registerConfirmPassword">Confirm Password:</label>
                    <input required minLength="8" type="password" 
                    id="registerConfirmPassword" placeholder='Password must match'name="registerPassword" 
                    value={user.user.confirmPassword} onChange={passwordRegister}/><br/> */}

                <input id="Submit" type="Submit" onClick={(event)=>{
                    event.preventDefault()
                    registerUser(user)
                }}/>
            </form>
        </div>
    )
}

export default Register 
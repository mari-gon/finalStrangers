import React, {useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const Login = function (props) {
    const {signedIn, setSignedIn} = props

    const [user, setUser] = useState({
        user:{
            username: '',
            password: ''
        }
    })

    const handleUserNameLogin = (event) => {
        setUser((user) => ({
            user: {
                username: event.target.value,
                password: user.user.password
            }
        }))
    }

    const handlePasswordLogin = (event) => {
        setUser((user) => ({
            user: {
                username: user.user.username,
                password: event.target.value
            }
        }))
    }

    async function loginUser(user) {
        try {
            let response = await axios.post(`${BASE_URL}/users/login`, user)
            let token = response.data.data.token
            localStorage.setItem('token', token)
            setSignedIn(true)
        } catch (error) {
            console.error(error)
            alert('Incorrect Username or Password. Please try again.')
        } 
    }

    if (signedIn === true) {
        return <Redirect to='/posts' />
    }

    return (
        <div id="login">
            <h1>Please Login Below</h1>
            <form onSubmit={(event) => {
                    event.preventDefault()
                    loginUser(user)
                }}>
                <label htmlFor="loginUsername">Username </label>
                <input required type="text" id="loginUsername" name="loginUsername" onChange={handleUserNameLogin} value={user.user.username}/><br/>
                <label htmlFor="loginPassword">Password </label>
                <input required type="password" id="loginPassword" name="loginPassword" onChange={handlePasswordLogin} value={user.user.password}/><br/>
                <input type="Submit" />
            </form>
        </div>
    )
}

export default Login 
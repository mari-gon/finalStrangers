import React , { useState, useEffect } from 'react';
import '../style/Header.css'

import {loginRegisterUser, myData , getPosts} from '../Api';
import { setLocalStorage } from '../utils'

const Header = (props) => {
    const {username, password, setUsername, setPassword} = props
    const [submitButton, setSubmitButton] = useState('');

    async function submitForm() {
        let user = {
            user: {
                'username': username,
                'password': password
            }
        }
        let returnToken = await loginRegisterUser(submitButton, user);
            if(returnToken) {
                await setCurrentUser(username);
                let posts = await getPosts();
                let data = await myData();
                setPosts(posts);
                setAccountData(data);
                setLocalStorage('token',returnToken);
                setLocalStorage('user', username);
            }
    }

    return (
        <header>
            <h1>Stranger's Things</h1>
            <button onClick={() => {
                myData()
            }}>My Data</button>
            <form className='signup-login' onSubmit={(event) => {
                event.preventDefault();
                submitForm();
            }}>
                <div className='input-group'>
                    <label htmlFor='username-input'>Username:</label>
                    <input type='text' placeholder='username' id='username-input' onChange={(event) => {
                        setUsername(event.target.value);
                    }}></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='password-input'>Password:</label>
                    <input type='password' placeholder='password' id='password-input' onChange={(event) => {
                        setPassword(event.target.value);
                    }}></input>
                </div>
                <button id='login' onClick={(event) => {
                    setSubmitButton(event.target.id);
                }}>Login</button>
                <button id='register' onClick={(event) => {
                    setSubmitButton(event.target.id);
                }}>Register</button>
            </form>
        </header>
    )
}

export default Header
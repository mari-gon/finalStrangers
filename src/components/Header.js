// import React , { useState, useEffect } from 'react';
// import '../style/Header.css'

// import {loginRegisterUser, myData , getPosts} from '../Api';
// import { setLocalStorage } from '../utils'

// const Header = (props) => {
//     const {username, password, setUsername, setPassword} = props
//     const [submitButton, setSubmitButton] = useState('');

//     async function submitForm() {
//         let user = {
//             user: {
//                 'username': username,
//                 'password': password
//             }
//         }
//     //     let returnToken = await loginRegisterUser(submitButton, user);
//     //         if(returnToken) {
//     //             await setCurrentUser(username);
//     //             let posts = await getPosts();
//     //             let data = await myData();
//     //             setPosts(posts);
//     //             setAccountData(data);
//     //             setLocalStorage('token',returnToken);
//     //             setLocalStorage('user', username);
//     //         }
//     // }

//     let returnToken = await loginRegisterUser(submitButton, user);
//     if(returnToken) {
//         await setCurrentUser(username);
//         let posts = await getPosts();
//         let data = await myData();
//         setPosts(posts);
//         setAccountData(data);
//         setLocalStorage('token',returnToken);
//         setLocalStorage('user', username);
//     }
// }

//     return (
//         <header>
//             <h1>Stranger's Things</h1>
//             <button onClick={() => {
//                 myData()
//             }}>My Data</button>
//             <form className='signup-login' onSubmit={(event) => {
//                 event.preventDefault();
//                 submitForm();
//             }}>
//                 <div className='input-group'>
//                     <label htmlFor='username-input'>Username:</label>
//                     <input type='text' placeholder='username' id='username-input' onChange={(event) => {
//                         setUsername(event.target.value);
//                     }}></input>
//                 </div>
//                 <div className='input-group'>
//                     <label htmlFor='password-input'>Password:</label>
//                     <input type='password' placeholder='password' id='password-input' onChange={(event) => {
//                         setPassword(event.target.value);
//                     }}></input>
//                 </div>
//                 <button id='login' onClick={(event) => {
//                     setSubmitButton(event.target.id);
//                 }}>Login</button>
//                 <button id='register' onClick={(event) => {
//                     setSubmitButton(event.target.id);
//                 }}>Register</button>
//             </form>
//         </header>
//     )
// }

// export default Header

import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import '../style/Header.css'

const Header = ({signedIn, setSignedIn}) => {
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSignedIn(true)
        }}, [])
    
    function logOut () {
        localStorage.removeItem('token')
        setSignedIn(false)
    }
   
    return (
        <>
            <div id='title'>
                <h1>Stranger's Things</h1>
            </div>
            <div id='otherLinks'>
                <Link to='/posts'><h2>Posts</h2></Link>
                {!signedIn ? <> <Link to='/login'><h2 id='headerlogin'>Log In</h2></Link>
                <Link to='/register'><h2 id='signUp'>Register</h2></Link></> : <><Link to='./profile'><h2 id='profile'>Profile</h2></Link>
                <Link to='/login'><h2 id='logOut' onClick={() => {logOut()}}>Log Out</h2></Link></>}
            </div>
        </>
    )
}

export default Header
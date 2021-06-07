import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Welcome from './Welcome'

const currentUser = localStorage.getItem('currentUser')
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
                <Link to='/register'><h2 id='signUp'>Register</h2></Link>
                </> : <>
                <Link to='/login'><h2 id='logOut' onClick={() => {logOut()}}>Log Out</h2></Link></>}
                {currentUser ? <Welcome />: null}

            </div>
        </>
    )
}

export default Header
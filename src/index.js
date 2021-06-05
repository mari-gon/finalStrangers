import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from './App'
import NewPosts from './components/NewPost'

ReactDOM.render(
    <Router>
        <App />
        {/* <NewPosts add info so it only adds during logged in and style to the right> */}
    </Router>,
    document.getElementById("app")
)


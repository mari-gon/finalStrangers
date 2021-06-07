import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios' 
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Posts from './components/Posts'
import NewPost from './components/NewPost'

import '../src/style/App.css'

const App = () =>{
    const [signedIn, setSignedIn] = useState(false)
    return(
        <div>
            <header>
                <Header signedIn={signedIn} setSignedIn={setSignedIn}/>
            </header>
        <main>
            <Switch>
                <Route path='/register' component={Register}/>
                <Route path='/login' render={()=> <Login signedIn={signedIn} setSignedIn={setSignedIn}/>} />
                <Route path='/posts' component={Posts} />
                <Route path='/newpost' component={NewPost} />
                <Route path='/' component={Posts} />
            </Switch>
        </main>
        </div>
    )
}

export default App
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../style/Welcome.css'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const Welcome = function () {
    let token = localStorage.getItem('token')

    const [currentUser, setCurrentUser] = useState('')

    async function getCurrentUser() {
        try {
            let { data } = await axios.get(`${BASE_URL}/users/me`, {
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            })
            setCurrentUser(data.data.username)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getCurrentUser()
    }, [])

    return (
        <h1 id='welcome'>Welcome Back  {currentUser}</h1>
    )

}

export default Welcome
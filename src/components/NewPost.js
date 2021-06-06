import React, {useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom'

import '../style/newposts.css'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'
const token = localStorage.getItem('token')


const NewPost = function () {
    const [post, setPost] = useState({
        post: {
            title: '',
            description: '',
            price: '',
            location: '',
            willDeliver: false,
        }
    })

    const handleTitle = (event) => {
        setPost((post) => ({
            post: {
                title: event.target.value,
                description: post.post.description,
                price: post.post.price,
                location: post.post.location,
                willDeliver: post.post.willDeliver,
            }
        }))
    }

    const handleDescription = (event) => {
        setPost((post) => ({
            post: {
                title: post.post.title,
                description: event.target.value,
                price: post.post.price,
                location: post.post.location,
                willDeliver: post.post.willDeliver,
            }
        }))
    }

    const handlePrice = (event) => {
        setPost((post) => ({
            post: {
                title: post.post.title,
                description: post.post.description,
                price: event.target.value,
                location: post.post.location,
                willDeliver: post.post.willDeliver,
            }
        }))
    }

    const handleLocation = (event) => {
        setPost((post) => ({
            post: {
                title: post.post.title,
                description: post.post.description,
                price: post.post.price,
                location: event.target.value,
                willDeliver: post.post.willDeliver,
            }
        }))
    }

    const handleWillDeliver = (event) => {
        setPost((post) => ({
            post: {
                title: post.post.title,
                description: post.post.description,
                price: post.post.price,
                location: post.post.location,
                willDeliver: event.target.value,
            }
        }))
    }

    async function createPost(post){
        try{
            let response = await axios.post(`${BASE_URL}/posts`, post, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            let addedPost = response.data.data.post
            console.log(addedPost)
        }catch(error){
            console.error(error)
        }
    }


    return (
        <div id="createPost">
            <h1 id='createPo'>Create Post</h1>
            <form className='createLabel'>
                <label htmlFor="title">Title: </label>
                    <input required type="text" id="title" 
                    name="title" onChange={handleTitle} 
                    value={post.post.title}/><br/>

                <label htmlFor="description">Description: </label>
                    <input required type="text" id="description"
                    name="description" onChange={handleDescription} 
                    value={post.post.description}/><br/>

                <label htmlFor="price">Price: </label>
                    <input required type="text" id="price" 
                    name="price" onChange={handlePrice} 
                    value={post.post.price}/><br/>

                <label htmlFor="location">Location: </label>
                    <input type="text" id="location" 
                    name="location" onChange={handleLocation} 
                    value={post.post.location}/><br/>

                <label htmlFor="willDeliver">Delivery Available: </label>
                    <input type="checkbox" id="willDeliver" 
                    name="willDeliver" onChange={handleWillDeliver} 
                    value={post.post.willDeliver}/><br/>

                <input id="Submit" type="Submit" onClick={(event)=>{
                    event.preventDefault()
                    createPost(post)
                }}/>
            </form>
        </div>
    )
}

export default NewPost
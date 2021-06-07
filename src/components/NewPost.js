import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom'
import {apiPost} from '../Api'
import Posts from './Posts'

import '../style/newposts.css'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'
const token = localStorage.getItem('token')

export default function NewPost() {

    const [ title , setTitle ] = useState('');
    const [ description , setDescription ] = useState('');
    const [ price , setPrice ] = useState('');
    const [ location , setLocation ] = useState('');
    const [ willDeliver , setWillDeliver ] = useState(false);
    const [ post, setPost ] = useState({
        
        'title' : '',
        'description' : '',
        'price' : '',
        'location' : '',
        'willDeliver' : false,
        
    })
    
        async function handleSubmit(event) {
            event.preventDefault();
            console.log(title, description, price, location);
            setPost(
             
                post.title =title,
                post.description = description,
                post.price = price,
                post.location = location,
                post.willDeliver = willDeliver,
             
            
            )
            console.log(post)
            await createPost(post);
            await clearForm();
            
        }
     async function clearForm(){
         setTitle('');
         setDescription('');
         setPrice('');
         setLocation('');
         setWillDeliver(false);
     }

    
    async function createPost(post){
       let newPost = {
           'post' : post
       }
        try{
            let response = await axios.post(`${BASE_URL}/posts`, newPost, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })            
        }catch(error){
            console.error(error)
        }
    }

    return (
        <div id="createPost">
            <h1 id='createPo'>Create Post</h1>
            <form className='createLabel' onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                    <input required type="text" id="title" 
                    name="title" onChange={(event) => setTitle(event.target.value)} 
                    value={title}/><br/>

                <label htmlFor="description">Description: </label>
                    <input required type="text" id="description"
                     name="description" onChange={(event) => setDescription(event.target.value)} 
                     value={description}/><br/>

                <label htmlFor="price" >Price: </label>
                    <input required type="text" id="price" 
                    name="price" onChange={(event) => setPrice(event.target.value)} 
                    value={price}/><br/>

                <label htmlFor="location">Location: </label>
                    <input type="text" id="location" 
                    name="location" onChange={(event) => setLocation(event.target.value)} 
                    value={location}/><br/>

                <label htmlFor="willDeliver">Delivery Available: </label>
                    <input type="checkbox" id="willDeliver" 
                    name="willDeliver" onChange={(event) => {let value  = event.target.value ==='on' ? true : false;
                    setWillDeliver(value)} }
                    /><br/>

                <input type="Submit" 
                 />
                
                   
            </form>
        </div>
    )
}


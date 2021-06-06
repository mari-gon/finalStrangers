import React, {useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom'
import {apiPost} from '../Api'
import Posts from './Posts'

import '../style/newposts.css'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'
const token = localStorage.getItem('token')


// const NewPost = function () {
    
    // Code being worked on
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
            
            // let posts = await createPost()
            // setTitle('');
            // setDescription('');
            // setPrice('');
            // setLocation('');
            // setWillDeliver('');

            // console.log(title, description, price, location, willDeliver)
        }
    
    
   /* Old code to bring back */
    // const [post, setPost] = useState({
    //     post: {
    //         title: '',
    //         description: '',
    //         price: '',
    //         location: '',
    //         willDeliver: false,
    //     }
    // })

    // const handleTitle = (event) => {
    //     setPost((post) => ({
    //         post: {
    //             title: event.target.value,
    //             description: post.post.description,
    //             price: post.post.price,
    //             location: post.post.location,
    //             willDeliver: post.post.willDeliver,
    //         }
    //     }))
    // }

    // const handleDescription = (event) => {
    //     setPost((post) => ({
    //         post: {
    //             title: post.post.title,
    //             description: event.target.value,
    //             price: post.post.price,
    //             location: post.post.location,
    //             willDeliver: post.post.willDeliver,
    //         }
    //     }))
    // }

    // const handlePrice = (event) => {
    //     setPost((post) => ({
    //         post: {
    //             title: post.post.title,
    //             description: post.post.description,
    //             price: event.target.value,
    //             location: post.post.location,
    //             willDeliver: post.post.willDeliver,
    //         }
    //     }))
    // }

    // const handleLocation = (event) => {
    //     setPost((post) => ({
    //         post: {
    //             title: post.post.title,
    //             description: post.post.description,
    //             price: post.post.price,
    //             location: event.target.value,
    //             willDeliver: post.post.willDeliver,
    //         }
    //     }))
    // }

    // const handleWillDeliver = (event) => {
    //     setPost((post) => ({
    //         post: {
    //             title: post.post.title,
    //             description: post.post.description,
    //             price: post.post.price,
    //             location: post.post.location,
    //             willDeliver: event.target.value,
    //         }
    //     }))
    // }

        

    // async function createPost(post){
    //     try{
    //         let response = await axios.post(`${BASE_URL}/posts`, post, {
    //             headers: {
    //                 Authorization: 'Bearer ' + token,
    //             }
    //         })
    //         let addedPost = response.data.data.post
    //         // console.log(addedPost)
            
    //     }catch(error){
    //         console.error(error)
    //     }
    // }

    // async function clearPostForm() {
    //     setPost((post) => ({
    //         title: '',
    //         description:'',
    //         price: '',
    //         location: '',
    //         willDeliver: false,
    //     }))
    // } 
/* Old code to bring back */
    // return (
    //     <div id="createPost">
    //         <h1>Create Post</h1>
    //         <form>
    //             <label htmlFor="title">Title: </label>
    //                 <input required type="text" id="title" 
    //                 name="title" onChange={handleTitle} 
    //                 value={post.post.title}/><br/>

    //             <label htmlFor="description">Description: </label>
    //                 <input required type="text" id="description"
    //                  name="description" onChange={handleDescription} 
    //                  value={post.post.description}/><br/>

    //             <label htmlFor="price">Price: </label>
    //                 <input required type="text" id="price" 
    //                 name="price" onChange={handlePrice} 
    //                 value={post.post.price}/><br/>

    //             <label htmlFor="location">Location: </label>
    //                 <input type="text" id="location" 
    //                 name="location" onChange={handleLocation} 
    //                 value={post.post.location}/><br/>

    //             <label htmlFor="willDeliver">Delivery Available: </label>
    //                 <input type="checkbox" id="willDeliver" 
    //                 name="willDeliver" onChange={handleWillDeliver} 
    //                 value={post.post.willDeliver}/><br/>

    //             <input type="Submit" onClick={(event)=>{
    //                 event.preventDefault()
    //                 createPost(post)
                   
    //             }}/>
    //         </form>
    //     </div>
    // )
   /* This is the new code */
//    let addedPost = {
//     title: title,
//     description: description,
//     price: price,
//     location: location,
//     willDeliver: willDeliver,
    
// }
// console.log(addedPost)
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
            let addedPost = response.data.data.post
             console.log(addedPost)
            
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
    /*Delete till here*/
}

// export default NewPost
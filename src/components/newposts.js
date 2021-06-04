import React from 'react';
import { useState , useEffect } from 'react';
import '../style/newposts.css';
import { apiPost , getPosts } from '../Api';

const NewPost = ( props ) => {

    let { setPosts , setFilteredPosts } = props

    let [ title , setTitle ] = useState('');
    let [ description , setDescription ] = useState('');
    let [ location , setLocation ] = useState('');
    let [ willDeliver , setWillDeliver ] = useState(false);
    let [ price , setPrice ] = useState('');
    let [ post , setPost ] = useState({
        'title' : '' , 'description' : '' , 'location' : '' , 'willDeliver' : false , 'price' : '' 
    })


        async function clearNewPost() {
            setTitle('');
            setDescription('');
            setLocation('');
            setWillDeliver(false);
            setPrice('');
            setPost({
                'title' : title , 'description' : description , 'location' : location , 'willDeliver' : willDeliver , 'price' : price 
            })
        }

        async function submitPost( event ) {
            event.preventDefault();
            setPost(
                post.title = title,
                post.description = description,
                post.location = location,
                post.willDeliver = willDeliver,
                post.price = price,
            )
            await apiPost(post);
            clearNewPost();
            let posts = await getPosts();
            // setPosts(posts);
            // setFilteredPosts(posts);
        }



    return (
        <div className='new-post'>
            <form id= 'post-form' onSubmit = { submitPost }>
                <div className='userInput'>
                    <h3>Title:</h3>
                    <input type='text' placeholder='What are you selling?' 
                             id='userInputTitle' value={title} onChange = {(event) => {
                                setTitle(event.target.value)}}>  
                    </input>
                </div>
                <div className='userInput'>
                    <h3>Description:</h3>
                    <textarea rows='4' placeholder='Tell me more!' 
                        id='userInputDescription' value={description} onChange = {(event) => {
                            setDescription(event.target.value)
                        }}> 
                    </textarea>
                </div>
                <div className='userInput'>
                    <h3>Location:</h3>
                    <input type='text' placeholder='City/State' 
                        id='userInputLocation' value={location} onChange = {(event) => {
                            setLocation(event.target.value)}}>
                    </input>
                </div>
                <h3>Delivery Available:</h3>
                <input type='checkbox' checked={willDeliver} onChange = {(event) => { 
                    let value=event.target.value === 'on' ? true : false; 
                    setWillDeliver(value)}}>
                </input>
                <div className='userInput'>
                    <h3>Price: </h3>
                    <input type='text' placeholder='In US Currency' 
                        id='userInputPrice' value={price} onChange = {(event) => {
                            setPrice(event.target.value)}}>
                    </input>
                </div>
                    <button id = 'submitButton'>Submit</button>
            </form>
        </div>
    )

    }
export default NewPost
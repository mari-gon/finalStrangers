import axios from 'axios'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT';
const token = localStorage.getItem('token')

// function setToken(accessToken){
//     token = accessToken
// }

function permissionsHeader() {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}
/* 
async function loginRegisterUser(method, user) {
    let url = `${BASE_URL}/users/${method}`;
    try {
        let response = await axios.post(url, user)
        token = response.data.data.token;
        getPosts();
    } catch (error) {
        console.log('ERROR');
        console.error(error);
    }
}

async function registerUser( user) {
    let url = `${BASE_URL}/users/register`;
    try {
        let response = await axios.post(url, user)
        token = response.data.data.token;
        getPosts();
    } catch (error) {
        console.log('ERROR');
        console.error(error);
    }
}

async function myData() {
    let url = `${BASE_URL}/users/me`;
    try {
        let response = await axios.get(url, permissionsHeader())
        let data = response.data.data;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function getPosts() {
    let url = `${BASE_URL}/posts`;
    try {
        let response = await axios.get(url)
        let posts = response.data.data.posts;
        console.log(posts);
    } catch (error) {
        console.error(error);
    }
}
*/
async function setPost(post) {
    let url = `${BASE_URL}/posts`;
    try {
        let response = await axios.post(url, post, permissionsHeader());
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function apiPost(post) {
    let url = `${BASE_URL}/posts`;
    let newPost = {
        'post' : post
    }
    try {
        let response = await axios.post(url, post, permissionsHeader());
        console.log(response);
    } catch (error) {
        console.error(error);
    }

}

export { apiPost , setPost}

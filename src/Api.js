import axios from 'axios'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT';
const token = localStorage.getItem('token')

function permissionsHeader() {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}

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

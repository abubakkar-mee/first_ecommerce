import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./app.css"

import { Link } from 'react-router-dom';

const App = () => {
  const [post, setPost] = useState([]);
  const getPost = async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPost(res.data);
  }
  useEffect(() =>{
    getPost();
  },[])
  return (
    <>
    {post.map((post) =>(
      <div class='post-container' key={post.id}>
        <h2>{post.title}</h2>
        <Link to={`/post/${post.id}`} state={post}><button>click here</button></Link>
      </div>
    ))}
    </>
  )
}

export default App

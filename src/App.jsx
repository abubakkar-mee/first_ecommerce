import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./app.css"

import { Link } from 'react-router-dom';

const App = () => {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false)
  const getPost = async() =>{
    setLoad(true)
    const res = await axios.get("https://dummyjson.com/posts?limit=0");
    setPost(res.data.posts);
    setLoad(false)
  }
  useEffect(() =>{
    getPost();
  },[])
  return (
    <>
    <Link to="/products"><button>Products</button></Link>
    <div className='containerr'>
    {load ? <div className='loader'></div>:post.map((post) =>(
      <div className='post-container' key={post.id}>
        <h2>{post.title}</h2>
        <h2>{post.body.substring(0,60)}....</h2>
        <Link to={`/post/${post.id}`} state={post}><button>click here</button></Link>
      </div>
    ))}
    </div>
    </>
  )
}

export default App

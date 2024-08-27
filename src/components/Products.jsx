import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import './products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false)
    const getAllProducts = async() =>{
        setLoad(true)
        const res = await axios.get("https://dummyjson.com/products?limit=0");
        setProducts(res.data.products)
        setLoad(false)
        
    }
    useEffect(()=>{
        getAllProducts()
    },[])
  return (
    <>
    <Link to='/'><button>Posts</button></Link>
    <div className="container2">
        {load ? <div className='loader'></div>: products.map((product,i) =>(
            <div key={i}>
            <Link state={product} to={`/products/${product.id}`}>
            <div className='product' key={i}>
                <div className='img-container'><img src={product.thumbnail} alt="" /></div>
                <p>{product.price}</p>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <button>add to cart</button>
                <button>order now</button>
            </div>
            </Link>
        </div>
        ))}
    </div>
    </>
  )
}

export default Products

import React from 'react';
import axios from 'axios';
import Rating from './Rating'
import { baseURL, config } from '../services';

function Detail(props) {

  const handleDelete = async (id) => {
    console.log(id)
    await axios.delete(`${baseURL}/${id}`, config)
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  }
  
  return (
    <div className='user-container'>
      {props.products.map((product, index) => (
        <div className='rendered-data'>
          <div className='brand-div'>
            <h5> <img src='https://i.imgur.com/3lZVdf9.png' className='brand-img' alt='brand-img' /> <br/> {product.fields.brand} {product.fields.name}</h5>
          </div>
          <div className='rating-div'>
            <Rating rating={product.fields.rating} />
          </div>
          <div className='review-div'>
            <h5> <img src='https://i.imgur.com/wsOmGXt.png' className='review-img' alt='review-img' /> <br/> Review: <br /> {product.fields.review}</h5>
          </div>
          <button className='delete-button' onClick={() => { handleDelete(product.id) }}>Delete</button>
        </div>
      ))}
    </div>
  )
}
 
export default Detail



      

  
     
    

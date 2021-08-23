// import { Link } from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Detail(props) {

  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  // const params = useParams();
  console.log(props.products)
  // useEffect(() => {
  //   if (params.id && props.products.length > 0) {
  //     const productInfo = props.products.find(product => params.id === product.id)
  //     if (productInfo) {
  //       setBrand(productInfo.fields.brand)
  //       setName(productInfo.fields.name)
  //       setRating(productInfo.fields.rating)
  //       setReview(productInfo.fields.review)
  //     }
  //   }
  // }, [params.id, props.products])
  return (
    <article>
      <h1>test</h1>
      {props.products.map((product, index) => (
        <div>

          <h5>{product.fields.brand}</h5>
          <h5>{product.fields.name}</h5>
          <h5>{product.fields.rating}</h5>
          <h5>{product.fields.review}</h5>
        </div>
      ))}
      {/* <Link to = {`/edit/${product.id}`}>Edit Product Review </Link> */}
    </article>
    
  )
}

export default Detail
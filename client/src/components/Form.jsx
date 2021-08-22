import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from '../services';
import { useParams } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';


function Form(props) {

  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params.id && props.products.length > 0) {
      const productToEdit = props.products.find(product => params.id === product.id)
      if (productToEdit) {
        setBrand(productToEdit.fields.brand)
        setName(productToEdit.fields.name)
        setRating(productToEdit.fields.Rating)
        setReview(productToEdit.fields.review)
      }
    }
  }, [params.id, props.products])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newProduct = {
      brand,
      name,
      rating,
      review
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}, {fields: newProduct}, config`)
    } else {
      await axios.post(baseURL, {fields:newProduct}, config)
    }
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='brand'></label>
      <input id='brand' type='text' onChange={(e) => setBrand(e.target.value)} value={brand} placeholder='Enter Brand'/>
      <br />

      <label htmlFor='name'></label>
      <input id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' />
      <br />

      <label htmlFor='rating'></label>
      <input id='rating' type='text' onChange={(e) => setRating(e.target.value)} value={rating} placeholder='Rating' />
      <br />

      <label htmlFor='review'></label>
      <input id='review' type='text' onChange={(e) => setReview(e.target.value)} value={review} placeholder='Enter Your Review'/>

    </form>
  )
}

export default Form
      


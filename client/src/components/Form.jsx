import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from '../services';
import { useParams } from 'react-router-dom';

function Form(props) {

  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const params = useParams();
  
  useEffect(() => {
    if (params.id && props.products.length > 0) {
      const productToEdit = props.products.find((product) => params.id === product.id)
      if (productToEdit) {
        setBrand(productToEdit.fields.brand)
        setName(productToEdit.fields.name)
        setRating(productToEdit.fields.rating)
        setReview(productToEdit.fields.review)
      }
    }
  }, [params.id, props.products])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newProduct = {
      category: props.category,
      brand,
      name,
      rating,
      review
    }

    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newProduct }, config)
    } else {
      await axios.post(baseURL, { fields: newProduct }, config)
  }
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }
    
  return (

    <div className='form-container'>

    <form className='actual-form' onSubmit={handleSubmit}>
      <h5 id='form-text'>Add a Review</h5>
        <label className='form-label' htmlFor='brand'>Brand:</label>
          <input id='brand' type='text' onChange={(e) => setBrand(e.target.value)} value={brand} autoComplete='off' required  />
        <br />

        <label className='form-label' htmlFor='name:'>Name:</label>
          <input id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} autoComplete='off' required   />
        <br />
      
        <label className='form-label' htmlFor='rating'>Rating (1-5):</label>
          <input id='rating' type='number' min={1} max={5} onChange={(e) => setRating(e.target.valueAsNumber)} required value={rating} />
        <br />

        <label className='form-label' htmlFor='review'>Your Review:</label>
          <textarea id='review' type='text' onChange={(e) =>
          setReview(e.target.value)} value={review} required />
        <br />
     
        <button id='form-button' className='submit-button' type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default Form






  


  

      
      


      


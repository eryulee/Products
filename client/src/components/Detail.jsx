
import React from 'react';



function Detail(props) {

  
  
  // console.log(props.products)
  
  return (
    <div className='user-container'>
      
      {props.products.map((product, index) => (
        <div className='rendered-data'>
          <div className='brand-div'>
            <h5> <img src='https://i.imgur.com/3lZVdf9.png' className='brand-img' alt='brand-img' /> <br/> {product.fields.brand} {product.fields.name}</h5>
          </div>
          <div className='rating-div'>
            <h5>Rating: {product.fields.rating}</h5>
          </div>
          <div className='review-div'>
            <h5>Review: <br /> {product.fields.review}</h5>
            </div>
        </div>

      ))}
     
    </div>
    
  )
}

export default Detail
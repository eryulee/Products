
import React from 'react';



function Detail(props) {

  
  
  // console.log(props.products)
  
  return (
    <article>
      
      {props.products.map((product, index) => (
        <div>
          <h5>Brand: {product.fields.brand}</h5>
          <h5>Name: {product.fields.name}</h5>
          <h5>Rating: {product.fields.rating}</h5>
          <h5>Review: {product.fields.review}</h5>
        </div>

      ))}
     
    </article>
    
  )
}

export default Detail
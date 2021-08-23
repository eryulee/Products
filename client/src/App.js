
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { baseURL, config } from './services/index.js'
import { Route, Link } from 'react-router-dom'
import Detail from './components/Detail'
import Form from './components/Form'

function App() {

  const [products, setProducts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
 
useEffect(() => {
  const getCategories = async () => {
    const resp = await axios.get(baseURL, config)
    console.log(resp.data.records)
    setProducts(resp.data.records)
  }
getCategories()
  // console.log(products[0])
}, [toggleFetch]);

  return (
    
    <div className="App">
      
   <header>
    <h3 className="app-title">Baby Product Reviews</h3>
      <Link className="home-link" to="/">
         <div className="header-div">
            <div className="home-div">
              <button className="home-button">
                <img src='https://i.imgur.com/FJkLcZF.png' alt='imgur-1' className="home-png"/>
              </button>
            </div>
         </div>
      </Link>
  </header>
       

   {/* links to each category page will be displayed on home page. I want links to only 
    be displayed on home page */}
      
  <div className="link-container">
    <Route path="/" exact>
          
          <Link className="categories-link" to="/high-chairs">
            <div className="category">
              <h5 className="cat-ti">High Chairs</h5>
              <img src='https://i.imgur.com/NDuq1yk.png' alt='imgur-1' className="chair-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/car-seats">
            <div className="category">
              <h5 className="cat-ti">Car Seats</h5>
              <img src='https://i.imgur.com/6P5Ln1d.png' alt='imgur-2' className="seat-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/breast-pumps">
            <div className="category">
              <h5 className="cat-ti">Breast Pumps</h5>
              <img src='https://i.imgur.com/N73baun.png' alt='imgur-3' className="pump-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/diapers">
            <div className="category">
              <h5 className="cat-ti">Diapers</h5>
              <img src='https://i.imgur.com/VPVuDUv.png' alt='imgur-4' className="diaper-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/cribs">
            <div className="category">
              <h5 className="cat-ti">Cribs</h5>
              <img src='https://i.imgur.com/oU5p4d1.png' alt='imgur-5' className="crib-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/diaper-pails">
            <div className="category">
              <h5 className="cat-ti">Diaper Pails</h5>
              <img src='https://i.imgur.com/GtQxmpS.png' alt='imgur-6' className="pail-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/baby-bottles">
            <div className="category">
              <h5 className="cat-ti">Baby Bottles</h5>
              <img src='https://i.imgur.com/w6EIWrO.png' alt='imgur-7' className="bottle-icon"/>
            </div>
          </Link>
    
     </Route>
  </div>
          
      {/* detail component and form component both live within each category page */}
      {/* pass products as a prop */}
      {/* apply filter method to products to filter by category */}
      {/* form component will have both post request and put request */}
      {/* in detail component, map out data and render data for each category */}
      {/* edit link will be inserted after each data set in detail component */}
      <Route path="/high-chairs">
        <div className='titles'>
        <button className='cat-buttons'>High Chairs</button>
        </div>

       
        <Form products={products.filter(product => product.fields.category === "High Chairs")}
          category={'High Chairs'}
          setToggleFetch={setToggleFetch}/>
      <Detail 
          products={products.filter(product => product.fields.category === "High Chairs")}
          setToggleFetch={setToggleFetch}/>
  </Route>

      <Route path="/car-seats">
      <div className='titles'>
      <button className='cat-buttons'>Car Seats</button>
        </div>
        
        <Form products={products.filter(product => product.fields.category === "Car Seats")}
          category={'Car Seats'}
        setToggleFetch={setToggleFetch}/>
      <Detail
          products={products.filter(product => product.fields.category === "Car Seats")}
          setToggleFetch={setToggleFetch}/>
  </Route>

      <Route path="/breast-pumps">
      <div className='titles'>
        <button className='cat-buttons'>Breast Pumps</button>
        </div>
        
      <Form products={products.filter(product => product.fields.category === "Breast Pumps")}
        category={'Breast Pumps'}
          setToggleFetch={setToggleFetch} />
      <Detail
          products={products.filter(product => product.fields.category === "Breast Pumps")}
          setToggleFetch={setToggleFetch}/>
  </Route>

      <Route path="/diapers">
      <div className='titles'>
      <button className='cat-buttons'>Diapers</button>
        </div>
        
        <Form products={products.filter(product => product.fields.category === "Diapers")}
          category={'Diapers'}
         setToggleFetch={setToggleFetch}/>
      <Detail
          products={products.filter(product => product.fields.category === "Diapers")}
          setToggleFetch={setToggleFetch}/>
  </Route>

      <Route path="/cribs">
      <div className='titles'>
      <button className='cat-buttons'>Cribs</button>
        </div>
       
        <Form products={products.filter(product => product.fields.category === "Cribs")}
          category={'Cribs'}
        setToggleFetch={setToggleFetch}/>
      <Detail
          products={products.filter(product => product.fields.category === "Cribs")}
          setToggleFetch={setToggleFetch}/>
  </Route>

      <Route path="/diaper-pails">
      <div className='titles'>
      <button className='cat-buttons'>Diaper Pails</button>
        </div>
       
        <Form products={products.filter(product => product.fields.category === "Diaper Pails")}
          category={'Diaper Pails'}
        setToggleFetch={setToggleFetch}/>
      <Detail
          products={products.filter(product => product.fields.category === "Diaper Pails")}
          setToggleFetch={setToggleFetch}/>
  </Route>

      <Route path="/baby-bottles">
      <div className='titles'>
      <button className='cat-buttons'>Baby Bottles</button>
        </div>
        
        <Form products={products.filter(product => product.fields.category === "Baby Bottles")}
          category={'Baby Bottles'}
        setToggleFetch={setToggleFetch}/>
      <Detail
          products={products.filter(product => product.fields.category === "Baby Bottles")}
          setToggleFetch={setToggleFetch}/>
      </Route>
      


  {/* <Route path="/products/:id">
        
  </Route> */}


   <footer>
     <h6 className="footer-text">coded by esther 💛</h6>
   </footer>

  </div>
      

  );
}

export default App;

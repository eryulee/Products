
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
    const filtered = resp.data.records
    filtered.sort((a,b) => {
      const splitDateA = a.createdTime.split("T")[0]
      const dayValueA = splitDateA.split("-")[2]
      const monthValueA = splitDateA.split("-")[1]

      const splitDateB = b.createdTime.split("T")[0]
      const dayValueB = splitDateB.split("-")[2]
      const monthValueB = splitDateB.split("-")[1]

      a = Number(dayValueA) + Number(monthValueA) * 10
      b = Number(dayValueB) + Number(monthValueB) * 10
      return b - a
    })

    
    setProducts(filtered)
  }
getCategories()
}, [toggleFetch]);
  
return (

  <div className="App">
   <header>
    <h2 className="app-title"> CRIB NOTES </h2>
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
      
  <div className="link-container">
    <Route path="/" exact>
          <Link className="categories-link" to="/high-chairs">
            <div className="category">
              <h5 className="cat-ti">High Chairs</h5>
              <img src='https://i.imgur.com/wVhYUgE.png' alt='imgur-1' className="chair-icon"/>
            </div>
          </Link>
    
          <Link className="categories-link" to="/car-seats">
            <div className="category">
              <h5 className="cat-ti">Car Seats</h5>
              <img src='https://i.imgur.com/cOTy8uT.png' alt='imgur-2' className="seat-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/breast-pumps">
            <div className="category">
              <h5 className="cat-ti">Breast Pumps</h5>
              <img src='https://i.imgur.com/5rwoifF.png' alt='imgur-3' className="pump-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/diapers">
            <div className="category">
              <h5 className="cat-ti">Diapers</h5>
              <img src='https://i.imgur.com/oJUDy9z.png' alt='imgur-4' className="diaper-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/cribs">
            <div className="category">
              <h5 className="cat-ti">Cribs</h5>
              <img src='https://i.imgur.com/EzxrCvK.png' alt='imgur-5' className="crib-icon"/>
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
    
  <Route path="/high-chairs">
        <div className='titles'>
            <button className='cat-buttons'>High Chairs</button>
              <br />
            <img className= 'img-chair' src='https://i.imgur.com/NDuq1yk.png' alt='img-chair'/>
        </div>
        <Form products={products.filter(product => product.fields.category === "High Chairs")}
            category={'High Chairs'}
            setToggleFetch={setToggleFetch}/>
        <h5 className='review-section'>Reviews</h5>
        <Detail 
            products={products.filter(product => product.fields.category === "High Chairs")}
            setToggleFetch={setToggleFetch}/>
  </Route>
    
  <Route path="/car-seats">
    <div className='titles'>
          <button className='cat-buttons'>Car Seats</button>
          <br />
          <img className= 'img-car' src='https://i.imgur.com/6P5Ln1d.png' alt='img-car'/>
        </div>
    <Form products={products.filter(product => product.fields.category === "Car Seats")}
          category={'Car Seats'}
          setToggleFetch={setToggleFetch} />
        <h5 className='review-section'>Reviews</h5>
    <Detail
          products={products.filter(product => product.fields.category === "Car Seats")}
          setToggleFetch={setToggleFetch}/>
  </Route>
        
  <Route path="/breast-pumps">
      <div className='titles'>
          <button className='cat-buttons'>Breast Pumps</button>
          <br />
          <img className= 'img-pump' src='https://i.imgur.com/N73baun.png' alt='img-pump'/>
      </div>
      <Form products={products.filter(product => product.fields.category === "Breast Pumps")}
        category={'Breast Pumps'}
          setToggleFetch={setToggleFetch} />
        <h5 className='review-section'>Reviews</h5>
      <Detail
          products={products.filter(product => product.fields.category === "Breast Pumps")}
          setToggleFetch={setToggleFetch}/>
  </Route>

  <Route path="/diapers">
      <div className='titles'>
          <button className='cat-buttons'>Diapers</button>
          <br />
          <img className= 'img-diaper' src='https://i.imgur.com/VPVuDUv.png' alt='img-diaper'/>
      </div>
      <Form products={products.filter(product => product.fields.category === "Diapers")}
          category={'Diapers'}
          setToggleFetch={setToggleFetch} />
        <h5 className='review-section'>Reviews</h5>
      <Detail
          products={products.filter(product => product.fields.category === "Diapers")}
          setToggleFetch={setToggleFetch}/>
  </Route>
        
  <Route path="/cribs">
      <div className='titles'>
          <button className='cat-buttons'>Cribs</button>
          <br />
          <img className= 'img-crib' src='https://i.imgur.com/oU5p4d1.png' alt='img-crib'/>
        </div>
      <Form products={products.filter(product => product.fields.category === "Cribs")}
          category={'Cribs'}
          setToggleFetch={setToggleFetch} />
        <h5 className='review-section'>Reviews</h5>
      <Detail
          products={products.filter(product => product.fields.category === "Cribs")}
          setToggleFetch={setToggleFetch}/>
  </Route>

  <Route path="/diaper-pails">
      <div className='titles'>
          <button className='cat-buttons'>Diaper Pails</button>
          <br />
          <img className= 'img-pail' src='https://i.imgur.com/GtQxmpS.png' alt='img-pail'/>
      </div>
       
      <Form products={products.filter(product => product.fields.category === "Diaper Pails")}
          category={'Diaper Pails'}
          setToggleFetch={setToggleFetch} />
        <h5 className='review-section'>Reviews</h5>
      <Detail
          products={products.filter(product => product.fields.category === "Diaper Pails")}
          setToggleFetch={setToggleFetch}/>
  </Route>

  <Route path="/baby-bottles">
      <div className='titles'>
          <button className='cat-buttons'>Baby Bottles</button>
          <br />
          <img className= 'img-bottle' src='https://i.imgur.com/w6EIWrO.png' alt='img-bottle'/>
      </div>
      <Form products={products.filter(product => product.fields.category === "Baby Bottles")}
          category={'Baby Bottles'}
          setToggleFetch={setToggleFetch} />
        <h5 className='review-section'>Reviews</h5>
      <Detail
          products={products.filter(product => product.fields.category === "Baby Bottles")}
          setToggleFetch={setToggleFetch}/>
  </Route>
      <footer>
        <h6 className="footer-text">coded by esther 💛</h6>
      </footer>
  </div>
        
    );
  }
      
  export default App;
      
       
         

   

   
      

          
      
      
         

       


       

        
      


  



      


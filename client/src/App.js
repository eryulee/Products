
import './App.css';
// import '.assets/css/fonts.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { baseURL, config } from './services/index.js'
import { Route, Link } from 'react-router-dom'
import Detail from './components/Detail'



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
       
       {/* <h5>(Birth-2 years)</h5> */}
          <Link className="home-link" to="/">
            <div className="header-div">
            <div className="home-div">
              <button className="home-button">
              <img src='https://i.imgur.com/FJkLcZF.png' className="home-png"/>
                {/* HOME */}
                  </button>
                </div>
             </div>
          </Link>
    </header>

          
    {/* links to each category will be displayed on home page. I want links to only 
    be displayed on home page */}
      
      <div className="link-container">
      <Route path="/" exact>
          
          <Link className="categories-link" to="/high-chairs">
            <div className="category">
              <h5 className="cat-ti">High Chairs</h5>
              <img src='https://i.imgur.com/NDuq1yk.png' className="chair-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/car-seats">
            <div className="category">
              <h5 className="cat-ti">Car Seats</h5>
              <img src='https://i.imgur.com/6P5Ln1d.png' className="seat-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/breast-pumps">
            <div className="category">
              <h5 className="cat-ti">Breast Pumps</h5>
              <img src='https://i.imgur.com/N73baun.png' className="pump-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/diapers">
            <div className="category">
              <h5 className="cat-ti">Diapers</h5>
              <img src='https://i.imgur.com/VPVuDUv.png' className="diaper-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/cribs">
            <div className="category">
              <h5 className="cat-ti">Cribs</h5>
              <img src='https://i.imgur.com/oU5p4d1.png' className="crib-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/diaper-pails">
            <div className="category">
              <h5 className="cat-ti">Diaper Pails</h5>
              <img src='https://i.imgur.com/GtQxmpS.png' className="pail-icon"/>
            </div>
          </Link>

          <Link className="categories-link" to="/baby-bottles">
            <div className="category">
              <h5 className="cat-ti">Baby Bottles</h5>
              <img src='https://i.imgur.com/w6EIWrO.png' className="bottle-icon"/>
            </div>
          </Link>
          

      </Route>
      </div>
           
      {/* In detail component, all products will be filtered by category. */}
      <Route path="/high-chairs">
        <Detail products={products.filter(product => product.fields.category === "High Chairs")} />
      </Route>

      <Route path="/car-seats">
        <Detail products={products.filter(product => product.fields.category === "Car Seats")} />
      </Route>

      <Route path="/breast-pumps">
        <Detail products={products.filter(product => product.fields.category === "Breast Pumps")} />
      </Route>

      <Route path="/diapers">
        <Detail products={products.filter(product => product.fields.category === "Diapers")} />
      </Route>

      <Route path="/cribs">
        <Detail products={products.filter(product => product.fields.category === "Cribs")} />
      </Route>

      <Route path="/diaper-pails">
        <Detail products={products.filter(product => product.fields.category === "Diaper Pails")} />
      </Route>

      <Route path="/baby-bottles">
        <Detail products={products.filter(product => product.fields.category === "Baby Bottles")} />
      </Route>

      <footer>
        <h6 className="footer-text">coded by esther 💛 <img src='' className='email-icon' /></h6>
      </footer>

      </div>
      

  );
}

export default App;

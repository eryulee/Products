
import './App.css';
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
       <h3>Baby Products Ratings</h3>
       <h5>(Birth-2 years)</h5>
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
              <h3>High Chairs</h3>
            </div>
          </Link>

          <Link className="categories-link" to="/car-seats">
            <div className="category">
              <h3>Convertible Car Seats</h3>
            </div>
          </Link>

          <Link className="categories-link" to="/breast-pumps">
            <div className="category">
              <h3>Breast Pumps</h3>
            </div>
          </Link>

          <Link className="categories-link" to="/diapers">
            <div className="category">
              <h3>Diapers</h3>
            </div>
          </Link>

          <Link className="categories-link" to="/cribs">
            <div className="category">
              <h3>Cribs</h3>
            </div>
          </Link>

          <Link className="categories-link" to="/diaper-pails">
            <div className="category">
              <h3>Diaper Pails</h3>
            </div>
          </Link>

          <Link className="categories-link" to="/baby-bottles">
            <div className="category">
              <h3>Baby Bottles</h3>
            </div>
          </Link>
          

      </Route>
      </div>
           
      {/* In detail component, all products will be filtered by category. */}
      <Route path="/high-chairs">
        <Detail products={products.filter(product => product.fields.category === "High Chairs")} />
      </Route>

      <Route path="/car-seats">
        <Detail products={products.filter(product => product.fields.category === "Convertible Car Seats")} />
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
        <h5>coded by esther 💛 </h5>
      </footer>

      </div>
      

  );
}

export default App;

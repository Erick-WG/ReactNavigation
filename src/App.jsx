// dependency's
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';

// components.
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import NavigationBar from './Components/Navigation/NavigationBar';


function App() {

  return (
      <>
        <Router>
          <div className="navigation">
            <NavigationBar/>
          </div>
          <div className="main-content">
            {/* content that changes with routes */}
            <Switch>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<Home/>} />
              <Route exact path="/products" element={<Products/>} />
              <Route exact path="/contact" element={<Contact/>} />
            </Switch>
          </div>
          <div className="footer">
            <footer>
              <div className="logo-container">
                <h3>footer logo</h3>
              </div>
              <div className="footer-links">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/contact">Contact us</Link>
              </div>
              <div></div>
            </footer>
          </div>
        </Router>
    </>
  )
}

export default App

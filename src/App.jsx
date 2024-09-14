// dependency's
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';

// components.
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
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
            <Routes>
              <Route index exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/products" element={<Products/>} />
              <Route exact path="/contact" element={<Contact/>} />
            </Routes>
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

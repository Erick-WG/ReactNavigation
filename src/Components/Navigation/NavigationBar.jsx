import React from 'react'
import { Link } from 'react-router-dom'
function NavigationBar () {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </div>
  )
}

export default NavigationBar

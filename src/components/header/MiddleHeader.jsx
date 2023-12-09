import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MiddleHeader = () => {
  const {cartItems}=useSelector(state=>state.cart)
  return (
    <div className="middle-header">
        <div className="middle-header-search-box">
          <input type="search" placeholder="recherche" />
          <button className="search-box-btn">recherche</button>
        </div>
        <Link to='/cart' className="middle-header-shopping-cart">
          Panier
          {cartItems?.length >0 && <span className="cart-notification"> {cartItems?.length}</span> }
          <i className="bi bi-cart3"></i>
        </Link>
      </div>
  )
}

export default MiddleHeader
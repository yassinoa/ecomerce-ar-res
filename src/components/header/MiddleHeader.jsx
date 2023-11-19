import React from 'react'

const MiddleHeader = () => {
  return (
    <div className="middle-header">
        <div className="middle-header-search-box">
          <input type="search" placeholder="recherche" />
          <button className="search-box-btn">recherche</button>
        </div>
        <div className="middle-header-shopping-cart">
          Cart
          <span className="cart-notification">1</span>
          <i className="bi bi-cart3"></i>
        </div>
      </div>
  )
}

export default MiddleHeader
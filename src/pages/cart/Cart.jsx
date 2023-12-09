import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cartItems}=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  return (
    cartItems.length <1 ?
    <div className='empty-cart'>
      <h1>Le panier est vide</h1>
      <Link className='empty-cart-link' to='products'>Page de Produit </Link>
    </div>
    :
    <div className="cart">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
        {cartItems.map(item=>
          <div className="cart-item" key={item.id}>
            <div className="cart-item-img-wrapper">
              <img src={item.image} alt={item.title} className="cart-item-img" />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-quantity">
                quantité :
                <span>{item.quantity}</span>
              </div>
              <div className="cart-item-price">
                price :
                <span>{item.price * item.quantity} $</span>
              </div>
              <i onClick={()=>dispatch(cartActions.removeItemFromCart(item.id))} className='bi bi-trash cart-item-delete-icon'></i>
            </div>
          </div>
          )}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <i className='bi bi-check-circle-fill'></i>
            payment free
          </div>
          <div className="cart-summary-total">
            Total:
            <span>
              {
                cartItems.reduce((acc,cur)=>acc + cur.price * cur.quantity,0 )
              } $
            </span>
          </div>
          <button className="cart-summary-btn">
            payment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../../data/products'
import Rating from '../../components/rating/Rating'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../redux/slices/productSlice'
import Spinner from '../../components/spinner/Spinner'
import { cartActions } from '../../redux/slices/cartSlice'
const SingleProduct = () => {
  const {id}=useParams()
  const [qty, setQty] = useState(1)
  const dispatch=useDispatch()
  const {product:productSelector,isloading}=useSelector(state=>state.product)
  useEffect(()=>{
    window.scrollTo(0,0)
    const product=products.find(p=>p.id===+id)
    dispatch(productActions.setLoading())
    dispatch(productActions.setProduct(product))
    dispatch(productActions.clearLoading())
    
  },[id,dispatch])

  const addToCartHandler=()=>{
    dispatch(cartActions.addItemToCart({
      id:productSelector?.id,
      quantity:qty,
      price:productSelector?.price,
      title:productSelector?.title,
      image:productSelector?.image
    }))
  }
  return (
    <div className="single-product">
      {isloading ? 
      <Spinner/>
      :(
        <>
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={productSelector?.image} alt=''/>
        </div>
        <div className="product-info">
          <h1 className="product-title">{productSelector?.title}</h1>
          <Rating rating={productSelector?.rating} reviews={productSelector?.reviews} />
          <div className="product-price">{productSelector?.price}</div>
          <div className="product-add-to-cart">
            <div>quntité</div>
            <input onChange={(e)=>setQty(e.target.value)} type='number' min='1' max='10' defaultValue={qty} />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
      <p className='product-description'>
      <strong className='product-description-title'>description</strong>
      L’expérience du client est de plus en plus importante. Le fait d’avoir une boutique en ligne ne devrait pas vous empêcher de vous connecter avec vos clients et de leur offrir la meilleure expérience possible.
    </p>
        </>
        )}
    </div>
  )
}

export default SingleProduct
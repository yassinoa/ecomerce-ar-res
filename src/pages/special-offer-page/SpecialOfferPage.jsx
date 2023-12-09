import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {specialOffers} from '../../data/special-offers'
import Rating from '../../components/rating/Rating'
import './special-offer-page.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

const SpecialOfferPage = () => {
  const {id}=useParams()
  const [qty, setQty] = useState(1)
  const dispatch=useDispatch()
  const product = specialOffers.find(p=>p.id=== +id)
  const {images,title,rating,reviews,price,discount}=product
  const [imageIndex, setImageIndex] = useState(0)
  const calcDiscount=price-(discount*price)/100
  const addToCartHandler=()=>{
    dispatch(cartActions.addItemToCart({
      id:product?.id,
      quantity:qty,
      price:product?.price,
      title:product?.title,
      image:product?.images[0]
    }))
    console.log(product)
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <div className="special-offer-page">
      <div className="special-offer-page-img-wrapper">
        <img src={images[imageIndex]} alt="" className="special-offer-page-img" />
        <div className="special-offer-page-select-img">
          {images.map((source,index) =>
            <img onClick={()=>setImageIndex(index)} key={index} src={source} alt='img' className="select-img" />
            )}
        </div>
      </div>
      <div className="special-offer-page-info">
        <h3 className="special-offer-page-title">{title}</h3>
        <Rating rating={rating} reviews={reviews} />
        <div className="special-offer-page-price">
          <b className="special-offer-price-item">{price}</b>
          <b className="special-offer-final-price-item">{calcDiscount}</b>
        </div>
        <div className="special-offer-page-add-to-cart">
          <div>quantité</div>
          <input onChange={(e)=>setQty(e.target.value)} type='number' min='1' max="10" defaultValue={qty} />
          <button onClick={addToCartHandler} className="add-to-cart-btn">Ajouter au panier</button>
        </div>
      </div>
    </div>
    <p className='product-description'>
      <strong className='product-description-title'>description</strong>
      L’expérience du client est de plus en plus importante. Le fait d’avoir une boutique en ligne ne devrait pas vous empêcher de vous connecter avec vos clients et de leur offrir la meilleure expérience possible.
    </p>
  </>
  )
}

export default SpecialOfferPage
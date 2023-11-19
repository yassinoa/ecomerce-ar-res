import React, { useState } from 'react'
import Rating from '../rating/Rating'

const Offer = ({offer}) => {
  const{firstImage,secondImage,title,price,discount,rating,reviews}=offer
  const [imageSrc, setImageSrc] = useState(firstImage)
  const calcul=price-(discount*price)/100
  return (
    <div className="offer">
      <div className="offer-img-wrapper">
        <img 
        onMouseEnter={()=>setImageSrc(secondImage)}
        onMouseLeave={()=>setImageSrc(firstImage)}
        src={imageSrc} alt={title} className="offer-img" />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="offer-price">
          <b className='offer-price-item'>${price}</b>
          <b className='offer-final-price-item'>
            ${calcul}
          </b>
        </div>
        <div className="offer-see-more">Detail</div>
        <div className="offer-discount">- {discount} %</div>
      </div>
    </div>
  )
}

export default Offer
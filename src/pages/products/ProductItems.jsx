import React from 'react'
import Rating from '../../components/rating/Rating'
import { Link } from 'react-router-dom'

const ProductItems = ({product}) => {
  const {id,image,title,rating,reviews,price}=product
  return (
    <Link className='product-item' to={`/product/${id}`} key={id}>
          <img src={image} alt={title} className='product-item-img' />
          <h3 className='product-item-title'>{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="product-item-price">${price}</div>
        </Link>
  )
}

export default ProductItems
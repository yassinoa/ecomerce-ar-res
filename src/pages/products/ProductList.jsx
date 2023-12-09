import React from 'react'
import ProductItems from './ProductItems'

const ProductList = ({products}) => {
  return (
    <div className="product-list">
      {products.map(product=>
        <ProductItems product={product} key={product.id} />
        )}
    </div>
  )
}

export default ProductList
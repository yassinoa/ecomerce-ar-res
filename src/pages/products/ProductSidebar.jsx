import React from 'react'
import ProductFilterBox from './ProductFilterBox'
import ProductSortBox from './ProductSortBox'

const ProductSidebar = ({filterItem,setFilterItem,sortItem,setSortItem,setCurrentPage}) => {
  return (
    <div className='product-sidebar'>
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">Filtrer par produit</h4>
        <ProductFilterBox filterItem={filterItem} setFilterItem={setFilterItem} setCurrentPage={setCurrentPage} />
      </div>
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">Trier par prix</h4>
        <ProductSortBox sortItem={sortItem} setSortItem={setSortItem} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default ProductSidebar
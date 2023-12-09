import React, { useEffect, useState } from 'react'
import ProductSidebar from './ProductSidebar'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../redux/slices/productSlice'
import {products} from '../../data/products'
import './Product.css'
import Pagination from './Pagination'
const Products = () => {
  const dispatch=useDispatch()
  const {products:sProducts} = useSelector(state=>state.product)

  const [filterItem, setFilterItem] = useState("all")
  const [sortItem, setSortItem] = useState("select")
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(()=>{
    dispatch(productActions.setProducts(products))
  },[dispatch])

  const filteredProduct=sProducts.filter((product)=>
    filterItem==='laptop'
    ? product.isLaptop===true
    :filterItem==='mobile'
      ?product.isLaptop===false
      :product
  )

  const sortedProductList=
  sortItem==='low'
  ? filteredProduct.sort((a,b)=>a.price - b.price)
  : sortItem==='high'
    ? filteredProduct.sort((a,b)=>b.price - a.price)
    : filteredProduct.sort((a,b)=>(a.title>b.title ? 1 : -1))


const PRODUCT_PER_PAGE =10
const pages= Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE)
const startIndex=(currentPage-1) *PRODUCT_PER_PAGE
const finishIndex=currentPage * PRODUCT_PER_PAGE
const orderedProducts=sortedProductList.slice(startIndex,finishIndex)
  return (
  <>
    <div className="products">
      <ProductSidebar filterItem={filterItem} setFilterItem={setFilterItem} sortItem={sortItem} setSortItem={setSortItem} setCurrentPage={setCurrentPage} />
      <ProductList products={orderedProducts}/>
    </div>
    <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
  </>
  )
}

export default Products
import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import SpecialOffer from '../../components/special-offer/SpecialOffer'
import HeadTitle from '../../components/heading-title/HeadTitle'
import Slider from '../../components/slider/Slider'
import Brands from '../../components/brands/Brands'
import {products} from '../../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../redux/slices/productSlice'
import Spinner from '../../components/spinner/Spinner'

const Home = () => {
  const dispatch =useDispatch();
  const {products:productsSelector,loading}=useSelector(state=>state.product)
  useEffect(()=>{
    dispatch(productActions.setLoading())
    dispatch(productActions.setProducts(products))
    dispatch(productActions.clearLoading())
  },[dispatch])

  const laptops= productsSelector.filter(p=>p.isLaptop===true)
  const mobiles= productsSelector.filter(p=>p.isLaptop===false)
  return (
    
    <>
    {loading ? 
      <Spinner/>
      :(
        <>
      <Banner />
      <Category/>
      <SpecialOffer/>
      <HeadTitle title='Nouvelle Ordinateur portable' />
      <Slider data={laptops} />
      <HeadTitle title='Nouvelle Telephone' />
      <Slider data={mobiles} />
      <HeadTitle title='Partner' />
      <Brands />
      </>
      )}
    </>
  )
}

export default Home
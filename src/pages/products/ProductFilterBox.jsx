import React from 'react'

const ProductFilterBox = ({filterItem,setFilterItem,setCurrentPage}) => {
  const onChangeHandler=(e)=>{
    setFilterItem(e.target.id)
    setCurrentPage(1)
  }
  return (
    <div className="product-filter">
      <div className="form-group">
        <input value={filterItem}  onChange={onChangeHandler} type='radio' name='filter' id='all' defaultChecked />
        <label htmlFor='all'>Aucun filter</label>
      </div>
      <div className="form-group">
        <input value={filterItem} onChange={onChangeHandler} type='radio' name='filter' id='laptop'/>
        <label htmlFor='laptop'>Ordinateur</label>
      </div>
      <div className="form-group">
        <input value={filterItem} onChange={onChangeHandler} type='radio' name='filter' id='mobile'/>
        <label htmlFor='mobile'>Telephone</label>
      </div>
    </div>
  )
}

export default ProductFilterBox
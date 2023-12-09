import React from 'react'

const ProductSortBox = ({sortItem,setSortItem,setCurrentPage}) => {
  const onChangeHandler=(e)=>{
    setSortItem(e.target.id)
    setCurrentPage(1)
  }
  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input value={sortItem} onChange={onChangeHandler} type='radio' name='sort' id='noSort' defaultChecked />
        <label htmlFor='noSort'>Aucun Trie</label>
      </div>
      <div className="form-group">
        <input value={sortItem} onChange={onChangeHandler} type='radio' name='sort' id='low'/>
        <label  htmlFor='low'>Prix croissant</label>
      </div>
      <div className="form-group">
        <input value={sortItem} onChange={onChangeHandler} type='radio' name='sort' id='high'/>
        <label htmlFor='high'>Prix décroissant</label>
      </div>
    </div>
  )
}

export default ProductSortBox
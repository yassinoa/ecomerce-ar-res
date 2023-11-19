import React from 'react'

const TopHeader = ({setToggle}) => {
  return (
    <div className="top-header">
        <div onClick={()=>setToggle(true)} className="top-header-menu">
          <i className='bi bi-list'></i>
        </div>
        <div className="top-header-logo">
          yassin shop
          <i className='bi bi-basket2'></i>
        </div>
        <div className="top-header-text">Salut tout le monde</div>
        <div className="top-header-phone">
          
          <i className='bi bi-telephone'></i>
          22 222 2222
        </div>
        
      </div>
  )
}

export default TopHeader
import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = ({setToggle}) => {
  return (
    <div className="top-header">
        <div onClick={()=>setToggle(true)} className="top-header-menu">
          <i className='bi bi-list'></i>
        </div>
        <Link to='/'>

        <div className="top-header-logo">
          yassin shop
          <i className='bi bi-basket2'></i>
        </div>
        </Link>
        <div className="top-header-text">Salut tout le monde</div>
        <div className="top-header-phone">
          
          <i className='bi bi-telephone'></i>
          22 222 2222
        </div>
        
      </div>
  )
}

export default TopHeader
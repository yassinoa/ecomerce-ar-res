import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setToggle,toggle}) => {
  return (
    <nav style={{left:toggle && "0"}} className="navbar">
        <div  className="navbar-close-icon">
          <i onClick={()=>setToggle(false)} className="bi bi-x-lg"></i>
        </div>
        <ul><Link to='/' onClick={()=>setToggle(false)} className="navbar-link">Accueil</Link></ul>
        <ul><Link to='/products' onClick={()=>setToggle(false)} className="navbar-link">Electronique </Link></ul>
        <ul><Link to='/products' onClick={()=>setToggle(false)} className="navbar-link">Cuisine</Link></ul>
        <ul><Link to='/products' onClick={()=>setToggle(false)} className="navbar-link">Homme</Link></ul>
        <ul><Link to='/products' onClick={()=>setToggle(false)} className="navbar-link">Femme</Link></ul>
      </nav>
  )
}

export default Navbar
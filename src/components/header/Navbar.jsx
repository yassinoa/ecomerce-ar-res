import React from 'react'

const Navbar = ({setToggle,toggle}) => {
  return (
    <nav style={{left:toggle && "0"}} className="navbar">
        <div  className="navbar-close-icon">
          <i onClick={()=>setToggle(false)} className="bi bi-x-lg"></i>
        </div>
        <ul onClick={()=>setToggle(false)} className="navbar-link">Accueil</ul>
        <ul onClick={()=>setToggle(false)} className="navbar-link">Electronique</ul>
        <ul onClick={()=>setToggle(false)} className="navbar-link">Cuisine</ul>
        <ul onClick={()=>setToggle(false)} className="navbar-link">Homme</ul>
        <ul onClick={()=>setToggle(false)} className="navbar-link">Femme</ul>
      </nav>
  )
}

export default Navbar
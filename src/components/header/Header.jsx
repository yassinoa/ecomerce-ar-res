import { useState } from "react"
import  "./header.css"
import TopHeader from "./TopHeader"
import MiddleHeader from "./MiddleHeader"
import Navbar from "./Navbar"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='header'>
      <TopHeader setToggle={setToggle} />
      <MiddleHeader/>
      <Navbar setToggle={setToggle} toggle={toggle} />
    </header>
  )
}

export default Header
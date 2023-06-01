import { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {

  const[color,setColor]= useState(false);

  const handleColor= () =>{
    if(window.scrollY > 300) {
      setColor(true);
    }else {
      setColor(false)
    }
    }
  
  window.addEventListener("scroll", handleColor)

  return (
    <nav className={color ? "color" : ""}>
     <div className="logo">
    <img src={require('../../assets/logo.png')} alt="" />
     </div>
     <div className="menu">
        <Link to='/'>Home</Link>
        <Link to='/pricing'> Pricing</Link>
        <Link to='/Traning'> Training</Link>
        <Link to='/contact'> Contact</Link>

     </div>
        </nav>
  )
}

export default Navbar
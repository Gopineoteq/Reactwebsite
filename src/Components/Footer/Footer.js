import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'
import fb from "../../assets/facebook.png"
import insta from "../../assets/instagram.png"
import twit from "../../assets/twitter-sign.png"
import mess from "../../assets/messenger.png"

const Footer = () => {

const social = [fb,insta,twit,mess]

  return (
    <div className='footer'>
         <div className="address">
         <img src={require('../../assets/logo.png')} alt="" className='logo1' />
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis, quidem labore blanditiis fugit facilis.</p>
         </div>
    
   
     <div className="links">
        <h3>Usefull Links</h3>
       <div className="link">
       <Link to="/">Home </Link>
        <Link to="/Pricing">Pricing </Link>
        <Link to="/Traning">Traning </Link>
        <Link to="/Contact">Contact </Link>
       </div>
     </div>

     <div className="social">
     <h3>SocialMedia Links</h3>
     <div className="socialmedia">
{
    social.map((item)=>{
        return(
            <img src={item} alt='no image' />
        )
    })
}
</div>
     </div>
    </div>
  )
}

export default Footer
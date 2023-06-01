import React from 'react'
import Video from '../../../assets/Sample.mp4'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='hero'>
            <video src={Video} autoPlay loop muted>       </video>         
       
       <div className="content">
        <h1 className='h1'>Neo-Pay</h1>
        <p>Search Pay Earn</p>
        <div className="buttons">
            <Link to='/traning'>Try Now!</Link>
            <Link to='/contact'>Launch</Link>
        </div>
       </div>
        </div>
    )
}

export default Hero
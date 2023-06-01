import React from 'react'
import {FaTimes} from "react-icons/fa"
const Model = ({handleClick}) => {
    return (
        <>
            <div className="overlay">
                <div className="Model">
                    <div className="model-header">
                        <FaTimes style={{color:"white"}} size={25} onClick={handleClick} />
                    </div>
                    <div className="Model-body">
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, est. Provident dolore ea dicta, animi nesciunt nihil, hic perspiciatis, velit vitae fugit cum est magni?</h1>

                </div>
</div>
            </div>

        </>
    )
}

export default Model
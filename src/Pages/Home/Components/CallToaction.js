import { Modal } from 'bootstrap';
import React from 'react'
import { useState } from 'react'
import Model from './Model';

const CallToaction = () => {
const [model,setModel]=useState(false);

    const handleClick= () => {
     setModel(!model)
    }
  return (
   <>
   <section className="call-to-action">
    <h2>Harry Up Book your Bus Tickets!</h2>
     <button onClick={handleClick}>Know More!</button>
   </section>
  
     {model && <Model  handleClick={handleClick}/>}
  
   
   </>
  );
};

export default CallToaction
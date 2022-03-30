import React from 'react'
import "./navbar.css"
import {useNavigate} from 'react-router-dom';


export default function Navbar() 
{
  let navigate = useNavigate();
  return (
    <div className='navbar'>

  
    <h1>Vested Margins</h1>

    <button className="btn" onClick={() => { navigate("/Addpost")

}}>
       add new post
    </button>
   
    </div>
    
  
  );
}

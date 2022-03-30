import "./footer.css"
import {useNavigate} from 'react-router-dom';





export default function Footer() {

  let navigate = useNavigate();
  return (
    <div className="bottom">
      
           <button className="register-btn" onClick={() => { navigate("/Register")

           }}>Create account</button>
        
        
        <button className="login-btn"onClick={() => { navigate("/Login")

}} > sign in </button>
       

       
    </div>
  )
};

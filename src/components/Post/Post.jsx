import "./post.css";
import { useNavigate } from "react-router-dom";




export default function Post() {
  let navigate = useNavigate();
 
  return (
    
    
    
    <div className="post">
    
        <span className="username">
        <img className="userprofile" src="./images/img2.jpg" alt="" onClick={() => { navigate("/Userpage")

}}></img>
       Michael_jordan 
        </span>
        <img className="postimg" src="./images/IMG_2629.JPG" alt=""onClick={() => { navigate("/Singlepost")

}}></img> 
          
        <div className="postinfo">

        <span className="postTitle">
            lorem ipsum  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt <br/>ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud exercitation ullamco laboris nisi <br/>ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt<br/> in culpa qui officia deserunt mollit anim id est laborum.<br/> 
       
        
        </span>
        <hr/>
        
      <span className="postDate" > 1 hour ago</span>
           
        </div>


    </div>
  )}


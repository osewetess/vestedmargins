import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Userpage from "./components/pages/Userpage/Userpage";
import Post from "./components/Post/Post";
import Posts from "./components/Posts/Posts";
import Singlepost from "./components/Singlepost/Singlepost";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Footer from "./components/footer/Footer";
import Addpost from "./components/pages/Addpost/Addpost"

import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'

function App() {
  return (
   <Router>
  

     <Routes>
       <Route exact path="/" element= {<Home/>} />
       <Route path="/Userpage" element= {<Userpage/>} />
       <Route path="/Post" element= {<Post/>} />
       <Route path="/Register" element= {<Register/>} />
       <Route path="/Login" element= {<Login/>} />
       <Route path="/Addpost" element= {<Addpost/>} />
       <Route path="/Singlepost" element= {<Singlepost/>} />
       
     </Routes> 
      
    
   </Router>

     
    
  );
}

export default App;

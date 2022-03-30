import "./home.css";
import Posts from "../../Posts/Posts";
import Footer from "../../footer/Footer";
import Navbar from "../../Navbar/Navbar"
export default function home() {
  return (
    <>
    <div className="homepage">
    <Navbar/>
    <Posts/>
    <Footer/>
    </div>
   

    </>
  )
}
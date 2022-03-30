import "./login.css"


export default function Login() {
  return (
    <div className="signin">
    <span className="signin-title"> sign in </span>
    <form className="signinform">
        <label>email</label>
        <input type={"text"} className="signinput" placeholder="email"></input>
        
        <label>password</label>
        <input type={"password"} className="signinput" placeholder="password"></input>
       
        <button className="signin-button"> sign in</button>
    </form> 

    
     </div>
  )
}

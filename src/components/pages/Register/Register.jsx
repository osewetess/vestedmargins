import "./register.css"


export default function Register() {
  return (
    <div className="register">
    <span className="register-title"> register</span>
    <form className="registerform">
        <label>email</label>
        <input type={"text"} className="registerinput" placeholder="email"></input>
        <label>username</label>
        <input type={"name"} className="registerinput" placeholder="username"></input>
        <label>password</label>
        <input type={"password"} className="registerinput" placeholder="password"></input>
        <label>repeat password</label>
        <input type={"password"} className="registerinput" placeholder="repeatpassword"></input>
        <button className="register-button"> create account</button>
    </form> 

    
     </div>
  )
}

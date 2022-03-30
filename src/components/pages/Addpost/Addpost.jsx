import "./addpost.css"


export default function Addpost() {
  return (
    <div className="upload">
    <form className="caption">
        <div className="captionformgroup">
        <label htmlFor="fileinput" className="addphoto">add photo</label>
            <input type={"file"} id="fileinput" style={{display:"none"}} />
           <div>
            <textarea className="textplace" placeholder="write your blog here"></textarea>
            </div>
            <button className="submit-btn">post</button>
        </div>
    </form>
       
    </div>
  )
}
import {useState} from "react";
import video from "../data/video.js";
import Infos from "./Infos.js";
import Media from "./Media.js";
import Comments from "./Comments.js";

function App() {
  const[text, setText] = useState(true)
  const[comment, setComment] = useState(true)
    
    function handleClick(){
        setText(!text)
        setComment(!comment)
        
    }
  console.log("Here's your data:", video);

  return <>
  <Media data ={video} />
  <Infos data ={video} handleClick = {handleClick} text = {text}/>
  {comment?<Comments data ={video}/> : ""}
  
  
  </>
    
  ;
}

export default App;

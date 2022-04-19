import React, {useState} from 'react'

export default function Infos({data, handleClick, text}) {
    const[upvote, setUpvote] = useState(data.upvotes)
    const[downvote, setDownvote] = useState(data.downvotes)
    

    function incrementUpvote(){
        setUpvote(upvote+1)

    }
    function incrementDownvote(){
        setDownvote(downvote+1)

    }
  return (
    <div className='infos'>
        <h1>{data.title}</h1>
        <p>{data.views} views| Uploaded {data.createdAt}</p>
        <div id='buttons'>
            <button onClick={incrementUpvote}>{upvote}👍</button>
            <button onClick={incrementDownvote} >{downvote}👎</button>
        </div>
     
        <button onClick={handleClick}>{text? "Hide comments": "Show comments"}</button>

        <hr/>
    </div>
  )
}

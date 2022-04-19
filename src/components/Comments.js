import React from 'react'

export default function Comments({data}) {
  return (
    <div>
        <h2>{data.comments.length} Comments</h2>
        {data.comments.map((obj)=>{
            return<div>
                
            <h3>{obj.user}</h3>
            <p>{obj.comment}</p>

            </div>
        })}
        
        
    </div>
  )
}

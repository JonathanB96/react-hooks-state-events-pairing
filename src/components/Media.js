import React from 'react'

export default function Media({data}) {
  return (
    <div>
       
    <iframe
      width="919"
      height="525"
      src={data.embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Thinking in React"
    />
   </div>
  )
}

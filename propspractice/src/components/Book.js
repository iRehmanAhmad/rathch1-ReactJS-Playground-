import React from 'react'


export default function Book({title, author, image}) {
    return(
        <div >
        <img src={image} alt=""/>
        <h1>{title}</h1>
        <h1>{author}</h1>
        </div>
      )
}

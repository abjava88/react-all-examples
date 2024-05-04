import React from 'react'

const Title3 = (props) => {
  return (
    <div>
        <h2>Titre de livre : {props.title}</h2>
        <h3>Auteur de livre : {props.author}</h3>
    </div>
  )
}

export default Title3
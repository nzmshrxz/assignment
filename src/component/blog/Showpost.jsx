import React from 'react'
import parse from 'html-react-parser'

const Showpost = ({ content }) => {
  return (
    <div>
      {parse(content)}
    </div>
  )
}

export default Showpost

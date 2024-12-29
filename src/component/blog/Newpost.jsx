import React, { useState } from 'react'
import Tiptap from './Tiptap'
import Showpost from './Showpost'

const Newpost = () => {

  const [htmlContent, setHtmlContent] = useState("")

  const handleEditorContentSave = (html) => {
    // console.log(html)
    setHtmlContent(html)
  }

  return (
    <>
      <Tiptap onEditorContentSaved={handleEditorContentSave} />
      <hr />
      <Showpost content={htmlContent} />
    </>
  )
}

export default Newpost

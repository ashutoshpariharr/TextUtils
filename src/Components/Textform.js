 import React, { useState } from "react";

export default function Textform(props) {

  const textup = () => {
    let newText = text.toLocaleUpperCase()
    setText(newText)
  }
  const textdo = () => {
    let textdown = text.toLocaleLowerCase()
    setText(textdown)
  }

  const remove = () => {
    let textremove = text.charAt(-1)
    setText(textremove) 
  }

  const textcan = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState ('');

  return (
    <div>
      <h1 className="mt-7">Text Analysis And Convertor</h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Write Something here..." value={text} onChange={textcan} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length <= 0} className="btn btn-primary mx-1 my-2" onClick={textup} >Convert</button>
      <button disabled={text.length <= 0} className="btn btn-primary mx-1 my-2"  onClick={textdo}>LowCase</button>
      <button disabled={text.length <= 0} className="btn btn-danger mx-1 my-2"  onClick={remove}>Remove</button>
      <div className="container my-3">
        <h2>
            All value
        </h2>
        <p>
           WORD {text.length}
        </p>
        <h4>
            Prieview
        </h4>
        <p>
        {text.length > 0 ? text:("Enter Something in Textarea")}
        </p>
      </div>
    </div>
  )
}
 
import React, { useState } from "react";

export default function TextFrom(props) {

  const [text,setText] = useState("");

  const handleUpClick = () =>{
    console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLwClick = () =>{
    console.log("Lowercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const onChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  return (
    <>
    <div className="container">

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={onChange} id="myBox" placeholder="Enter text here" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className=" mx-3 btn btn-primary" onClick={handleLwClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} character</p>
      <p>{0.008 *text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

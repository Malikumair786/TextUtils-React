import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // setText("You have change the state of your text area");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", 'success');
  };

  const handleLoClick = () => {
    // setText("You have change the state of your text area");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", 'success');
  };

  const handleCopyTxt = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied to clipboard", 'success');
  };

  const handleOnChange = (event) => {
    // console.log("You have clicked handleOnChange");
    setText(event.target.value);
  };

  const handeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", 'success');
  };

  return (
    <>
      <div className="container my-3" style = {{color: props.mode === 'light'? '#032356':'white'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode === 'light'? 'white':'rgb(4, 39, 67)', color: props.mode === 'light'? '#032356':'white' }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 text-center" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 text-center" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 text-center" onClick={handleCopyTxt}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 text-center" onClick={handeExtraSpaces}>
          Handle Extra Spaces
        </button>
      </div>
      <div className="container my-3" style = {{color: props.mode === 'light'? '#032356':'white'}}>
        <h1>Your Text Summary</h1>
        <div>
          {text.split(" ").filter((elements)=>{return elements.length !== 0}).length} words and {text.length} characters
        </div>
        <div> {0.008 * text.split(" ").filter((elements)=>{return elements.length !== 0}).length} minutes read</div>
        <h2>Preview</h2>
        <div>{text.length>0? text:"Enter your text in the textfeild to preview it here"}</div>
      </div>
    </>
  ); 
}

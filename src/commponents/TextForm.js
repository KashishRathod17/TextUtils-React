import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")

    }
    const handleCapitalize = () => {
        let newText = text.replace(/\b\w/g, char => char.toUpperCase())
        setText(newText)
        props.showAlert("Converted to Capitalize text","success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success")

    }
    const handlePaste= async ()=>{ // Make the function asynchronous
        const paste=await navigator.clipboard.readText();
        setText(text+paste)//paste the copied text without removing current text 
        props.showAlert("Paste done","success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")

    }
    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    //It enables user to write into textarea 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here")
    //text="new text"; wrong way to change the state
    //setText("new text"); correct way to change the state
    return (
        <>
            <div className="container my-3" style={{ color: props.mode }}>
                <h1>{props.heading}</h1>    
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode==='dark'?'rgb(58, 56, 56)':'rgb(175, 210, 211)',color:props.mode==='dark'?'white':'black'}}
                    id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize Text</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handlePaste}>Paste Text</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container" style={{ color: props.mode }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preveiw here!'}</p>
            </div>
        </>
    );
}

import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleDownClick=()=>{
        // console.log("UpperCase was clicked"+ text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClear=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text cleared","success")
    }
    const handleOnChange=(event)=>{
        // console.log("OnChnage")  //when text in entered, onchange is triggered, it sends and event, whick is then picked here and put into set text
        setText(event.target.value)
    }

    const handleCopy=()=>{
        let newtext=document.getElementById("myBox")
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied to clipboard..!!","success")
    }

    const handleSpace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Additional Space removed","success")
        
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mx-1" onClick={handleSpace}>Remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        {/* <p>{text.split(" ").length} Words and {text.length} characters</p> */}
        <p>Words: {text.length<=1? 0 :(text.split(" ").length)-1 } , Characters: {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview here..!!"}</p>
    </div>
    </>
  )
}



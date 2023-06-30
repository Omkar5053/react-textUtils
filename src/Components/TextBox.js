import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("");
    
   const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
   const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Is Converted to UpperCase", "success");
    }

   const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Is Converted to LowerCase", "success");
    }
   const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }
  
    
  return (
    <>
    <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
        <h1 className='mt-3'>{props.heading}</h1>
        <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-warning mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-warning mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-warning mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className={`conatiner my-4 text-${props.mode === 'light'?'dark':'light'}`}>
        <h4>Your Text Summary</h4>
        <p className='my-2'>{text.split(" ").length} Words And {text.length} Characters</p>
        <p className='my-2'>{0.08 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length === 0 ?'Write Text to Preview':text}</p>
    </div>
    </>
    
  )
}

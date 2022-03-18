import React,{useState} from 'react'
import '../App.css'


export default function TextForm(props) {
    const [text,setText] = useState("")

    const handleOnClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Text converted to upper case","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLoClick = (event) => {
      setText(text.toLowerCase())
      props.showAlert("Text converted to lower case","success")
    }

    const handleClear = () => {
      setText("")
      props.showAlert("Text cleared","success")
    }

    const handleCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text copied","success")
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed","success")
    }

  return (
    <>
    <div className='container my-4' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.label}</label>
        <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white', resize: "none"}} rows="8"  onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleOnClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container mt-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h1>
        Your text summary
      </h1>
      <p>
        {text.split(" ").length > 1 ? text.split(" ").length : 0} words and {text.length} characters
      </p>
      <h3>
        Preview
      </h3>
      <pre className='previewText'>
        {text === "" ? "Please enter something in the text box to preview" : text}
      </pre>
    </div>
    </>
  )
}

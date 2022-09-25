import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upper Case clicked"+ text)
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showAlert("Converted to UpperCase","success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleLoClick = ()=>{
    console.log("Lower Case clicked"+ text)
    let newtext=text.toLowerCase()
    setText(newtext)
    props.showAlert("Converted to LowerCase!","success");
  }

  const handleSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Space Corrected!","success");
  }

  const handleClearSpace=()=>{
    let newText ='';
    setText(newText);
    props.showAlert("Cleared!","success");
  }

  const handleCopy=()=>{
    
      navigator.clipboard.writeText(text);
      props.showAlert("Cleared!","success");
  }

  const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
      <h1 >{props.text}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#423f3f',color:props.mode==='dark'?'white':'black'}} value={text} id="mybox" rows="8" onChange={handleOnChange} ></textarea>
      </div>
      <button type="button" className={`btn btn-${props.mode==="dark"?'dark':'primary'} my-3`} onClick={handleUpClick}>UpperCase</button>
      <button type="button" className={`btn btn-${props.mode==="dark"?'dark':'primary'} my-3 mx-2`} onClick={handleLoClick}>LowerCase</button>
      <button type="button" className={`btn btn-${props.mode==="dark"?'dark':'primary'} my-3 mx-2`} onClick={handleSpace}>Remove Space</button>
      <button type="button" className={`btn btn-${props.mode==="dark"?'dark':'primary'} my-3 mx-2`} onClick={handleClearSpace}>Clear</button>
      <button type="button" className={`btn btn-${props.mode==="dark"?'dark':'primary'} my-3 mx-2`} onClick={handleCopy}>Copy</button>

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length -1} words and {text.length} charecters</p>
      <p>{ 0.008 *text.split(" ").length } Mins Required to Read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}

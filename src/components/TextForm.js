import React,{useState} from 'react'

export default function TextForm(props) {
  const handleupClick=()=>{
    
    
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleloClick=()=>{
    let newText= text.toLowerCase();
    setText(newText);
    
  }
  const handletoClear=()=>{
    let newText="";
    setText(newText);
    
  }
  const handleOnChange=(event)=>{
   
    setText(event.target.value)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent == "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
       
        if (toogle.innerHTML = "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}

  const [text,setText]=useState("")
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1> 
  <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChange} value={text} id="box" rows="10"></textarea>
  </div>
    <button className="btn btn-primary mx-2" onClick={handleupClick}>convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handletoClear}>Clear</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    </div>
    <div className="container">
      <h3>your para contains</h3>
      <p>{text.length} characters & {text.split(" ").length} words</p>
      <h5>{0.005*text.split(" ").length} minutes to read this</h5>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )
}

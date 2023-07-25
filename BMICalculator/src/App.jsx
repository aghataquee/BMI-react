import { useState } from 'react'

import './App.css'

function App() {
  const [width, setwidth] = useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState(0);
  const [message,setmessage]=useState('');
  const compute_bmi=(e)=>{
    e.preventDefault();
    if(width==0 || height==0){
      alert("enter valid number")
    }
    let bmi=(width)/(height*height);
    setbmi(bmi.toFixed(1));
    if(bmi>5){
      setmessage("you are overweight")
    }
    else if(bmi>2 && bmi<5){
      setmessage("you are fit")
    }
    else if(bmi<2){
      setmessage("you are unweight");
    }
  }
  let reload=() => {
    window.location.reload()
  }

  return (
    <div className="app">
    <div className="container">
      <h2>BMI CALCULATOR</h2>
      <form onSubmit={compute_bmi}>
        <div className='width'>
        <label >Width:</label>
        <input type="text"  placeholder={"Enter your width"} onChange={(e)=>setwidth(e.target.value)} />
        </div>
        <div className='height'>
          <label htmlFor="">Height:</label>
          <input type="text" placeholder={"Enter your height"} onChange={(e)=>setheight(e.target.value)} />
        </div>
        <div className="buttons">
          <button className="submitbutton" type="submit" >Submit</button>
          <button className="reload" type="submit" onClick={reload}>Reload</button>
        </div>
        
        
      </form>
      <div className='msg'>
          <p>Your BMI is:{bmi}</p>
          <p>{message}</p>
        </div>
    </div>
    </div>
  )
}

export default App


import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
// import About from './components/About.js';
import React, { useState } from 'react'
import Alert from './components/Alert.js';
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(()=>{
      setAlert(null)
    },1200)

  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode enabled","success");
      document.title="TextUtils-Dark mode";    
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled","success");
      document.title="TextUtils-Light mode";
      
    }
  }
  return (
    <> 
{/* <Router> */}
    <Navbar title="Text-Utils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
  <div className="container my-3">

      {/* <Routes>
          <Route exact path="/about" element={<About />}/>	
          <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>}/>	
      </Routes>

      
  
</Router> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>
</div>
    </>
  );
}

export default App;

import React,{ useState } from 'react';
import './App.css';
/* import About from './components/About';*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; */


function App() {
  const [mode,setmode]= useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setmode('dark');
      document.body.style.background="#423f3f";
      showAlert("Dark Mode Enable","success")
      /*setInterval(()=>{
        document.title='Hi☀️';
      },1000);
      setInterval(()=>{
        document.title='How are you?💌';
      },1200);
      setInterval(()=>{
        document.title='Cool😎';
      },1400);
      setInterval(()=>{
        document.title='U r zAmazing!!💖';
      },1600);*/
    }
    else{
    setmode('light');
    document.body.style.background="white";
    showAlert("Light Mode Enable","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} text="Enter Text" mode={mode}/>
    {/* <Routes>
          <Route path="/about" element={<About/>}/>
            
          <Route path="/" element={<TextForm showAlert={showAlert} text="Enter Text" mode={mode}/>}/>
          
    </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}
export default App;

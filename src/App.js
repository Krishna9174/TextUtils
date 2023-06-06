
import "./App.css";
import Alert from "./component/Alert";
import Navbar from './component/Navbar';
import TextForm from "./component/TextForm"; 
import React, {useState} from 'react';

//import About from "./component/About";
function App() {
const [mode,setMode]=useState('light'); //whether dark mde is enable or not 
 const [alert,setAlert] = useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null); 
  },1500);
}
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");
  }
 }

return (
    <>
   { /* <Navbar title="TextUtils" AboutText="About"/>  */ }
   <Navbar title="TextUtils" AboutText="About" mode={mode} toggleMode={toggleMode} /> 
 <Alert alert={alert} />
 <div className="container my-3">
 
 <TextForm showAlert={showAlert}  heading="Enter the text to Analyze below"  mode={mode}/> 
  {/*<About/> */}
 </div>
</>
);
}

export default App;

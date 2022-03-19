import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled","success")
    }
  }

  return (
    <>
      <BrowserRouter>
      <NavBar text="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} label='Enter Text Here' mode={mode}></TextForm>} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;

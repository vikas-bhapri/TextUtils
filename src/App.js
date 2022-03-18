import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import {useState} from 'react'


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <NavBar text="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
        <TextForm label="Enter the text to be analyzed" mode={mode}/>
      </div>
      
    </>
    
  );
}

export default App;

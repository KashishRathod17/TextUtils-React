import './App.css';
import Navbar from './commponents/Navbar';
import TextForm from './commponents/TextForm';
import About from './commponents/About';
import { useState } from 'react';
import Alert from './commponents/Alert';
import React from "react";
import {
  //BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'cadetblue'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")

    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => { //will automatically remove alertbox after 2 seconds, and set the setAlert to null.
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes> {/* Updated from Switch */}
            <Route exact path="/about" element={<About mode={mode} heading="About Us"/>} /> {/* Updated Route usage */}
            <Route exact path="/textform" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}
export default App;
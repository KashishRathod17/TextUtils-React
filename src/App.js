import './App.css';
import Navbar from './commponents/Navbar';
import TextForm from './commponents/TextForm';
//import Greeting from './commponents/Greeting';
//import About from './commponents/About';
import { useState } from 'react';
import Alert from './commponents/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [brownmode, setBrownMode] = useState(null);
  const showBrownMode = () => {
    setBrownMode('brown')
    document.body.style.backgroundColor = ' rgb(137, 101, 101)'
    document.body.style.color = 'white'
    setPinkMode(null)
    // setMode(null)
  }
  const [pinkmode, setPinkMode] = useState(null);
  const showPinkMode = () => {
    setPinkMode('pink')
    document.body.style.backgroundColor = ' rgb(222, 172, 231)'
    document.body.style.color = 'black'
    setBrownMode(null)
    setMode(null)
  }

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
   
      <Navbar title="TextUtils" aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        showBrownMode={showBrownMode}
        showPinkMode={showPinkMode} />

      <Alert alert={alert} />

      <div className="container my-3" >
            {/* <About /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div>

    </>
  );
  // return (
  //   <>
  //     <Router>
  //       <Navbar
  //         title="TextUtils"
  //         aboutText="About TextUtils"
  //         mode={mode}
  //         toggleMode={toggleMode}
  //         showBrownMode={showBrownMode}
  //         showPinkMode={showPinkMode}
  //       />

  //       <Alert alert={alert} />

  //       <div className="container my-3">
  //         <Routes> {/* Updated from Switch */}
  //           <Route exact path="/about" element={<About />} /> {/* Updated Route usage */}
  //           <Route exact path="/textform" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
  //         </Routes>
  //       </div>

  //     </Router>
  //   </>
  // );
  

}

export default App;

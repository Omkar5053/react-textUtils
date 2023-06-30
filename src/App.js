import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import Alert from "./Components/Alert";
import About from "./Components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable");
  const [alert, setAlert] = useState(null);

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Disable");
      document.body.style.backgroundColor = "#2C3333";
      showAlert("Dark Mode is Enabled!!", "success");
    } else {
      setMode("light");
      setText("Enable");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled!!", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar title="MyTitle" text={text} mode={mode} handle={handleMode} />
      <Alert alert={alert} />

      <div className="container">
              <TextBox
                heading="Enter Your Text to Analyse"
                mode={mode}
                showAlert={showAlert}
              /> 
         {/* <About /> */}
      </div>
    </>
  );
}

export default App;





// <BrowserRouter>
// <Navbar title="MyTitle" text={text} mode={mode} handle={handleMode} />
// <Alert alert={alert} />

// <div className="container">
//   <Routes>
//     <Route
//       path="/"
//       element={
//         <TextBox
//           heading="Enter Your Text to Analyse"
//           mode={mode}
//           showAlert={showAlert}
//         />
//       }
//     />
//     <Route path="/about" element={<About />} />
//   </Routes>
// </div>
// </BrowserRouter>
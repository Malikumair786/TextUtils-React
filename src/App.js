import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#032356";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Text"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
            {/* <Route exact path='/about' element={<About
                mode={mode} />}
                />} */}
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          {/* <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        /> */}
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;

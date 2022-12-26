import "./normalize.css";
import "./style.css";
import React, { useState } from "react";
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";

function App() {
  const [edit, setEdit] = useState(false);

  const buttonHandleClick = () => {
    setEdit((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header display={edit} />
      <Education display={edit} />
      <div className="spacer-container">
        <div className="spacer"></div>
      </div>
      <Experience display={edit} />
      <div className="Buttons">
        {edit === true ? (
          <button className="edit-btn" onClick={buttonHandleClick}>
            Edit
          </button>
        ) : (
          <button className="submit-btn" onClick={buttonHandleClick}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

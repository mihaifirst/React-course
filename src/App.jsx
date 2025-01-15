import React from "react";

const App = () => {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>

      <p className="message"> Hello</p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default App;

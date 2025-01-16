import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
<<<<<<< Updated upstream
    if (step < messages.length) {
=======
    if (step < 3) {
>>>>>>> Stashed changes
      setStep(step + 1);
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
<<<<<<< Updated upstream
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
=======
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
>>>>>>> Stashed changes
      </div>
      {/* 
      {messages.map((message) => {
        <p className="message">{message}</p>;
      })} */}

      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
<<<<<<< Updated upstream
=======

      {/* <p className="message"> Hello</p> */}
>>>>>>> Stashed changes

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

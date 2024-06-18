import React from "react";

const InputTimer = (props) => {
  const { handleInput, handleStartTimer } = props;
  return (
    <div className="input_box">
      <input id="hr" placeholder="HH" onChange={handleInput}></input>
      <input id="min" placeholder="MM" onChange={handleInput}></input>
      <input id="sec" placeholder="SS" onChange={handleInput}></input>
      <button id="startButton" onClick={handleStartTimer}>
        Start Timer
      </button>
    </div>
  );
};

export default InputTimer;

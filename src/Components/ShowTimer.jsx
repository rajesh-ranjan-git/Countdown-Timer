import React from "react";

const ShowTimer = (props) => {
  const {
    hr,
    min,
    sec,
    isPaused,
    handlePauseTimer,
    handleResumeTimer,
    handleReset,
  } = props;

  return (
    <div className="showTimer">
      <div id="h">{hr < 10 ? `0${hr}` : hr}</div>
      <span>:</span>
      <div id="m">{min < 10 ? `0${min}` : min}</div>
      <span>:</span>
      <div id="s">{sec < 10 ? `0${sec}` : sec}</div>
      {!isPaused && (
        <button id="pauseButton" onClick={handlePauseTimer}>
          Pause
        </button>
      )}
      {isPaused && (
        <button id="resumeButton" onClick={handleResumeTimer}>
          Resume
        </button>
      )}
      <button id="resetButton" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default ShowTimer;

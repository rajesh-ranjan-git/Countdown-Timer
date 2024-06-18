import { useState, useEffect } from "react";
import InputTimer from "./Components/InputTimer";
import ShowTimer from "./Components/ShowTimer";

function App() {
  const [isStartTimer, setIsStartTimer] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerId, setTimerId] = useState(0);

  // const [placeholderHr, setPlaceholderHr] = useState("HH");
  // const [placeholderMin, setPlaceholderMin] = useState("MM");
  // const [placeholderSec, setPlaceholderSec] = useState("SS");

  const handleInput = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    // if (((id === "sec" || id === "min") && value > 59) || value === NaN) {
    //   alert("Invalid Input");
    //   setIsStartTimer(false);
    //   setHr(0);
    //   setMin(0);
    //   setSec(0);
    //   clearInterval(timerId);
    //   setPlaceholderHr("HH");
    //   setPlaceholderMin("MM");
    //   setPlaceholderSec("SS");
    // }

    if (value === NaN) {
      alert("Invalid Input");
      setIsStartTimer(false);
      setHr(0);
      setMin(0);
      setSec(0);
      clearInterval(timerId);
    }
    if (id === "hr") {
      setHr(value);
    } else if (id === "min") {
      setMin(value);
    } else {
      setSec(value);
    }
  };

  const handleStartTimer = () => {
    if (!hr && !min && !sec) {
      alert("Invalid Input");
    } else {
      setIsStartTimer(true);
    }
  };

  const handlePauseTimer = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResumeTimer = () => {
    setIsPaused(false);
    runTimer(hr, min, sec);
  };

  const handleReset = () => {
    setIsStartTimer(false);
    setHr(0);
    setMin(0);
    setSec(0);
    clearInterval(timerId);
  };

  const runTimer = (hr, min, sec) => {
    if (sec > 0) {
      setSec((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setSec(59);
      setMin((m) => m - 1);
    } else if (min === 0 && hr > 0) {
      setMin(59);
      setHr((h) => h - 1);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      handleReset();
      // alert("Timer Finished");
      // clearInterval(timerId);
      // return;
    }
  };

  useEffect(() => {
    let tid;
    tid = setInterval(() => {
      runTimer(hr, min, sec);
    }, 1000);
    setTimerId(tid);

    return () => {
      clearInterval(tid);
    };
  }, [isStartTimer, hr, min, sec]);

  return (
    <>
      <h1>Countdown Timer</h1>
      {!isStartTimer && (
        <InputTimer
          handleInput={handleInput}
          handleStartTimer={handleStartTimer}
        />
      )}

      {/* {!isStartTimer && (
        <div className="input_box">
          <input id="hr" placeholder="HH" onChange={handleInput}></input>
          <input id="min" placeholder="MM" onChange={handleInput}></input>
          <input id="sec" placeholder="SS" onChange={handleInput}></input>
          <button id="startButton" onClick={handleStartTimer}>
            Start Timer
          </button>
        </div>
      )} */}

      {isStartTimer && (
        <ShowTimer
          hr={hr}
          min={min}
          sec={sec}
          isPaused={isPaused}
          handlePauseTimer={handlePauseTimer}
          handleResumeTimer={handleResumeTimer}
          handleReset={handleReset}
        />
      )}

      {/* {isStartTimer && (
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
      )} */}
    </>
  );
}

export default App;

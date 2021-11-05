import React, { useState } from 'react';
import BtnStopwatch from './components/Stopwatch/BtnStopwatch';
import DisplayStopwatch from './components/Stopwatch/DisplayStopwatch';
import './App.css';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  const resume = () => start();

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };
  return (
    <div className="main">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayStopwatch time={time} />
          <BtnStopwatch
            status={status}
            start={start}
            stop={stop}
            resume={resume}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}
export default App;

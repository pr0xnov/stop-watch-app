import React from 'react';

function BtnStopwatch(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button className="stopwatch-btn" onClick={props.start}>
          <img src="https://img.icons8.com/ios/50/000000/play--v1.png" />
        </button>
      ) : (
        ''
      )}
      {props.status === 1 ? (
        <>
          <button className="stopwatch-btn" onClick={props.stop}>
            <img src="https://img.icons8.com/ios/50/000000/pause--v1.png" />
          </button>
          <button className="stopwatch-btn" onClick={props.reset}>
            <img src="https://img.icons8.com/ios-glyphs/50/000000/refresh.png" />
          </button>
        </>
      ) : (
        ''
      )}
      {props.status === 2 ? (
        <>
          <button className="stopwatch-btn" onClick={props.resume}>
            <img src="https://img.icons8.com/ios/50/000000/play--v1.png" />
          </button>
          <button className="stopwatch-btn" onClick={props.reset}>
            <img src="https://img.icons8.com/ios-glyphs/50/000000/refresh.png" />
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
export default BtnStopwatch;

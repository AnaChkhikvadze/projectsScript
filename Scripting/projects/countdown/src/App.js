import './App.css';
import React, { useState } from 'react';
import CountDown from './Components/countdown';

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const [date, setDate] = useState("");
  const change = (event) => setDate(event.target.value);

  const [intervalID, setIntervalID] = useState(null);

  function setTimer() {
    const now = new Date().getTime();
    const countDownDate = new Date(date).getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
    const seconds = Math.floor((distance % (60 * 1000)) / 1000);

    if (distance < 0) {
      clearInterval(intervalID.current);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  }

  const startTimer = () => {
    console.log(intervalID);

    if (intervalID != null) {
      clearInterval(intervalID);
      setIntervalID(null);
    }
    setIntervalID(setInterval(setTimer));
  };
  return (
    <div className="App">
      <div className='inputs'>
      <h1> Countdown App </h1>
      <label for="event">Event name:</label>
      <input type="text" id="event" name="event"></input><br></br><br></br>
      <label> Date: </label>
      <input type="date" id="event" onChange={change} />
      <button type='submit' value="Countdown" onClick={() => startTimer()}> calculate  </button>
      </div>
      <CountDown
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;
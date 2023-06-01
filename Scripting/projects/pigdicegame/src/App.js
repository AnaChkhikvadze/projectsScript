
import './App.css';
import React, { useState } from "react";

function App() {
  const [roll, setRoll] = useState(0);
  const [hold, setHold] = useState(false);
  const [initial, setInitial] = useState(true);
  const [lose, setLose] = useState(false);
  const [points, setPoints] = useState(0);
  const [max, setMax] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [roundScore1, setRoundScore1] = useState(0);
  const [roundScore2, setRoundScore2] = useState(0);
  const [active, setActive] = useState(true);

  function move() {
    setInitial(false);
    while (hold === false) {
      var again=true;
      const x = Math.floor(Math.random() * 6 + 1);
      const y = Math.floor(Math.random() * 6 + 1);
      if (x === 1 || y === 1) {
        alert("You rolled " + x + " and " + y);
        setRoundScore1(0);
        setHold(true);
      }
      else {
        alert("You rolled " + x + " and " + y);
        setRoundScore1(roundScore1 + x + y);
        alert('your round score is ' + roundScore1);
        again=prompt("wanna go on?");
        if(again===false){
          holding();
        }
      }
    }
    alert("Your Turn is Over");
    return roundScore1;
  }

  function secondMove() {
    setInitial(false);
    while (hold === false) {
      var again=true;
      const x = Math.floor(Math.random() * 6 + 1);
      const y = Math.floor(Math.random() * 6 + 1);
      if (x === 1 || y === 1) {
        alert("You rolled " + x + " and " + y);
        setRoundScore2(0);
        setHold(true);
      }
      else {
        alert("You rolled " + x + " and " + y);
        setRoundScore1(roundScore2 + x + y);
        alert('your round score is ' + roundScore2);
        again=prompt("wanna go on?")
        if(!(again==="no")){
          holding();
        }
      }
    }
    alert("Your Turn is Over");
    return roundScore2;
  }

  function playGame() {
    while (playerOneScore < 100 && playerTwoScore < 100) {
      alert("PlayerOne total score is now: " + playerOneScore);
      setPlayerOneScore(playerOneScore + move());
      alert("PlayerOne total score is now: " + playerOneScore);
      if (playerOneScore < 100) {
        alert("PlayerTwo total score is now: " + playerTwoScore);
        setPlayerTwoScore(playerTwoScore + secondMove());
        alert("PlayerTwo total score is now: " + playerTwoScore);
      }
    }
  }

  function RollDice() {
    const x = Math.floor(Math.random() * 6 + 1);
    const y = Math.floor(Math.random() * 6 + 1);
  }

  const Restart = () => {
    if (points > max) {
      setMax(points);
    }
    setRoll(0);
    setHold(false);
    setPoints(0);
    setInitial(true);
    setLose(false);
  };

  function holding(){
    setHold(true);
    setActive(!active);
  }

  return (
    <div className="App">
      <h1>Welcome to Pig Dice Match!</h1>
      <div className="container">
        {active?<>
        <section className="player1">
            <div className="tscore">
                <h2 className="name" id="name--0">
                    Total Score<br></br>
                    <span className="pl">Player 1:</span>
                </h2>
                <p className="score" id="score--0">{playerOneScore}</p>
            </div>
  
            <div className="current">
                <p className="current-label">Current Score</p>
  
                <p className="current-score" id="current--0">{roundScore1}</p>
  
            </div>
        </section>
        </>:<>
        <section className="player 2">
            <div className="tscore">
                <h2 className="name" id="name--1">
                    Total Score<br></br>
                    <span className="pl">Player 2</span>
                </h2>
                <p className="score" id="score--1">{playerTwoScore}</p>
            </div>
  
            <div className="current">
                <p className="current-label">Current Score</p>
  
                <p className="current-score" id="current--1">{roundScore2}</p>
  
            </div>
        </section>
        </>}
        <button className="btn btn--roll" onClick={playGame()}>Roll dice</button>
        <button className="btn btn--hold">Hold</button>
    </div>
    </div >
  );
}

export default App;




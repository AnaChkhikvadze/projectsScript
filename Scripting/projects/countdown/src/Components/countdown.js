import React, { Fragment } from "react";

const CountDown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="container">
        <section className="timer">
          <div className="countdown">
            <h1>Time Left:</h1>
            <section>
              <p>{timerDays}</p>
              <h1>Days</h1>
            </section>

            <section>
              <p>{timerHours}</p>
              <h1>Hours</h1>
            </section>

            <section>
              <p>{timerMinutes}</p>
              <h1>Minutes</h1>
            </section>

            <section>
              <p>{timerSeconds}</p>
              <h1>Seconds</h1>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default CountDown;
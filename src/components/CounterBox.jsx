import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/CounterBox.css';
import Timer from './Timer';
import { useInterval } from './useInterval';
export default function CounterBox() {
  const [status, setStatus] = useState('Trabalhando');
  const [time, setTime] = useState(1500);
  const [isWorking, setIsWorking] = useState(false);
  const [timeCouting, setTimeCouting] = useState(false);

  const startTimer = () => {
    setTimeCouting(true);
    setIsWorking(true);


  };

  const stopTimer = () => {
    setIsWorking(false);
    setTimeCouting(!timeCouting); // true -> false
  };

  const startRest = () => {
    setStatus("Descansando")
    setIsWorking(true);
    setTimeCouting(true);
    setTime(300)
  }

  const restart = () => {
    setStatus("Trabalhando");
    setIsWorking(true);
    setTime(1500)
  }

  useInterval(
    () => {
      setTime((time) => time - 1);
    },
    isWorking ? 1000 : null
  );

  return (
    <>
      <div className='container'>
        Você está: {status}
        <br />
        <Timer counter={time} />
        <div className='buttons'>
          <Button
            titulo='start'
            onClick={() => {
              startTimer();
            }}
          />
          <Button
            titulo='stop'
            onClick={() => {
              stopTimer();
            }}
          />
          <Button
            titulo='descansar'
            onClick={() => {
              startRest();
            }}
          />
          <Button 
            titulo='restart'
            onClick={() => {
              restart()
            }} />
        </div>
      </div>
    </>
  );
}

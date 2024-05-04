import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ start, end, duration }) => {
  return (
    <CountUp start={start} end={end} duration={duration} />
  );
}

export default Counter;

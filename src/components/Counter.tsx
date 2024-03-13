import { useState } from 'react';
import classes from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount(count + 1);
  };
  return (
    <button onClick={increment} className={classes.counter}>
      {count}
    </button>
  );
};

export default Counter;

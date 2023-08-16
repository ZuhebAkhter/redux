import { useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { increment,decrement } from './CounterSlice';

const Counter = () => {
  const count=useSelector(state=> state.counter.value)
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {

  };
  const incrementHandler=()=>{
    dispatch(increment())
  }
  const DecrementHandler=()=>{
    dispatch(decrement())

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
     <div>
      <button onClick={incrementHandler}>Increment By 5</button>
      <button onClick={DecrementHandler}>Decrement By 5</button>

     </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

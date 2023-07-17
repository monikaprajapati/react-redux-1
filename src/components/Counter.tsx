import React from "react";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "src/store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(
    (state: { counter: any }) => state.counter.counterValue
  );

  const showCounter = useSelector(
    (state: { counter: any }) => state.counter.showCounter
  );

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementBy5(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={incrementBy5Handler}>Increment By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

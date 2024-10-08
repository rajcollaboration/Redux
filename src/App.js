
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from './Redux/Actions/actions';
import { useState } from 'react';
import { getBlog } from './Redux/Actions/dataAction';

function App() {
  const data = useSelector(state => state.data.data);
  const dispatch = useDispatch();
  console.log(data);
  useState(()=>{
    dispatch(getBlog());
  },[]);
  return (
    <div className="App">
      {/* <h1>Total Count {count}</h1> */}
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
    </div>
  );
}

export default App;

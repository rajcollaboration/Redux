
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Redux/Actions/actions';

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Total Count {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;

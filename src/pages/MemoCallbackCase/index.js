import { useState, useCallback } from "react";
import Todo from "./Todo";

const Counter = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);

  const updateTodo = useCallback(() => {
    setTodo([...todo, `Todo ${count}`])
  }, [todo])
  
  const increament = () => {
    setCount((prev) => prev + 1);
  }
  
  return (
    <>
      <Todo todo={todo} addTodo={updateTodo} />
      <div>Count: {count}</div>
      <button onClick={increament}>Increase Count</button>
      <button onClick={updateTodo}>Add Todo</button>
    </>
  );
};

export default Counter;

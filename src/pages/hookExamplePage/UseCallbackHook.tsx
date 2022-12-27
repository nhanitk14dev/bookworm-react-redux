import TodoList from "./TodoList";
import { useState, useCallback } from "react";
import { SectionContainer } from "../../styles/commonStyles";

const UseCallbackHook = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodo] = useState<string[]>([]);

  // Case not use Callback
  /* const fnAddTodo = () => {
    setTodo((t) => [...t, "Add New Todo Without Using Callback"]);
  };
  */

  const cachedFnAddTodo = useCallback(() => {
    setTodo((t) => [...t, "Add New Todo"]);
  }, [todos]);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <SectionContainer>
      <h2>useCallback(fn, dependencies)</h2>
      <i>UseCallback is a React Hook that lets you cache a function definition between re-renders</i>
      <TodoList todoList={todos} addTodo={cachedFnAddTodo} />
      <div>
        <hr />
        <i>
          When we click the count button, the count number is updated and
          the component will re-render (both current & child). Otherwise, we're using
          <strong>memo ~ cache component</strong>, so the Todo list component
          will cache (not re-renders) until the
          <strong> todos or addTodo function</strong> are changes. Check console
          log to see message
        </i>
        <div>
          <button onClick={handleCount}>Count +</button>
          Count: {count}
        </div>
      </div>
    </SectionContainer>
  );
};

export default UseCallbackHook;

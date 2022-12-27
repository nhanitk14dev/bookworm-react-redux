import { memo } from "react";

type TodoListProps = {
  todoList: string[];
  addTodo: () => void;
};

const TodoList = ({ todoList, addTodo }: TodoListProps) => {
  console.log("todo list render");

  return (
    <>
      <h2>Todo List</h2>
      {todoList.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}

      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(TodoList);

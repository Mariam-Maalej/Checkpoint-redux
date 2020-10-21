import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toggleTodo } from "../Actions/Actions";
import { editTodo } from "../Actions/Actions";
import { useDispatch } from "react-redux";
import Modaltodo from "./Modal";
import { Button } from "react-bootstrap";

const ListTask = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const [newDesc, setNewDesc] = useState("");
  const handleChangeDesc = (e) => {
    setNewDesc(e.target.value);
  };

  return (
    <div className="container">
      <h1>What's the plan for today?</h1>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <ul className="todo-ul">
            <li
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.description}
            </li>
            {/*Edit part*/}
            <Modaltodo
              handleEdit={() => {
                dispatch(editTodo(todo.id, newDesc));
                console.log(todo.id, newDesc);
              }}
              handleChangeDesc={handleChangeDesc}
              newDesc={newDesc}
            />
            {/*Toggle button*/}
            <Button
              type="submit"
              className="submit"
              onClick={() => {
                handleToggle(todo.id);
              }}
            >
              {" "}
              Done
            </Button>
            {/*Filter show button*/}
            <Button className="submit" onClick={() => {}}>
              {" "}
              Show
            </Button>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ListTask;

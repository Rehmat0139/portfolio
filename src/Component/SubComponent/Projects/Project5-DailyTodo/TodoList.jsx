import React from "react";
import "./TodoStyle.css";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [work, setWork] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setTask([...task, { work }]);
    setWork("");
  };

  const handleDelete = (workToDelete) => {
    const updatedTask = task.filter((item) => item.work !== workToDelete);
    setTask(updatedTask);
  };

  return (
    <>
      <div className="container-fluid PageTodo">
        <h1 className="text-center m-4">Daily Work</h1>
        <div className="d-flex flex-column main-container">
          <form onSubmit={submitHandle} className="form">
            <input
              type="text"
              value={work}
              onChange={(e) => setWork(e.target.value)}
              placeholder="Write something"
              id=""
            />
            <button
              type="submit"
              className="btn"
              style={{ fontWeight: "600",color:'#1d80ad' }}
            >
              ADD
            </button>
          </form>
          {task.map((item, index) => (
            <Card key={item.work} work={item.work} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;

function Card ({work,onDelete}) {
    return (
        <div className="card">
          <p>{work}</p>
          <button onClick={() => onDelete(work)}>Delete</button>
        </div>
      );
}
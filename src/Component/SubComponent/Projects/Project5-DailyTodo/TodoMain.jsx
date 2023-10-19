import React from "react";
import { Link } from "react-router-dom";

const TodoMain = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
              <h1 style={{ fontWeight: "600" }}>DAILY TODO - LIST</h1>
              <p>
                The React Todo List project is a simple and user-friendly web
                application that allows users to manage their daily tasks
                efficiently. It provides an intuitive interface where users can
                add and delete tasks, making it easy to keep track of their
                to-do items.
              </p>
              <span className="fs-3 text-warning">Click The Image 👇</span>
         
              <Link to="/portfolio/Project/project5-DailyTodo/Daily-Todo">
                <img
                  src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                  alt=""
                  style={{ height: "350px" }}
                />
              </Link>
              <h3>Lets Try And Make Your Own Daily List Of Todo's</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoMain;

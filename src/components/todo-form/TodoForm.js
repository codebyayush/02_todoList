"use client";
import React, { useRef } from "react";

const TodoForm = (props) => {
  const taskRef = useRef();
  const descRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTask = taskRef.current.value;
    const enteredDesc = descRef.current.value;

    const newTask = {
      task: enteredTask,
      description: enteredDesc,
      checked: false,
    };

    props.addTask(newTask);

    taskRef.current.value = "";
    descRef.current.value = "";
  };

  return (
    <div className="flex justify-center h-80">
      <form
        className=" rounded-md p-4 w-1/2 mt-auto bg-fuchsia-200 shadow-xl"
        onSubmit={submitHandler}
      >
        <label htmlFor="task">Task</label>
        <br />
        <input
          ref={taskRef}
          className="border border-gray-500  rounded-md p-1 w-full mb-2"
          type="text"
          id="task"
          required
        />
        <br />

        <label htmlFor="description">Description</label>
        <br />
        <textarea
          ref={descRef}
          className="mb-2 border border-gray-500 rounded-md p-1 w-full"
          id="description"
          required
        />
        <br />

        <button
          className="bg-fuchsia-700 mt-1 w-full text-white rounded-md p-1 font-bold"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

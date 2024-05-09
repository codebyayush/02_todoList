"use client";
import ItemContext from "@/context/ItemContext";
import React, { useContext, useEffect } from "react";

const AllTask = (props) => {
  const { tasks } = props;

  const ctx = useContext(ItemContext);

  useEffect(() => {
    ctx.addAll(tasks);
  }, [tasks]);

  const deleteHandler = async (id) => {
    const resp = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (resp.ok) {
      console.log("task deleted...");
      ctx.setTaskArray((prevTasks) =>
        prevTasks.filter((task) => task._id !== id)
      );
    } else {
      console.log("not deleted...");
    }
  };

  const checkboxHandler = async (task) => {
    const updatedTask = {
      _id: task._id,
      task: task.task,
      description: task.description,
      checked: !task.checked,
    };

    const resp = await fetch(
      `http://localhost:3000/api/tasks/${updatedTask._id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedTask),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (resp.ok) {
      const data = await resp.json();
      console.log("task updated...", data);

      const index = ctx.taskArr.findIndex(
        (task) => task._id == updatedTask._id
      );

      if (index !== -1) {
        const updatedTaskArray = [...ctx.taskArr];
        updatedTaskArray[index] = updatedTask;

        ctx.setTaskArray(updatedTaskArray);
      }
    } else {
      console.log("not updated...");
    }
  };

  return (
    <>
      
        <div className="flex justify-center">
          <div className="rounded-md p-4 mt-2 max-w-lg w-1/2 min-w-80 bg-fuchsia-200 shadow-xl">
            {ctx.taskArr.length == 0 ? (
              <p className="font-bold text-xl text-center text-red-600">
                No Task added
              </p>
            ) : (
              ctx.taskArr.map((task) => (
                <>
                  <div>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <div className={"mt-2"}>
                          <label className="rounded-full">
                            <input
                              type="checkbox"
                              id="taskCheckbox"
                              onClick={() => checkboxHandler(task)}
                            />
                          </label>
                        </div>
                        <div className="ms-2">
                          <p
                            className={
                              !task.checked
                                ? " font-medium"
                                : "font-medium line-through"
                            }
                          >
                            {task.task}
                          </p>
                          <p
                            className={
                              !task.checked ? "text-xs" : "text-xs line-through"
                            }
                          >
                            {task.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          className="bg-red-500 text-white p-2 font-normal rounded-md"
                          onClick={() => deleteHandler(task._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <hr className="rounded-md mt-2 border-gray-500" />
                  </div>
                  <br />
                </>
              ))
            )}
          </div>
        </div>

    </>
  );
};

export default AllTask;

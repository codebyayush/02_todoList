"use client";
import React, { useState } from "react";
import ItemContext from "./ItemContext";

const CtxProvider = ({ children }) => {
  const [taskArr, setTaskArr] = useState([]);

  const addAllTask = (alltask) => {
    setTaskArr(alltask);
  };

  const filterTask = (id) => {
      const updatedArr = taskArr.filter((task) => task._id !== id)
      setTaskArr(updatedArr)
  }

  const context = {
    taskArr: taskArr,
    addAll: addAllTask,
    setTaskArray: setTaskArr,
    filterTask: filterTask,
  };

  return (
    <ItemContext.Provider value={context}>{children}</ItemContext.Provider>
  );
};

export default CtxProvider;
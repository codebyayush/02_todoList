'use client'
import { createContext } from "react";

const ItemContext = createContext({
  taskArr: [],
  addAll: (alltask) => {},
  filterTask: (id) => {},
  setTaskArray: () => {}
});

export default ItemContext;

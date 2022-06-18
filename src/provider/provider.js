import TaskContext from "./context";
import { useState } from "react";

function Provider({ children }) {
  const [dark, setDark] = useState(false)

  const store = {
    dark,
    setDark
  };

  return (
    <TaskContext.Provider value = { store }>
      { children }
    </TaskContext.Provider>
  );
}

export default Provider;
import TaskContext from "./context";
import { useState } from "react";

function Provider({ children }) {
  const [dark, setDark] = useState(false);
  const [note, setNote] = useState('');
  const [taskList, setTaskList] = useState([{
    id: 0,
  }
  ]);

  const store = {
    dark,
    note,
    taskList,
    setDark,
    setNote,
    setTaskList,
  };

  return (
    <TaskContext.Provider value = { store }>
      { children }
    </TaskContext.Provider>
  );
}

export default Provider;
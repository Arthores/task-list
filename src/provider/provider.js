import TaskContext from "./context";
import { useState } from "react";

function Provider({ children }) {
  const [dark, setDark] = useState(false);
  const [note, setNote] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [updated, setUpdate] = useState(false); 
  const [updateTask, setUpdateTask] = useState('');
  const [currentTask, setCurrentTask] = useState({});

  const store = {
    dark,
    note,
    taskList,
    updated,
    updateTask,
    currentTask,
    setDark,
    setNote,
    setTaskList,
    setUpdate,
    setUpdateTask,
    setCurrentTask,
  };

  return (
    <TaskContext.Provider value = { store }>
      { children }
    </TaskContext.Provider>
  );
}

export default Provider;

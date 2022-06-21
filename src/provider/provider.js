import TaskContext from "./context";
import { useState } from "react";

function Provider({ children }) {
  const [dark, setDark] = useState(false);
  const [note, setNote] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [updated, setUpdate] = useState(false); // define o estado do botão.
  const [updateTask, setUpdateTask] = useState(''); // input de atualização..
  const [currentTask, setCurrentTask] = useState({}); // salva o array da task que quero salvar.

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

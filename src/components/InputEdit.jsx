import React, { useContext } from "react";
import TaskContext from "../provider/context";

function InputEdit () {
  const {
    setUpdate,
    updateTask,
    setUpdateTask,
    currentTask,
    setCurrentTask,
  } = useContext(TaskContext);

  const handleChange = (e) => {
    setUpdateTask(e.target.value); // salva o input (funcioonando)
  }
  
  const newTask = () => { // era pra depositar o valor de 'updated' em note.
    setCurrentTask(elemt => elemt.note = updateTask.toUpperCase());
    console.log(currentTask);
    setUpdateTask('');
    setUpdate(false);
  };

  return (
    <div
      className="update-input"
    >
      <input
        type="text"
        placeholder="Nova nota..."
        value={ updateTask }
        onChange={ handleChange }
      />
      <button
        type="button"
        onClick={ newTask }
      >
        Salvar
      </button>
    </div>
  )
}

export default InputEdit;
import React, { useContext } from "react";
import TaskContext from "../provider/context";

function InputEdit () {
  const {
    setUpdate,
    updateTask,
    setUpdateTask,
    setCurrentTask,
  } = useContext(TaskContext);

  const handleChange = (e) => {
    setUpdateTask(e.target.value);
  }
  
  const newTask = () => {
    setCurrentTask(elemt => elemt.note = updateTask.toUpperCase());
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
        maxLength='60'
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
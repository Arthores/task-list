import React, { useContext } from "react";
import '../css/note.css';
import TaskContext from "../provider/context";

function NoteBlock () {
  const {
    note,
    setNote,
    taskList,
    setTaskList,
  } = useContext(TaskContext);

  const handleChange = (e) => {
    setNote(e.target.value);
  }

  const onAddNote = () => {
    setTaskList(elemt => [...taskList, {
      id: elemt.length,
      date: new Date(),
      note: note
    }])
    setNote('');
  }

  return (
    <div className="note-block">
      <h2 className="title-box"> Task List </h2>
      <label htmlFor="add-note">
        <input
        type="text"
        name="add-note"
        id="add-note"
        className="add-note"
        placeholder="Create a new task..."
        value={ note }
        onChange={ handleChange }
        />
      <button
        type="button"
        className="btn-add-note"
        onClick={ onAddNote }
      >
        +
      </button>
      </label>
    </div>
  )
}

export default NoteBlock;
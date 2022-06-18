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
    if (note === '') return (
      setTaskList([...taskList]),
      global.alert("Campo vazio!!")
    );

    setTaskList(elemt => [...taskList, {
      id: elemt.length,
      date: new Date(),
      note: note.toUpperCase(),
    }])
    setNote('');
  }

  return (
    <>
      <h2 className="title-box"> Task List </h2>
      <section className="add-note-box">
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
      </section>
    </>
  )
}

export default NoteBlock;
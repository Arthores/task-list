import React, { useContext } from "react";
import TaskContext from "../provider/context";
import { BiTaskX, BiListPlus } from 'react-icons/bi';
import '../css/note.css';

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

    setTaskList([...taskList, {
      id: taskList.length,
      date: new Date(),
      note: note.toUpperCase(),
    }])
    setNote('');
  }
  

  const deleteAll = () => setTaskList([]);

  // for completed page <GoTasklist />

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
          <BiListPlus />
        </button>
        <button
          type="button"
          className="btn-add-note"
          onClick={ deleteAll }
        >
          < BiTaskX />
        </button>
      </section>
    </>
  )
}

export default NoteBlock;
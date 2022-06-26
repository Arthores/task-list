import React, { useContext } from "react";
import TaskContext from "../provider/context";
import { GoPencil, GoTrashcan } from 'react-icons/go';
import InputEdit from "./InputEdit";
import '../css/noteList.css';

function NoteList () {
  const {
    taskList,
    setTaskList,
    updated,
    setUpdate,
    setCurrentTask,
  } = useContext(TaskContext);

  const deleteTask = (i) => {
    const elemt = taskList[i];
    const { id } = elemt;
    const e = taskList.filter((task) => task.id !== id);
    if (taskList.length === 0) {
      return setTaskList([]);
    }
    setTaskList(e);
  }

  const updateBtn = (i) => {
    setUpdate(true);
    const elemt = taskList[i];
    setCurrentTask(elemt);
  }
  

  // const completedTask = () => {
  //   set
  // }

  return (
    <section className="note-list">
      { updated ? <InputEdit /> :
        taskList.map((item) => (
        <label htmlFor="task">
          <div
            key={ item.id }
            id="task"
            className='task'
          >
            { item.id + 1}° - { item.note }
          <button
            onClick={ () => deleteTask(item.id) }
            className="delete"
          >
            <GoTrashcan/>
          </button>
          <button
            onClick={ () => updateBtn(item.id) }
            className="update"
          >
            <GoPencil/>
          </button>
          </div>
        </label>
      )) }
    </section>
  )
};

export default NoteList;
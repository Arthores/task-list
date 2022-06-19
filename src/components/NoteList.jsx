import React, { useContext } from "react";
import TaskContext from "../provider/context";
import { GoPencil, GoTrashcan } from 'react-icons/go';

function NoteList () {
  const {
    taskList,
    setTaskList,
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

  const updateTask = (i) => {
    const elemt = taskList[i];
    const { id } = elemt;
    global.alert('Progress', id)
  }
  

  // const completedTask = () => {
  //   set
  // }

  return (
    <section className="note-list">
      { taskList.map((item) => (
        <label htmlFor="task">
          <div
            key={ item.id }
            id="task"
            className='task'
          >
            { item.note }
          <button
            onClick={ () => deleteTask(item.id) }
            className="delete"
          >
            <GoTrashcan/>
          </button>
          <button
            onClick={ () => updateTask(item.id) }
            className="delete"
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
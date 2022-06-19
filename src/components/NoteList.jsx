import React, { useContext } from "react";
import TaskContext from "../provider/context";
import { GoTrashcan } from 'react-icons/go';

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

  const deleteAll = () => setTaskList([]);

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
            // onClick={ }
          >
            { item.note }
          <button
            onClick={ () => deleteTask(item.id) }
            className="delete"
          >
            <GoTrashcan/>
          </button>
          </div>
        </label>
      )) }
    </section>
  )
};

export default NoteList;
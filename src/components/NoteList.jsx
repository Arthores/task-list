import React, { useContext } from "react";
import TaskContext from "../provider/context";
import { GoTrashcan } from 'react-icons/go';

function NoteList () {
  const {
    taskList,
    setTaskList,
  } = useContext(TaskContext);

  const deleteTask = (i) => {
    const { id } = taskList[i]
    const e = taskList.splice(id);
    // if(taskList.indexOf(1)) {
    //   global.alert('ok vc pensou certo')
    // }
    console.log(e);
    setTaskList(e);
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
import React, { useContext } from "react";
import TaskContext from "../provider/context";
import { GoTrashcan } from 'react-icons/go';


  
function MapList(item) {
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


  return (
    <label htmlFor="task">
      <div
        key={item.id}
        id="task"
        className='task'
      // onClick={ }
      >
        {item.note}
      <button
        onClick={() => deleteTask(item.id)}
        className="delete"
      >
        <GoTrashcan />
      </button>
      </div>
    </label>
  )
}

export default MapList;
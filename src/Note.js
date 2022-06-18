import React, { useContext } from "react";
import TaskContext from "./provider/context";
import "./css/desktopPort.css"

function Note () {
  const {
    dark
  } = useContext(TaskContext);

  return (
    <main className={ `note-block ${dark ? "dark-mode" : "light-mode"}` }>
    </main>
  )
}

export default Note;

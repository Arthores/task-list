import React, { useContext } from "react";
import TaskContext from "./provider/context";
import "./css/desktopPort.css"
import NoteBlock from "./components/noteBlock";

function Note () {
  const {
    dark
  } = useContext(TaskContext);

  return (
    <main className={ `note ${dark ? "dark-mode" : "light-mode"}` }>
      <NoteBlock />
    </main>
  )
}

export default Note;

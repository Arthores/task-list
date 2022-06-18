import React, { useContext } from "react";
import TaskContext from "./provider/context";
import NoteBlock from "./components/NoteBlock";
import NoteList from "./components/NoteList";
import "./css/desktopPort.css"

function Note () {
  const {
    dark
  } = useContext(TaskContext);

  return (
    <main className={ `note ${dark ? "dark-mode" : "light-mode"}` }>
      <div className="note-block">
        <NoteBlock />
        <NoteList />
      </div>
    </main>
  )
}

export default Note;

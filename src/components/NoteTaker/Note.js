import React from "react";
import s from "./Note.module.css";

const Note = (props) => {
  const deleteNote = () => {
    props.setNotes(props.notes.filter((e) => e.id !== props.note.id));
  };
  return (
    <div className={s.noteContainer}>
      <h3>Note {props.notes.indexOf(props.note) + 1} </h3>
      <p className={s.noteText}>{props.noteText}</p>
      <div className={s.noteBtnsContainer}>
        <button className={s.noteBtnView}>View</button>
        <button className={s.noteBtnDel} onClick={deleteNote}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;

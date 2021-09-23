import s from "./NoteTaker.module.css";
import { IconContext } from "react-icons";
import { ImPlus, ImCancelCircle } from "react-icons/im";
import Note from "./Note";
const NoteTaker = (props) => {
  const addNote = (event) => {
    event.preventDefault();
    if (props.inputNote.replace(/[\s.,%]/g, "") !== "") {
      props.setNotes([
        ...props.notes,
        {
          text: props.inputNote,
          id: Math.random() * 1000,
        },
      ]);
      props.setInputNote("");
    }
  };
  const inputNoteHandler = (event) => {
    props.setInputNote(event.target.value);
  };
  return (
    <div className={s.note_taker_container}>
      <div
        className={`${s.modalContainer} ${
          props.modalWindow.modalActive ? s.modalActive : ""
        }`}
      >
        <div className={s.modalWindow}>
          <div className={s.btnCancelContainer}>
            <button
              className={s.cancelModalBtn}
              onClick={() =>
                props.setModalWindow({
                  text: "",
                  modalActive: false,
                })
              }
            >
              <IconContext.Provider value={{ className: s.cancelModalBtnIcon }}>
                <ImCancelCircle />
              </IconContext.Provider>
            </button>
          </div>
          <div className={s.textModal}>{props.modalWindow.text}</div>
        </div>
      </div>
      <h1 className={s.appName}>Note taker</h1>
      <form className={s.ntForm}>
        <textarea
          value={props.inputNote}
          onChange={inputNoteHandler}
          placeholder="Add a new note:"
          cols="50"
          rows="10"
          className={s.inputNote}
        ></textarea>
        <button type="submit" className={s.addNote} onClick={addNote}>
          <IconContext.Provider value={{ className: s.addNoteIcon }}>
            <ImPlus />
          </IconContext.Provider>
        </button>
      </form>
      <div className={s.notesContainer}>
        {props.notes.map((note) => (
          <Note
            setNotes={props.setNotes}
            notes={props.notes}
            note={note}
            key={note.id}
            noteText={note.text}
            setModalWindow={props.setModalWindow}
          />
        ))}
      </div>
    </div>
  );
};
export default NoteTaker;

import s from "./NoteTaker.module.css";
import { IconContext } from "react-icons";
import { ImPlus } from "react-icons/im";
const NoteTaker = () => {
  return (
    <div className={s.note_taker_container}>
      <h1 className={s.appName}>Note taker</h1>
      <form className={s.ntForm}>
        <textarea
          placeholder="Add a new note:"
          cols="50"
          rows="10"
          className={s.inputNote}
        ></textarea>
        <button type="submit" className={s.addNote}>
          <IconContext.Provider value={{ className: s.addNoteIcon }}>
            <ImPlus />
          </IconContext.Provider>
        </button>
      </form>
      <div className={s.notesContainer}>
        <div className={s.noteContainer}>
          <h3>Note 1</h3>
          <p className={s.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            nulla auctor, tempor ex quis, varius neque. Nam et augue vel ligula
            sodales ullamcorper. Etiam magna est, tristique ut rutrum eget,
            luctus pulvinar sem. Donec pretium magna arcu, ac vestibulum mi
            vulputate sed. Etiam congue, purus eu ultrices tempus.
          </p>
          <div className={s.noteBtnsContainer}>
            <button className={s.noteBtnView}>View</button>
            <button className={s.noteBtnDel}>Delete</button>
          </div>
        </div>
        <div className={s.noteContainer}>
          <h3>Note 1</h3>
          <p className={s.noteText}>Lorem ipsum dolor sit amet, lorem lorem</p>
          <div className={s.noteBtnsContainer}>
            <button className={s.noteBtnView}>View</button>
            <button className={s.noteBtnDel}>Delete</button>
          </div>
        </div>
        <div className={s.noteContainer}>
          <h3>Note 1</h3>
          <p className={s.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            nulla auctor, tempor ex quis, varius neque. Nam et augue vel ligula
            sodales ullamcorper. Etiam magna est, tristique ut rutrum eget,
            luctus pulvinar sem. Donec pretium magna arcu, ac vestibulum mi
            vulputate sed. Etiam congue, purus eu ultrices tempus.
          </p>
          <div className={s.noteBtnsContainer}>
            <button className={s.noteBtnView}>View</button>
            <button className={s.noteBtnDel}>Delete</button>
          </div>
        </div>
        <div className={s.noteContainer}>
          <h3>Note 1</h3>
          <p className={s.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            nulla auctor, tempor ex quis, varius neque. Nam et augue vel ligula
            sodales ullamcorper. Etiam magna est, tristique ut rutrum eget,
            luctus pulvinar sem. Donec pretium magna arcu, ac vestibulum mi
            vulputate sed. Etiam congue, purus eu ultrices tempus.
          </p>
          <div className={s.noteBtnsContainer}>
            <button className={s.noteBtnView}>View</button>
            <button className={s.noteBtnDel}>Delete</button>
          </div>
        </div>
        <div className={s.noteContainer}>
          <h3>Note 1</h3>
          <p className={s.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            nulla auctor, tempor ex quis, varius neque. Nam et augue vel ligula
            sodales ullamcorper. Etiam magna est, tristique ut rutrum eget,
            luctus pulvinar sem. Donec pretium magna arcu, ac vestibulum mi
            vulputate sed. Etiam congue, purus eu ultrices tempus.
          </p>
          <div className={s.noteBtnsContainer}>
            <button className={s.noteBtnView}>View</button>
            <button className={s.noteBtnDel}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteTaker;

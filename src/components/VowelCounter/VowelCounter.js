import React from "react";
import s from "./VowelCounter.module.css";
import { IconContext } from "react-icons";
import { VscVerified } from "react-icons/vsc";

const VowelCounter = () => {
  const checkBtn = (event) => {
    event.preventDefault();
  };
  return (
    <div className={s.VowelCounterContainer}>
      <h1 className={s.appName}>Vowel Counter</h1>
      <form className={s.vcForm}>
        <textarea
          cols="50"
          rows="10"
          placeholder="Enter the text:"
          className={s.inputText}
        ></textarea>
        <button className={s.checkBtn} onClick={checkBtn}>
          <IconContext.Provider value={{ className: s.checkBtnIcon }}>
            <VscVerified />
          </IconContext.Provider>
        </button>
      </form>
    </div>
  );
};

export default VowelCounter;
